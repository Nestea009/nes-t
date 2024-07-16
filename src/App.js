import MisObras from "./pages/MisObras.js";
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className = "App">
      <Routes>
        <Route path="/MisObras" element={<MisObras />}/>
      </Routes>
      <div className = "mainText">
        <h1>Néstor Blanco</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu leo lobortis, tempus enim et, tristique est. Proin sed ipsum eu felis varius finibus. Quisque rhoncus, lorem sed tempor semper, massa diam rhoncus est, nec molestie ligula massa sed ex. Vivamus hendrerit, mi vel vulputate facilisis, felis enim vehicula enim, id dictum nibh urna eget erat.</p>
      </div>
      <p className="testting">You're on a phone</p>
      <Link to="/MisObras">To misObras</Link>
    </div>
  );
} 

export default App;
