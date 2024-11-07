import React from "react";
import Navbar from "./Navbar";

function Home(props) {

  return (
    <div>
      <Navbar></Navbar>
      <h1>This is the home page {props.age.name}</h1>
    </div>
  );
}

export default Home;
