import React from "react";
import DiseñoG from "../img/diseñoGrafico.png";
import DesarrolloW from "../img/desarrolloWeb.png";
import Marketing from "../img/marketingg.png";
import CommunityM from "../img/communityManagement.png";

const Services = () =>{
return(
  <div className="SE">
    <div className="content">
                <div className="titleServices">
                    <h3> Servicios</h3>
                    <p> Conoce nuestros excelentes servicios</p>
                </div>
                <div className="servicesContent">
                    <div className="services">
                        <div className="box">
                            <div className="imgServices">
                                <img src={DesarrolloW} alt="" />
                            </div>
                            <div className="content">
                                <h2>Desarrollo Web</h2>
                                <p> Diseñamos tu propio sitio profesional, ajustandonos a tus objetivos con funcionalidades sorprendentes.</p>
                                <p> Donde la imaginación se encuentra con la tecnología..</p>
                            </div>
                        </div>
                    </div>
                    <div className="services">
                        <div className="box">
                            <div className="imgServices">   
                            <img src={DiseñoG} alt="" />             
                            </div>
                            <div className="content">
                                <h2>Diseño Gráfico</h2>
                                <p> Realizamos el diseño específico para el público objetivo de tu marca.</p>
                                <p> «Cada gran diseño comienza con una historia aún mejor.» — Lorinda Mamo.</p>
                            </div>
                        </div>
                    </div><div className="services">
                        <div className="box">
                            <div className="imgServices">   
                            <img src={Marketing} alt="" />                         
                            </div>
                            <div className="content">
                                <h2>Marketing</h2>
                                <p> Colocamos estrategicamente tu marca en el ojo público y onjetivo.</p>
                                <p> «El marketing ya no es cuestión de lo que sabes producir, sino de qué historias sabes contar.» — Seth Godin.</p>
                            </div>
                        </div>
                    </div><div className="services">
                        <div className="box">
                            <div className="imgServices">  
                            <img src={CommunityM} alt="" />                          
                            </div>
                            <div className="content">
                                <h2>Community Management</h2>
                                <p> Administramos correctamente tus redes sociales, para hacer más grande tu comunidad.</p>
                                <p> «Social Media es sobre la gente, no sobre tu negocio. Provee a la gente y la gente te proveerá.» — Marc Goulart.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
  </div>
)
}
export default Services;