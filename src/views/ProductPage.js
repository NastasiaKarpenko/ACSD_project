// import { useState, useEffect } from "react";

// function ProductPage(prop) {
//   const [items, setItems] = useState([]);
//   const itemId = prop.location.state;


//   useEffect(() => {
//     // clearing the array every time the app is saved
//     setItems([]);

//     getItemInfo();

//   }, []);

//   const getItemInfo = async function () {


//     try {

//       const response = await fetch(`https://dummyjson.com/product/${itemId}`);
//       const itemData = await response.json();
//       setItems(itemData);

//     } catch (error) {


//       console.error("There was an error fetching the data, please try again later");

//     }
//   }
//   return (
//     <div>
//       <p>{itemId}</p>
//     </div>
//   );
// }

// export default ProductPage;

import { useState, useEffect } from "react";

function ProductPage(props) {
  const [item, setItem] = useState(null);
  let productId = JSON.parse(localStorage.getItem('single'));
  let currency = "€";
  let max = 30;
  let min = 1
  useEffect(() => {
    getItemInfo();
  }, []);

  if (!productId) {
    productId = Math.floor(Math.random()
      * (max - min + 1)) + min;
  }

  const getItemInfo = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${productId}`);
      const itemData = await response.json();
      setItem(itemData);
    } catch (error) {
      console.error("There was an error fetching the data, please try again later");
    }
  };

  return (
    <div>

      {item ? (
        <>
          <img src={item.images[0]} alt={item.title} width={200} />
          <p><strong>{item.title}</strong></p>
          <p>description: {item.description}</p>
          <p>Brand: {item.brand}</p>
          <p>Price: {currency}{item.price}</p>
          Quantity:
          <input></input>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;