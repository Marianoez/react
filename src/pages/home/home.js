import React from "react";
import imgportada from "../../components/Images/caballo-170562.jpg";

const home = () => {
  return (
    <div className="UserSection">
      <h1 className="ProductsTitle"> Nuevos productos destacados </h1>
      <img src={imgportada} alt="Imagen nuevos productos" />
    </div>
  );
};

export default home;
