import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Your Brand Name</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <NavItem to="/" label="Home" />
            <NavItem to="/Basket" label="Basket" />
            <NavItem to="/Blog" label="Get to know More" />
            <NavItem to="/Catalog" label="Find your Item" />
            <NavItem to="/LogIn" label="Your account" />
            <NavItem to="/ProductPage" label="About Item" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ to, label }) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" activeClassName="active" exact to={to}>{label}</NavLink>
    </li>
  );
}

export default Navbar;
