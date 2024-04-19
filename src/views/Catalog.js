import React, { useState, useEffect } from 'react';
import ProductInfo from '../components/ProductInfo';

function Catalog() {
  const [items, setItems] = useState([]);

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
          <div className="col mb-4" key={index}>
            <div className="card h-100 border border-dark rounded shadow catalog-card">
              <img src={item.thumbnail} className="card-img-top img-fluid" style={{ maxHeight: '200px' }} alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Rating: {item.rating}</p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
