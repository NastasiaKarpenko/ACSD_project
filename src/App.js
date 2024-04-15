import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./views/Home.js";
import Basket from "./views/Basket.js";
import Blog from "./views/Blog.js";
import Catalog from "./views/Catalog.js";
import LogIn from "./views/LogIn.js";
import ProductPage from "./views/ProductPage.js";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Catalog" element={<Catalog />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/Basket" element={<Basket />}></Route>
          <Route path="/ProductPage" element={<ProductPage />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
