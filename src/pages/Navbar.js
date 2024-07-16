import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/Navbar.css";
import MisObras from "./MisObras.js";
import MisOtrosHobbies from "./MisOtrosHobbies.js";
import Inicio from "./Inicio.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <p className="ej">Navbar</p>
      <ul className="linkList">
      <a href="/MisObras">MisObras</a>
      <a href="/MisOtrosHobbies">MisOtrosHobbies</a>
      <a href="/Inicio">Inicio</a>
      </ul>
      <Routes>
        <Route path="/MisObras" element={<MisObras/>}/>
        <Route path="/MisOtrosHobbies" element={<MisOtrosHobbies/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
      </Routes>
    </div>
  );
}