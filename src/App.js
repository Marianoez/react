import React, { Component } from "react";
import "./App.css";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import img1 from './prueba1.jpg'

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import Product from "./Product/Product";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header title="Bienvenidos a M&S Talabarteria, la fabrica con la mayor experiencia y calidad en el mercado de Horse Racing" />
        <div className="UserSection">
          <h1 className="ProductsTitle"> Nuestros productos destacados </h1>{" "}
          <Product />
        </div>{" "}
        <Button> Ir al carrito </Button> <Button> Crear cuenta </Button>{" "}
      </div>
    );
  }
}

export default App;
