import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/Catalog">Catalog</NavLink>
        <NavLink to="/Blog">Journal</NavLink>
        <NavLink to="/LogIn">Your account</NavLink>
        <NavLink to="/Basket">Basket</NavLink> 
      </nav>
    </div>
  );
}

export default Navbar;
