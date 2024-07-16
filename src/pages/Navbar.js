import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/Navbar.css";
import MisObras from "./MisObras.js";

export default function Navbar() {
  return (
    <div>
      <p>Hello</p>
      <a href="/MisObras">MisObras</a>
      <a href=""></a>
      <a href=""></a>
      <a href=""></a>
      <Routes>
        <Route path="/MisObras" element={<MisObras/>}/>
      </Routes>
    </div>
  );
}