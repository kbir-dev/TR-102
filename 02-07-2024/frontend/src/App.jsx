import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Register from "./Register";
import Navbar from "./Navbar";
import BuyNow from './BuyNow';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buy_now" element={<BuyNow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
