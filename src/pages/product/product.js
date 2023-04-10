import React from "react";
import "./product.css";
import CardUser from "../../components/CardUser/CardUser";
import img1 from "../../components/Images/bozal-okk.jpg";
import img2 from "../../components/Images/freno-ok.png";
import img3 from "../../components/Images/herradura-ok.jpg";
import img4 from "../../components/Images/montura-ok.png";

//REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Description from "../../components/Description/Description";

const Product = (props) => {
  return (
    <div className="product-main">
      <h1 className="tittle">Productos</h1>
      <Router>
        <Routes>
          <div className="product-single">
            <Route path="/Description" element={<Description />} />
            <CardUser
              name="Bozal"
              date="Paga en hasta 3 cuotas sin Interes"
              description="Precio: $ 10.000"
              img={img1}
              backgroundColor="rgb(201, 198, 198)"
            />
          </div>
          <div className="product-single">
            <CardUser
              name="Freno"
              date="Paga en hasta 3 cuotas sin Interes"
              description="Precio: $ 25.000"
              img={img2}
              backgroundColor="rgb(201, 198, 198)"
            />
          </div>
          <div className="product-single">
            <CardUser
              name="Herradura"
              date="Paga en hasta 3 cuotas sin Interes"
              description="Precio: $ 15.000"
              img={img3}
              backgroundColor="rgb(201, 198, 198)"
            />
          </div>
          <div className="product-single">
            <CardUser
              name="Montura"
              date="Paga en hasta 3 cuotas sin Interes"
              description="Precio: $ 70.000"
              img={img4}
              backgroundColor="rgb(201, 198, 198)"
            />
          </div>
        </Routes>
      </Router>
    </div>
  );
};

export default Product;
