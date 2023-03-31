import React from "react";
import marketingD from "../img/marketingD.gif";
import marketingDabout from "../img/marketingdigitalabout.jpg";

const About = () => {
  return(
  <div className="AD">
    <div className="aboutdContent">
      <div> 
        <h2>Posibilidades inspiradoras</h2>
        <p>
          En Digital Marketing tomámos de base el marketing para ayudarles a lograr sus objetivos de manera exitosa. Nuestras asociaciones abren las puertas a un mundo nuevo, algo que no existía. 
        </p>
      </div>
      
    </div>
    <img className="imagen" src={marketingD} alt=""></img>
    <div  className="aboutdContent">
      <h2>Nuestro Compromiso</h2>
      <p>
        Digital Marketing busca un gran enfoque en un lugar de trabajo familiar. A lo largo de la existencia de Digital Marketing, nunca impedimos un lugar de trabajo inclusivo, siempre dando la bienvenida a la diversidad e inclusión.
          <br/>
        Actualmente sentimos la necesidad de hacer más, de promover activamente la diversidad, inclusión y no discriminación tanto dentro de Digital Marketing como en nuestros productos de trabajo para los clientes.
          <br/>
        Nuestro comité interno de Diversidad e inclusión recientemente establecido, está ampliando los esfuerzos de reclutamiento y nuestras bases de socios, así como brindando a nuestro personal ideas innovadoras acerca de la justicia social con la finalidad de lograr los onjetivos propuestos.
      </p>
    </div>
    
    <img className="imagendos" src={marketingDabout} alt=""></img>
  </div>
  )
}
export default About