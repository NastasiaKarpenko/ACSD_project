import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/ProductInfo';
import CatalogLayout from '../components/CatalogLayout';
function Catalog() {
  const [items, setItems] = useState([]);
  const [itemsBasket, setItemsBasket] = useState([]);

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
  }


  return (
    <div className="container py-4">
      <h2 className="mb-4">Catalog</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((item, index) => (

          <CatalogLayout key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
