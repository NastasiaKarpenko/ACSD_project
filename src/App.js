import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./views/Home.js";
import Blog from "./views/Blog.js";
import FullArticle from "./views/FullArticle.js";
import Basket from "./views/Basket.js";
import Catalog from "./views/Catalog.js";
import ProductPage from "./views/ProductPage.js";
import LogIn from "./views/LogIn.js";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Catalog" element={<Catalog />}></Route>
          <Route path="/ProductPage" element={<ProductPage />}></Route>
          <Route path="/Blog" element={<Blog />}> </Route>
          <Route path="/Blog/:articleId" element={<FullArticle />} />
          <Route path="/Basket" element={<Basket />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
