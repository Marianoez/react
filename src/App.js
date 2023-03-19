import React, { Component } from "react";
import "./App.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import img1 from './prueba1.jpg'

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import CardUser from "./components/CardUser/CardUser";
import Button from "./components/Button/Button";

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            NavBar / >
            <
            Header title = "Soy el titulo a partir de una prop"
            subTitle = "Soy un subtitulo a partir de una prop" /
            >
            <
            div className = "UserSection" >
            <
            CardUser name = "Daniel Di Salvo"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 10.000"
            img = { img1 }
            backgroundColor = "yellow" /
            >
            <
            CardUser name = "Daniel Di Salvo"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 10.000"
            img = { img1 }
            backgroundColor = "yellow" /
            >
            <
            CardUser name = "Daniel Di Salvo"
            date = "Paga en hasta 3 cuotas sin Interes"
            description = "Precio: $ 10.000"
            img = { img1 }
            backgroundColor = "yellow" /
            >
            <
            CardUser img = "https://react.semantic-ui.com/images/avatar/large/daniel.jpg" >
            <
            AccountCircleIcon / >
            <
            /CardUser> < /
            div > <
            Button > Press Me! < /Button> <
            Button > Press Me! < /Button> < /
            div >
        );
    }
}

export default App;