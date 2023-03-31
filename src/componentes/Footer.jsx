import React from "react";
import {NavLink} from 'react-router-dom';
import Digital from "../img/digital.png"
import {RiFacebookCircleFill,RiTwitterFill,RiInstagramFill, RiWhatsappFill} from "react-icons/ri";

const Footer = () => {
  return(
    <footer className="F" id="footer">
        <div className="fsection">
            <h2 className="ftittle"> Digital Marketing</h2>
            <p className="copy">Copyright © 2023 Digital Marketing</p>
            <p className="copy"> by Bety Guzmán </p>
            <div className="scim">
                <ul>
                    <li><a href="sss"><img src={Digital} alt=""/></a></li>
                </ul>
            </div>
            <h2 className="ftittle"> </h2>
            <ul>
                <li>
                    <NavLink exact to="/services" className="footer__txt">   Servicios</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" className="footer__txt">   About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/team" className="footer__txt">   Team</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" className="footer__txt">   Contact</NavLink>
                </li>
            </ul>
            
        </div>

        <div className="fsection ubi">
            <h2 className="ftittle" colspan="1">Ubicación: </h2>
            <p className="ftxt">Calle Fco. Villa</p>
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.8289318049922!2d-94.71915667081448!3d17.964042074959877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ea20231f81d169%3A0xffe275cbac5b3ce5!2sMiguel%20Hidalgo%20501%2C%20Centro%2C%2096200%20J%C3%A1ltipan%20de%20Morelos%2C%20Ver.!5e0!3m2!1ses!2smx!4v1670743131569!5m2!1ses!2smx\" >
                </iframe>
            </div>
        </div>
        <div>
            <h2 className="ftittle">Contacto:</h2>
            <p className="ftxt">Contáctanos al:</p>
            <p className="ftxt" >9221213240</p>
            <p className="ftxt">Email: </p>
            <p className="ftxt" >bety.guzman@gmail.com</p>
            <div className="sci"><ul>
                <li><a href="https://www.facebook.com/"><RiFacebookCircleFill/></a></li>
                <li><a href="https://www.twitter.com/"><RiTwitterFill/></a></li>
                <li><a href="https://www.instagram.com/"><RiInstagramFill/></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=529221213240&text=Quiero%20saber%20m%C3%A1s%20de%20los%20servicios%20de%20Marketing%20"><RiWhatsappFill/></a></li>
            </ul>
            </div>
        </div>      
    </footer>

  );
}
export default Footer;