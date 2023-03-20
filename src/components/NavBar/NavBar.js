import React from "react";
import "./NavBar.css";

import Shop from "../Shop/Shop";

const NavBar = () => {
    return ( <
        nav className = "Navigation" >
        <
        ul className = "List-ul" >
        <
        li >
        <
        a href = "www.google.com" > Productos < /a> < /
        li > <
        li >
        <
        a href = "www.google.com" > Contacto < /a> < /
        li > <
        li >
        <
        a href = "https://www.google.com/maps/@-38.7904978,-62.4181737,15z?hl=es" > Ubicacion < /a> < /
        li > <
        li >
        <
        Shop / >
        <
        /li> < /
        ul > <
        /nav>
    );
};

export default NavBar;