import { useState, useEffect } from "react";
import ProductInfo from '../components/ProductInfo';
import Summary from "../components/Summary";
import { Link } from "react-router-dom";

function Basket() {

  const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem('basket')) || []);
  // const selectedItems = JSON.parse(localStorage.getItem('basket')) || [];
  const isLogin = JSON.parse(localStorage.getItem('user'));
  const [items, setItems] = useState([]);

  let count = 0;

  useEffect(() => {

    if (selectedItems.length > 0) {
      selectedItems.map((i) => {
        getItemInfo(i);
      })

    }
  }, []);
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(selectedItems));
  }, [selectedItems]);

  const getItemInfo = async function (id) {
    try {
      const response = await fetch(`https://dummyjson.com/product/${id.id}`);
      const itemData = await response.json();
      const combinedItemData = { ...itemData, quantity: id.quantity };
      storeFetchData(combinedItemData);
    } catch (error) {
      console.error("There was an error fetching the data, please try again later");
    }
  }

  function storeFetchData(itemData) {
    if (count < selectedItems.length) {
      count++
      setItems(prevItems => [...prevItems, itemData]);
    }
  }

  function removeItem(productId) {

    const filterItems = items.filter(product => parseInt(product.id) !== productId);

    setItems(filterItems);

    localStorage.setItem('basket', JSON.stringify(filterItems))
    alert("Your item has been removed");
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title mb-0">Basket</h5>
            </div>
            <div className="card-body">
              {selectedItems ? (
                items.map((i, index) => (
                  <ProductInfo key={index} item={i} removeItem={removeItem} />
                ))
              ) : (
                <Link to="/Catalog" className="btn btn-secondary">
                  Go to Catalog
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Summary</h5>
            </div>
            <div className="card-body">
              {isLogin && selectedItems ? <Summary items={items} /> : <Link to="/LogIn" className="btn btn-primary btn-block">Log in first</Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket;
