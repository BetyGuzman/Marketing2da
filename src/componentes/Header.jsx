import React from 'react';
import '../estilos.css';
import {NavLink} from 'react-router-dom';
import{RiContactsFill } from "react-icons/ri";
import Digital from '../img/digital.png';


const Header = () => {
  return (
    <nav className='H'>
      {/*menú izquierda*/}
      <ul className='Hul'>
        <li >
          <NavLink exact to="/"><img src={Digital} alt=""/></NavLink>
        </li>
        <li>
          <NavLink exact to="/"  className='Hulli'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/about"  className='Hulli'>Acerca de</NavLink>
        </li>
        <li>
          <NavLink exact to="/services"  className='Hulli' href="sss">Servicios</NavLink>
        </li>
        <li>
          <NavLink exact to="/team"  className='Hulli'>Equipo</NavLink>
        </li>
      </ul>
       {/*menú derecha*/}
       <ul className='HIul'>
        <li>
          <NavLink exact to="/contact"  className='HIulli' ><RiContactsFill/> Contact</NavLink>
        </li>
       </ul>

    </nav>
  );
}
export default Header;