import React, { Component } from "react";
import "./App.css";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

//VIEWS
import Product from "./pages/product/product";
import Ubication from "./pages/ubication/ubication";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Description from "./components/Description/Description";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Header title="Bienvenidos a M&S Talabarteria, la fabrica con la mayor experiencia y calidad en el mercado de Horse Racing" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Product/Description" element={<Description />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Ubication" element={<Ubication />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
