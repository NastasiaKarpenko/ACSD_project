import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className = "footer">
          <span> Welcome to Our Shop! </span>
          <span>Best quality! Perfect deals! </span>
          
           <nav>
              <Link to="/">Home</Link>
              <Link to="/Catalog">Find something for you</Link>
              <Link to="/Blog"> Get to know more</Link>
          </nav>
        </div>
      );
    }
  
    export default Footer;
  
  
  