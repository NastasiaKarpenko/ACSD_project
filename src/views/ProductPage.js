import { Link } from 'react-router-dom';
function ProductPage() {
    return (
      <div>
        About Product
        <Link to="/Catalog" className="buttons">Back to Catalog</Link>
      </div>
    );
  }
  
  export default ProductPage;