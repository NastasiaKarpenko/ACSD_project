
import React, { useState, useEffect } from "react";

function ProductPage(props) {
  const [item, setItem] = useState(null);
  const [basket, setBasket] = useState([]);
  const [quantity, setQuantity] = useState("");
  // fetching items in the basket from localstorage
  const savedBasket = localStorage.getItem('basket');

  let currency = "€";
  let max = 30;
  let min = 1
  // get product id from localstorage
  const productSaved = localStorage.getItem('single');
  useEffect(() => {
    // checking if there is any set it in the basket array
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }

    // cheking for product id if no generate a random product
    if (productSaved) {
      getItemInfo(productSaved);
    } else {
      const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
      localStorage.setItem('single', JSON.stringify(randomId));
      getItemInfo(randomId);
    }
  }, []);


  // fetchin product data to display
  const getItemInfo = async (productId) => {
    try {
      const response = await fetch(`https://dummyjson.com/product/${productId}`);
      const itemData = await response.json();
      setItem(itemData);
    } catch (error) {
      console.error("There was an error fetching the data, please try again later");
    }
  };
  // set quantity item to the basket
  function handleQuantity(e) {
    e.preventDefault();
    setQuantity(e.target.value);

  }
  // adding item and quantity to the basket array
  function addItem(e) {
    e.preventDefault();
    if (quantity > 0) {
      const productObject = { id: item.id, quantity: quantity };
      setBasket([...basket, productObject]);
    }
  };
  // remove item by id if exist in the array and reset the basket array
  function removeItem(e) {
    e.preventDefault();
    const filterItems = basket.filter(product => product.id !== item.id);
    setBasket(filterItems);
  };



  useEffect(() => {
    // set basket array in local storage and listen if it change
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
            <button onClick={addItem}>Add to Basket</button>
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


