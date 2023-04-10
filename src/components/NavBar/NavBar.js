import React from "react";
import "./NavBar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
//import Logo1 from "../Images/iconos/logomsp.png";

const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul className="List-ul">
        <Link className="Link" to="/">
          MS
        </Link>
        <Link className="Link" to="/product">
          Productos
        </Link>
        <Link className="Link" to="/ubication">
          Ubicacion
        </Link>
        <Link className="Link" to="/cart">
          <div style={{ display: "flex" }}>
            <AddShoppingCartIcon sx={{ color: "white" }} />{" "}
            <span style={{ color: "white" }}> Carrito </span>{" "}
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
