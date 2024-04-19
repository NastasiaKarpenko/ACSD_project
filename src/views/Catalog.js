import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/ProductInfo';
import CatalogLayout from '../components/CatalogLayout';
function Catalog() {
  const [items, setItems] = useState([]);
  const [itemsBasket, setItemsBasket] = useState([]);

  // const selectedItems = JSON.parse(localStorage.getItem('basket'));
  // console.log(selectedItems);


  useEffect(() => {


    getItemInfo();

  }, []);

  const getItemInfo = async function () {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const itemData = await response.json();

      setItems(itemData.products);
    } catch (error) {
      console.error("There was an error fetching the data, please try again later");
    }
    // console.log(items);
  }


  // useEffect(() => {
  //   const filterItems = items.filter(item => selectedItems.some(data => parseInt(data.id) === item.id));
  //   setItemsBasket(filterItems);
  //   // console.log(filterItems);
  // }, [items]);

  return (
    <div>
      <h2>Catalog</h2>
      <ul>
        {items.map((item, index) => (
          <CatalogLayout key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Catalog;