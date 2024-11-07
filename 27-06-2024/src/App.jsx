import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  const title = "LogoBakery";

  //Hooks in react.js
  // useState() -- initial value and final value
  const [count , setCount] = useState(5);
  const [color1 , setColor1] = useState(25);
  const [color2 , setColor2] = useState(56);

  const incrementFunction = () => {
    setCount(count + 1);
  }

  const changeColor = () => {
    setColor1(Math.floor(Math.random() * 255 + 1));
    setColor2(Math.floor(Math.random() * 255 + 1));
  }

  return (
    <>
    {/* <Navbar logo= {title}></Navbar> */}
    {/* <h1>The value of count is {count}</h1>

    <div style={{height : "200px" , width : "200px" , backgroundColor : `rgb(${color1} , ${color2} , ${color1})`}}></div>

    <button onClick={incrementFunction}>Increment Value</button>

    <button onClick={changeColor}>Change Color</button> */}

    <Register/>
    </>
  );
}

export default App;
