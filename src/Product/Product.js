import React from "react";
import "./Product.css";
import img from "./otro-gris.png";

const Header = (props) => {
    // console.log(props);
    return ( <
        div className = "Header" >
        <
        img src = { img }
        img width = '15%'
        alt = "logo" / >
        <
        h1 > { props.title } < /h1> <
        h2 > { props.subTitle } < /h2> < /
        div >
    );
};

export default Header;