import "./styles/Inicio.css"

export default function Inicio({IsVisible}) {
     if (IsVisible) {
      return (
       <div>
         <h1>Néstor Blanco</h1>
         <p>Programador con 3 años de experiencia y múltiples proyectos</p>
       </div>
     );
    }
 }
