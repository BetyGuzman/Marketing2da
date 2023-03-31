import React from "react";
import Services from "./Services";
const Servicesd = () => {
  return(
      <div>
        <div className="SD">
          <div className="sdContent">
              <div className="cardservices">
                <h3>Estrategias de marca </h3>
                <p> Proporcionamos una nueva perspectiva sobre su organización y le aportamos nuevas posibilidades de crecimiento.<br/>Estamos completamente enfocados en incluír posicionamiento, mensajes, identidad de marca y muchísimo más.
                </p>
              </div>               
          </div>    
          <div className="sdContent">
              <div className="cardservices">
                <h3>Marketing </h3>
                <p> Ya se que usted esté buscando una campaña publicitaria para atraer a más público o a escalar en cuanto a competitividad, nuestro equipo es el indicado para ayudarlo en esta transición de experiencia y relevancia. <br/> Contamos contamos con expertos en investigación de usuarios, estrategias, ejecución, diseño, etc.<br/>
                </p>
              </div>              
          </div>    
        </div>
        <Services/>
      </div>
      
  );
}
export default Servicesd;