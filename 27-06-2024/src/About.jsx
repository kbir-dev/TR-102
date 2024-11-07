import React from "react";
import Navbar from "./Navbar";

function About(props) {
  return (
    <>
      <Navbar></Navbar>
      <h1>This is the about page {props.age.name} </h1>
    </>
  );
}

export default About;
