import "./styles/Inicio.css"

export default function Inicio({IsVisible}) {
     if (IsVisible) {
      return (
       <div>
         <h1>Inicio</h1>
         <p>Esto será el inicio</p>
       </div>
     );
    }
 }
