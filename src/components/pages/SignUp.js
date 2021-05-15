import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

let url="http://127.0.0.1:8000/api/libro/";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: [],
      modalInsertar: false,
      modalEliminar: false,
      form:{
        _id: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        autor: '',
        editorial: '',
        tipoModal: ''
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

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }
    

  peticionPut=()=>{
    axios.put(url+this.state.form._id, this.state.form).then(response=>{
      this.modalInsertar();
      this.componentDidMount();
    })
  }
  peticionPost=async()=>{
    delete this.state.form._id;
   await axios.post(url,this.state.form).then(response=>{
      this.modalInsertar();
      this.componentDidMount();
    }).catch(error=>{
      console.log(error.message);
    })
  }
  
  peticionDelete=()=>{
    axios.delete(url+this.state.form._id).then(response=>{
      this.setState({modalEliminar: false});
      this.componentDidMount();
    })
  }
  modalInsertar=()=>{
    this.setState({modalInsertar: !this.state.modalInsertar});
  }
  seleccionarEmpresa=(nombre)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        _id: nombre._id,
        tituloLibro: nombre.tituloLibro,
        description: nombre.description,
        categoria: nombre.categoria,
        autores: nombre.autores,
        editorial: nombre.editorial
      }
    })
  }

  render() {
    const {form}=this.state;
    return(
      <>
        <h2 className="title-cards"> Administracion de datos </h2>
        <br></br>
        <center><button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Libro </button></center>
        <br></br><br></br>
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
            <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(nombre); this.modalInsertar()}}><i class="fas fa-edit"></i></button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(nombre); this.setState({modalEliminar: true})}}><i class="fas fa-trash-alt"></i></button>
          </td>
         </tr>
        </>)})}
      </table>
      </div>
          <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                      <input className="form-control" type="text" name="_id" id="_id" readOnly onChange={this.handleChange} value={form?form._id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="nombre">Titulo del Libro</label>
                    <input className="form-control" type="text" name="tituloLibro" id="tituloLibro" onChange={this.handleChange} value={form?form.tituloLibro: ''}/>
                    <br />
                    <label htmlFor="nombre">Description</label>
                    <input className="form-control" type="text" name="description" id="description" onChange={this.handleChange} value={form?form.description: ''}/>
                    <br />
                    <label htmlFor="nombre">Categoria</label>
                    <input className="form-control" type="text" name="categoria" id="categoria" onChange={this.handleChange} value={form?form.categoria: ''}/>
                    <br />
                    <label htmlFor="nombre">Autor</label>
                    <input className="form-control" type="text" name="autores" id="autores" onChange={this.handleChange} value={form?form.autores: ''}/>
                    <br />
                    <label htmlFor="capital_bursatil">Editorial</label>
                    <input className="form-control" type="text" name="editorial" id="editorial" onChange={this.handleChange} value={form?form.editorial:''}/>
                  </div>

                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
                  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a el libro {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>


    </>
    )
  }
};

export default SignUp;
