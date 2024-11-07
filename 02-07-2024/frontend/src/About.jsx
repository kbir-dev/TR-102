import {React , useEffect, useState} from "react";
import Navbar from "./Navbar";

function About() {

  const [singleProduct , setSingleProduct] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("Product");
    const product = JSON.parse(data);

    setSingleProduct(product);
  },[])

  return (
    <>
      <h1>{singleProduct.title}</h1>
    </>
  );
}

export default About;
