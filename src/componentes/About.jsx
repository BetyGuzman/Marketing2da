import React from "react";
import Marketing from "../img/marketing3d.png";

const About = () => {
  return(
  <div className="A">
    <div className="aboutContent">
        <div className="card">
          <h3>¿Quiénes Somos? </h3>
          <h4>ESPECIALISTAS EN MARKETING DIGITAL</h4>
          <p> Lo que comenzó siendo un sueño se convirtió en una agencia de posicionamiento; continuamos creciendo para convertirnos en la agencia número 1. <br/>  Esto evolucionó rápidamente gracias a las demandas y necesidades de nuestros clientes hasta transformarse en una agencia de marketing digital especializada en monetizar los activos digitales del grupo y de aliados estratégicos a través de publicidad en venta directa o programática que utiliza herramientas como el diseño gráfico, desarrollo web, el marketing de contenidos y community management para hacer que nuestros clientes desarrollen sus canales digitales.<br/> Nos enorgulle tener un estilo de trabajo esbelto, ágil y adaptativo a los cambios del mercado, algo que difícilmente encontrarás en ningún otro lugar. También estamos interesados en crear relaciones auténticas tanto en línea como en persona. Desde que abrimos nuestras puertas la transparencia absoluta ha sido clave para construir esas relaciones, lo que se traduce en campañas exitosas a través de la congruencia.</p>
          <a href="sss" className="aboutBtn">Saber más</a>
        </div> 
    </div>    
    <img src={Marketing} alt=""/>
  </div>
  )
}
export default About;