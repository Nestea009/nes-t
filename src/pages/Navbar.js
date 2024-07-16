import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/Navbar.css";
import MisObras from "./MisObras.js";
import MisOtrosHobbies from "./MisOtrosHobbies.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="ej">Navbar</p>
      <ul className="linkList">
      <a href="/MisObras">MisObras</a>
      <a href="/MisOtrosHobbies">MisOtrosHobbies</a>
      <a href=""></a>
      <a href=""></a>
      </ul>
      <Routes>
        <Route path="/MisObras" element={<MisObras/>}/>
        <Route path="/MisOtrosHobbies" element={<MisOtrosHobbies/>}/>
      </Routes>
    </div>
  );
}