import React from "react";
import "./Header.css";
import img from "./otro-gris.png";

const Header = (props) => {
  return (
    <div className="Header">
      <img src={img} width="15%" alt="logo"></img>
      <h1> {props.title} </h1>
      <h2> {props.subTitle}</h2>
      <h3>{props.subTitle}</h3>
    </div>
  );
};

export default Header;
