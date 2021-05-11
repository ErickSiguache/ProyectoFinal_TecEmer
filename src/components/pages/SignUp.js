import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { Form, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

let url="http://127.0.0.1:8000/api/libro/";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        id: '',
        tituloLibro: '',
        Description: '',
        Categoria: '',
        autores: '',
        editorial: ''
      }
    })
  }
  componentDidMount() {
    axios.get(url)
        .then(response => {
          console.log(response.data)
            this.setState({
                data: response.data.libros
            })
        })
        .catch(error => {
          console.log(error)
        })
  }


  render() {
    const {form}=this.state;
    return(
      <>
        <h2 className="title-cards"> Administrar datos </h2>
        <div id="main-container">
          <table>
            <thead>
              <tr>
                <th> ID </th>
                <th> Titulo </th>
                <th> Description</th>
                <th> Categoria </th>
                <th> Autor </th>
                <th> Editorial </th>
                <th>  </th>
                <th>  </th>
              </tr>
            </thead>
    {this.state.data.map(nombre =>{
      return(
        <>
         <tr>
         <td>{nombre._id}</td>
         <td>{nombre.tituloLibro}</td>
          <td>{nombre.description}</td>
          <td>{nombre.categoria}</td>
          <td>{nombre.autores}</td>
          <td>{nombre.editorial}</td>
          <td>
            <button className="btn btn-primary"><i class="fas fa-edit"></i></button>
          </td>
          <td>
            <button className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
          </td>
         </tr>
        </>)})}
  </table>
  </div>

    </>
    )
  }
};

export default SignUp;