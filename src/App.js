import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import img1 from './prueba1.jpg'

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";
import img1 from './components/Images/bozal-okk.jpg'
import img2 from './components/Images/freno-ok.png'
import img3 from './components/Images/herradura-ok.jpg'
import img4 from './components/Images/montura-ok.png'

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            NavBar / >
            <
            Header title = "Bienvenidos a M&S Talabarteria, la fabrica con la mayor experiencia y calidad en el mercado de Horse Racing" /
            >
            <
            div className = "UserSection" >
            <
            h1 className = "ProductsTitle" > Nuestros productos destacados < /h1> <
            CardUser name = "Bozal"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 10.000"
            img = { img1 }
            backgroundColor = "rgb(201, 198, 198)" /
            >
            <
            CardUser name = "Freno"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 25.000"
            img = { img2 }
            backgroundColor = "rgb(201, 198, 198)" /
            >
            <
            CardUser name = "Herradura"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 15.000"
            img = { img3 }
            backgroundColor = "rgb(201, 198, 198)" /
            >
            <
            CardUser name = "Montura"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 70.000"
            img = { img4 }
            backgroundColor = "rgb(201, 198, 198)" /
            >

            <
            /
            div > <
            Button > Ir al carrito < /Button> <
            Button > Crear cuenta < /Button> < /
            div >
        );
    }
}

export default App;