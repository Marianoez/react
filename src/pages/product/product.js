import React from "react";
import "./product.css";
import CardUser from "../../components/CardUser/CardUser";
import img1 from "../../components/Images/bozal-okk.jpg";
import img2 from "../../components/Images/freno-ok.png";
import img3 from "../../components/Images/herradura-ok.jpg";
import img4 from "../../components/Images/montura-ok.png";

//REACT ROUTER DOM
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div className="product-main">
      <h1 className="tittle">Productos</h1>
      <div className="product-single">
        <Link to="/product/description">
          <CardUser
            name="Bozal"
            date="Paga en hasta 3 cuotas sin Interes"
            description="Precio: $ 10.000"
            img={img1}
            backgroundColor="rgb(201, 198, 198)"
          />
        </Link>
      </div>
      <div className="product-single">
        <Link to="/product/description">
          <CardUser
            name="Freno"
            date="Paga en hasta 3 cuotas sin Interes"
            description="Precio: $ 25.000"
            img={img2}
            backgroundColor="rgb(201, 198, 198)"
          />
        </Link>
      </div>
      <div className="product-single">
        <Link to="/product/description">
          <CardUser
            name="Herradura"
            date="Paga en hasta 3 cuotas sin Interes"
            description="Precio: $ 15.000"
            img={img3}
            backgroundColor="rgb(201, 198, 198)"
          />
        </Link>
      </div>
      <div className="product-single">
        <Link to="/product/description">
          <CardUser
            name="Montura"
            date="Paga en hasta 3 cuotas sin Interes"
            description="Precio: $ 70.000"
            img={img4}
            backgroundColor="rgb(201, 198, 198)"
          />
        </Link>
      </div>
    </div>
  );
};

export default Product;
