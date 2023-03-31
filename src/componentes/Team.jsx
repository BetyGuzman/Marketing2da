import React from "react";
import Maria from "../img/MariaTorres.jpg";
import Alejandro from "../img/AlejandroFernandez.jpg";
import Ana from "../img/AnaSantos.jpg";
import Joel from "../img/JoelSantos.jpg";

const Team = () => {
return(
  <div className="T">
    <div className="content">
                <div className="card">
                    <h3>Nuestro Equipo</h3>
                    <p>Somos especialistas en Marketing Digital y Desarrollo Web, profesionales con muchos años de experiencia. Durante nuestro recorrido hemos trabajado con marcas, consultores y emprendedores que ofrecen productos y servicios. </p>
                </div>
                <div className="teamBx">
                    <div className="member">
                        <div className="imgBx">
                            <img src={Maria} alt=""/>
                        </div>
                        <div className="details">
                            <div>
                                <h2> María Torres<br/> 
                                    <span href="">Diseñadora Web</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="imgBx">
                            <img src={Alejandro} alt=""/>
                        </div>
                        <div className="details">
                            <div>
                                <h2> Alejandro Fernandez<br/>  
                                    <span>Project Manager</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="imgBx">
                            <img src={Ana} alt=""/>
                        </div>
                        <div className="details">
                            <div> 
                                <h2> Ana Santos<br/>  
                                    <span>Trafficker Comunnity Manager</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="member">
                        <div className="imgBx">
                            <img src={Joel} alt=""/>
                        </div>
                        <div className="details">
                            <div>
                                <h2> Joel Santos<br/>  
                                    <span>Diseñador Gráfico Marketer</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
);
}
export default Team;