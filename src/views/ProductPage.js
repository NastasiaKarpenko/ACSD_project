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
import React, { useState, useEffect } from "react";

function ProductPage(props) {
  const [item, setItem] = useState(null);
  const [basket, setBasket] = useState([]);
  const [quantity, setQuantity] = useState("");
  let productId = JSON.parse(localStorage.getItem('single'));
  let currency = "€";
  let max = 30;
  let min = 1

  useEffect(() => {
    getItemInfo();
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  if (!productId) {
    productId = Math.floor(Math.random() * (max - min + 1)) + min;
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

  function handleQuantity(e) {
    e.preventDefault();
    setQuantity(e.target.value);

  }

  function addItemToBasket(e) {
    e.preventDefault();
    if (quantity > 0) {
      const productObject = { id: item.id, quantity: quantity };
      setBasket([...basket, productObject]);
    }
  };
  function removeItem(index) {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  };


  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <div>
      {item ? (
        <>
          <img src={item.images[0]} alt={item.title} width={200} />
          <p><strong>{item.title}</strong></p>
          <p>Description: {item.description}</p>
          <p>Brand: {item.brand}</p>
          <p>Price: {currency}{item.price}</p>
          Quantity:
          <form>
            <input type="number" value={quantity} onChange={handleQuantity} required />
            <button onClick={addItemToBasket}>Add to Basket</button>
            <button onClick={removeItem}>Remove</button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductPage;


// // //  //  //  //  //  //  //  //  //  //  //  //  //  /// /// //  / /this is mine
// import { useState, useEffect } from "react";

// function ProductPage(props) {
//   const [item, setItem] = useState(null);
//   const [basket, setBasket] = useState([]);
//   const [quantity, setQuantity] = useState("");
//   let productId = JSON.parse(localStorage.getItem('single'));
//   let currency = "€";
//   let max = 30;
//   let min = 1
//   useEffect(() => {
//     getItemInfo();
//     const savedBasket = localStorage.getItem('basket');
//     if (savedBasket) {
//       setBasket(JSON.parse(savedBasket));
//     }
//   }, []);

//   if (!productId) {
//     productId = Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   const getItemInfo = async () => {
//     try {
//       const response = await fetch(`https://dummyjson.com/product/${productId}`);
//       const itemData = await response.json();
//       setItem(itemData);
//     } catch (error) {
//       console.error("There was an error fetching the data, please try again later");
//     }
//   };
//   function handleQuantity(e) {
//     e.preventDefault();
//     setQuantity(e.target.value);
//   }
//   // this is the one giving loop error
//   function addItemToBasket(e) {
//     e.preventDefault();
//     const productObject = { id: e, quantity: quantity }
//     setBasket([...basket, productObject]);
//   };

//   return (
//     <div>

//       {item ? (
//         <>
//           <img src={item.images[0]} alt={item.title} width={200} />
//           <p><strong>{item.title}</strong></p>
//           <p>description: {item.description}</p>
//           <p>Brand: {item.brand}</p>
//           <p>Price: {currency}{item.price}</p>
//           Quantity:
//           <input value={quantity} onClick={handleQuantity}></input>
//           <button onClick={addItemToBasket(item.id)}>Add Item A</button>
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default ProductPage;

// import React, { useState, useEffect } from 'react';

// function ShoppingCart() {
//   const [basket, setBasket] = useState([]);

//   // Load basket from localStorage on component mount
//   useEffect(() => {
//     const savedBasket = localStorage.getItem('basket');
//     if (savedBasket) {
//       setBasket(JSON.parse(savedBasket));
//     }
//   }, []);

//   // Function to add an item to the basket
//   const addItemToBasket = (item) => {
//     setBasket([...basket, item]);
//   };

//   // Function to remove an item from the basket
//   const removeItemFromBasket = (index) => {
//     const newBasket = [...basket];
//     newBasket.splice(index, 1);
//     setBasket(newBasket);
//   };

//   // Update localStorage whenever basket changes
//   useEffect(() => {
//     localStorage.setItem('basket', JSON.stringify(basket));
//   }, [basket]);

//   return (
//     <div>
//       <h2>Shopping Basket</h2>
//       <ul>
//         {basket.map((item, index) => (
//           <li key={index}>
//             {item}{' '}
//             <button onClick={() => removeItemFromBasket(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addItemToBasket("Item A")}>Add Item A</button>
//       <button onClick={() => addItemToBasket("Item B")}>Add Item B</button>
//       <button onClick={() => addItemToBasket("Item C")}>Add Item C</button>
//     </div>
//   );
// }

// export default ShoppingCart;
