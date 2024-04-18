import { Link } from 'react-router-dom';
const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
   
  ];

function Catalog() {
   
    return (
            <div>
              Here is Catalog
              {products.map((product) => (
                <div key={product.id}>
                  {product.name}
                  <Link to={`/catalog/${product.id}`} className="buttons">More</Link>
                </div>
              ))}
            </div>
          );
  }
  
  export default Catalog;