import Navbar from './pages/Navbar.js';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className = "App">
      <Routes>
        <Route path="/Navbar" element={<Navbar/>}/>
      </Routes>
      <Navbar/>
      <p className="testting">You're on a phone</p>
    </div>
  );
} 

export default App;
