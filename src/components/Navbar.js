import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/Basket">Basket</NavLink> 
        <NavLink to="/Blog"> Get to know More</NavLink>
        <NavLink to="/Catalog">Find your Item</NavLink>
        <NavLink to="/LogIn">Your account</NavLink>
        <NavLink to="/ProductPage">About Item</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
