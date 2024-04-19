// import React, { useState, useEffect } from 'react';
// import ProductInfo from '../components/ProductInfo';

// function Basket() {
//   const [items, setItems] = useState([]);
//   const [itemsBasket, setItemsBasket] = useState([]);

//   const selectedItems = JSON.parse(localStorage.getItem('basket'));
//   console.log(selectedItems);


//   useEffect(() => {


//     getItemInfo();

//   }, []);

//   const getItemInfo = async function () {
//     try {
//       const response = await fetch('https://dummyjson.com/products');
//       const itemData = await response.json();
//       setItems(itemData.products);
//     } catch (error) {
//       console.error("There was an error fetching the data, please try again later");
//     }
//     // console.log(items);
//   }


//   useEffect(() => {
//     const filterItems = items.filter(item => selectedItems.some(data => parseInt(data.id) === item.id));
//     setItemsBasket(filterItems);
//     // console.log(filterItems);
//   }, [items]);

//   return (
//     <div>
//       <h2>Basket</h2>
//       <ul>
//         {itemsBasket.map((product, index) => (
//           <ProductInfo key={index} product={product} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Basket;
import { useState, useEffect } from "react";
import ProductInfo from '../components/ProductInfo';
import Summary from "../components/Summary";
import { Link } from "react-router-dom";

function Basket() {

  const selectedItems = JSON.parse(localStorage.getItem('basket'));
  const isLogin = JSON.parse(localStorage.getItem('user'));
  const [items, setItems] = useState([]);

  let count = 0;

  useEffect(() => {
    // clearing the array every time the app is saved
    setItems([]);
    if (selectedItems) {
      // iterating through the id from the localstorage
      selectedItems.map((i) => {

        getItemInfo(i);

      })
      getItemInfo();
    }
  }, []);


  const getItemInfo = async function (id) {


    try {

      const response = await fetch(`https://dummyjson.com/product/${id.id}`);
      const itemData = await response.json();
      // adding the quantity of each product
      const conbinedItemData = { ...itemData, quantity: id.quantity };
      storeFetchData(conbinedItemData);

    } catch (error) {


      console.error("There was an error fetching the data, please try again later");

    }
  }
  // preventing useEffect from storing duplicated lines
  function storeFetchData(itemData) {

    if (count < selectedItems.length) {
      count++
      setItems(prevItems => [...prevItems, itemData]);
    }
  }
  // console.log(items);
  return (
    <div>
      <div>
        {selectedItems ? items.map((i, index) => (
          <ProductInfo key={index} item={i} />
        )) : <Link to="/Catalog"><h3>No items in the basket, go to catalog</h3></Link>}
        {/* {items.map((i, index) => (
          <ProductInfo key={index} item={i} />
        ))} */}
      </div>
      <div>
        {isLogin && selectedItems ? <p><Summary items={items} /></p> : <Link to="/LogIn"><button >Log in first</button></Link>}

      </div>
    </div>
  )
}
export default Basket;
