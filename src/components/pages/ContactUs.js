import React, { Component } from 'react';
import '../../App.css';
import {Container} from 'reactstrap';

class ContactUs extends Component {
  render() {
    return(
      <>
        <Container>
          <h1 className="title-cards">Contactos</h1>
          <div className="container">
            <form action="">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"> Nombre </label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escribir el nombre completo" required></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required></input>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Tu Mensaje</label>
                <input type="submit" className="btn btn-primary form-control" id="exampleFormControlInput1" value="Enviar Datos"></input>
              </div>
            </form>
          </div>
        </Container>
      </>
    );
  }
  
}

export default ContactUs;
