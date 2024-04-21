import React, { useState, useEffect } from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Carousel({ itemsLimit }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${itemsLimit}`)
      .then((res) => res.json())
      .then((data) => setItems(data.products))
      .catch((err) => setError(err));
  }, []);
  console.log(items);

  function handleId(key) {
    localStorage.setItem("single", JSON.stringify(items[key].id));
    console.log(key)
  }
  return (
    <div>
      {error ? (
        <div> {error} </div>
      ) : (
        <ReactCarousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlaySpeed={1000}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
        >
          {items.map((item, key) => (
            <Link to='/ProductPage' onClick={() => handleId(item.id)}>
              <div key={key} className="carusel-item">
                <img className="carousel-image" src={item.images[0]}></img>
                <div className="item-title">{item.title}</div>
                <div className="item-price">{item.price} eur</div>
              </div>
            </Link>
          ))}
        </ReactCarousel>
      )}
    </div>
  );
}

export default Carousel;
