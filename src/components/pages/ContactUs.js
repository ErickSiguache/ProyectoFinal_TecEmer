import React, { Component } from 'react';
import '../../App.css';

class ContactUs extends Component {
  render() {
    return(
      <>
        <h1 className="title-cards"> Contactos </h1>
          <form action=""><center>
            <p> Nombre </p>
            <input type="text" className="field"></input><br></br>
            <label></label>
            <p> Correo Electronico </p>
            <input type="text" className="field"></input>
            <p> Mensaje </p>
            <textarea className="field"></textarea></center><br></br>
            <p className="center-content">
            <input type="submit" class="btn btn-green" value="Enviar Datos"></input><br></br>
            </p>
          </form>
      </>
    );
  }
  
}

export default ContactUs;