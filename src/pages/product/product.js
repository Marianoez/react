import React from "react";
import "./product.css";
import CardUser from "../../components/CardUser/CardUser";

//REACT ROUTER DOM

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Product = () => {
  const [Productos, setProductos] = useState([]);
  const q = query(collection(db, "Productos"));

  useEffect(() => {
    const getProductos = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, []);

  return (
    <div>
      <h1 className="tittle ">Productos</h1>
      <div className="product-main">
        <Link to="/Detail">
          {Productos.map((prod) => {
            return (
              <div className="product-single">
                <CardUser data={prod} />
              </div>
            );
          })}
        </Link>
      </div>
    </div>
  );
};

export default Product;

//const [Productos, setProductos] = useState([]);

// const q = query(collection(db, "players"), where("position", "==", "goalkeeper"));

//const q = query(collection(db, "Productos"));

/* useEffect(() => {
    const getProductos = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //  console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
  }, []); */
