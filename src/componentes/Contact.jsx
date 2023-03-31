import { useState } from "react";
import db from "./javacredencial";



const Contact = () =>{
    
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        mensaje: "",
        seleccion: "",
      });
    
      const actualizarFormulario = (evento) => {
        const { name, value } = evento.target;
    
        setFormulario((prevFormulario) => ({
          ...prevFormulario,
          [name]: value,
        }));
      };
    
      const enviarFormulario = (evento) => {
        evento.preventDefault();
    
        db.collection("contacto")
          .add({
            nombre: formulario.nombre,
            correo: formulario.correo,
            mensaje: formulario.mensaje,
            seleccion: formulario.seleccion,
            fecha: new Date().toLocaleString(),
          })
          .then(() => {
            setFormulario({
              nombre: "",
              correo: "",
              mensaje: "",
              seleccion: "",
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };
    
      return (
        <main>
            <div class="mxw800pc">
                <h3>Contacto</h3>
                <p>Escribenos para más información</p>
            </div>  
        <form onSubmit={enviarFormulario} className="formulario">
            
           <div class="row100">
                        <div class="inputBx100">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={actualizarFormulario}
              required
            />
            </div>
          </div>

           <div class="row100">
                        <div class="inputBx100">
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={actualizarFormulario}
              required
            />
            </div>
          </div>


          
          <div class="row100">
                        <div class="inputBx100">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formulario.mensaje}
              onChange={actualizarFormulario}
              required
            ></textarea>
          </div>
          </div>
          
          

          
          <div class="row100">
                        <div class="inputBx100">
            <label htmlFor="seleccion">Seleccione el servicio de interes:</label>
            <div className="sel">
            <select
              id="seleccion"
              name="seleccion"
              value={formulario.seleccion}
              onChange={actualizarFormulario}
              required
            >
              <option value="">Seleccione el servicio</option>
              <option value="Desarrollo Web">Desarrollo Web</option>
              <option value="Diseño Gráfico">Diseño Gráfico</option>
              <option value="Marketing">Marketing</option>
              <option value="Community Manager">Community Manager</option>
            </select>
            </div>
          </div>
          </div>
          <div className="btnFD">
            <button className="btnF" type="submit">Enviar</button>
          </div>
        </form>
        </main>
    
  );
}

export default Contact;