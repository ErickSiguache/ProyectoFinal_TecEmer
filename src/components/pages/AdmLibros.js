import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import logo from '../../images/logo.png';
import { Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Cookies from 'universal-cookie';

const url="http://127.0.0.1:8000/api/libro/";
const cookies = new Cookies();

class AdmLibros extends Component {
  constructor(props) {
    super(props);
    this.state =({
      modalEliminar: false,
      data: [],
      form:{
        tituloLibro: '',
        description: '',
        categoria: '',
        autores: '',
        editorial: '',
        pdf: '',
        tipoModal: ''
      }
    })
  }
  //Toma los datos en tiempo real
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
  //Programacion de funciones Crud
  //Select 
  componentDidMount() {
    axios.get(url)
      .then(response => {
        console.log(response.data)
          this.setState({
            tipoModal: 'insertar',
            data: response.data.libros
          });
      if(!cookies.get('Token') && !cookies.get('TipoU')){
        window.location.href='./';
      }else if(cookies.get('TipoU') === "Cliente"){
        window.location.href='./';
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  //Obtener el libro
  handleImage = (e) => {
    this.setState({
        selectedFile: e.target.files[0]
    })
  }
  //Obtener valor de cada uno
  seleccionarUser=(nombre)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        _id: nombre._id,
        tituloLibro: nombre.tituloLibro,
        description: nombre.description,
        categoria: nombre.categoria,
        autores: nombre.autores,
        editorial: nombre.editorial,
        pdf: nombre.pdf
      }
    })
  }
  //Cancelar
  cancelar=()=>{
    this.setState({
      tipoModal: 'insertar',
      form: {
        _id: '',
        tituloLibro: '',
        description: '',
        categoria: '',
        autores: '',
        editorial: '',
        pdf: ''
      }
    })
  }
  //Insert
  handleSubmit = (e) => {
    if(this.state.form.tituloLibro === ""){
      alert("Debe de insertar un titulo");
    }else if(this.state.form.description === ""){
      alert("Debe de insertar una description");
    }else if(this.state.form.categoria === ""){
      alert("Debe de insertar una categoria");
    }else if(this.state.form.autores === ""){
      alert("Debe de insertar un autores");
    }else if(this.state.form.editorial === ""){
      alert("Debe de insertar una editorial");
    }else{
      e.preventDefault();
      console.log('posted ', this.state.selectedFile);
      let formData = new FormData();
      formData.append('pdf', this.state.selectedFile)
      formData.append('tituloLibro', this.state.form.tituloLibro)
      formData.append('description', this.state.form.description)
      formData.append('categoria', this.state.form.categoria)
      formData.append('autores', this.state.form.autores)
      formData.append('editorial', this.state.form.editorial)
      axios.post(url, formData, {
      })
    .then(resp => {
        alert("El libro ha sido insertado correctamente");
        this.componentDidMount();
        this.cancelar();
        console.log(resp.status);
    })
    }
  }
  //Delete
  peticionDelete=()=>{
    axios.delete(url+this.state.form._id).then(response=>{
        this.componentDidMount();
        this.setState({modalEliminar: false});
        this.cancelar();
    })
  }
  //Actualizar
  peticionPut=()=>{
    if(this.state.form.tituloLibro === ""){
      alert("Debe de insertar un titulo");
    }else if(this.state.form.description === ""){
      alert("Debe de insertar una description");
    }else if(this.state.form.categoria === ""){
      alert("Debe de insertar una categoria");
    }else if(this.state.form.autores === ""){
      alert("Debe de insertar un autores");
    }else if(this.state.form.editorial === ""){
      alert("Debe de insertar una editorial");
    }else{
      axios.put(url+this.state.form._id, this.state.form).then(response=>{
        alert("El usuario ha sido actualizado correctamente");
        this.cancelar();
        this.componentDidMount();
      })
    }
  }
  //Renderizado del formulario
  render() {
    const {form}=this.state;
    return(
      <>
        <Container>
          <h1 className="title-cards"> Administracion de Libros </h1>
          <br />
          <div className="row">
            <h2 className="h3 mb-3 text-black"></h2>
            <div className="col-md-7 p-4">
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="tituloLibro" class="text-black"> Titulo del libro <span class="text-danger">*</span></label>                            
                        <input className="form-control" type="text" name="tituloLibro" id="tituloLibro" onChange={this.handleChange} placeholder="Escribir el nombre del libro" value={form?form.tituloLibro: ''} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="description"> Description </label>
                        <input className="form-control" type="text" name="description" id="description" onChange={this.handleChange} placeholder="Escribir una descripcion para el libro" value={form?form.description: ''} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="autores"> Autor </label>
                        <input className="form-control" type="text" name="autores" id="autores" onChange={this.handleChange} placeholder="Ingrese el autor del libro" value={form?form.autores: ''} required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Editorial </label>
                        <input className="form-control" type="text" name="editorial" id="editorial" onChange={this.handleChange} placeholder="Ingrese la editorial" value={form?form.editorial: ''} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-12">
                        <label htmlFor="autores"> Libro </label>
                        <input className="form-control" name='pdfV' type="file" onChange={e => this.handleImage(e)}/>
                    </div>
                </div>
                <div className="form-group">
                    <select
                        name="categoria"
                        className="form-control"
                        id="categoria"
                        onChange={this.handleChange}
                        >
                            <option value="Seleccione" header> Seleccione la categoria </option>
                            <option value="Educacion"> Educacion </option>
                            <option value="Ciencia"> Ciencia </option>
                            <option value="Programacion"> Programacion </option>
                            <option value="Entretenimiento"> Entretenimiento </option>
                    </select>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                      {this.state.tipoModal==='insertar'?
                        <button className="btn btn-primary form-control" onClick={e => this.handleSubmit(e)}> Insertar Usuario
                          </button>: <button className="btn btn-primary form-control" onClick={()=>this.peticionPut()}>
                            Actualizar Usuario
                            </button>
                      }
                    </div>
                    <div className="col-md-6">
                      <button className="btn btn-danger form-control" onClick={()=>this.cancelar()}> Cancelar </button>
                    </div>
                </div>
            </div>
            <div class="col-md-5 ml-auto">
                <div class="p-4 border mb-3">
                    <center> <img src={logo} width="200"/> </center>
                </div>
                <div class="p-4 border mb-3">
                    <p class="">  Los datos que se ingresan no pueden ser vistos por un usuario comun </p>
                </div>
            </div>
          </div>
       </Container>
       <Container>
           <div className="row">
               <br />
               <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col"> ID </th>
                            <th scope="col"> Titulo </th>
                            <th scope="col"> Description </th>
                            <th scope="col"> Categoria </th>
                            <th scope="col"> Autor </th>
                            <th scope="col"> Editorial </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user =>{
                            return(
                            <>
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.tituloLibro}</td>
                                    <td>{user.description}</td>
                                    <td>{user.categoria}</td>
                                    <td>{user.autores}</td>
                                    <td>{user.editorial}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={()=>{this.seleccionarUser(user);}}><i class="fas fa-edit"></i></button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>{this.seleccionarUser(user); this.setState({modalEliminar: true})}}><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </>
                            )
                        })
                      }
                    </tbody>
                </table>
                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>
                        Estás seguro que deseas eliminar a el libro 
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
                        <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
                    </ModalFooter>
                </Modal>
           </div>
       </Container>
    </>
    );
  }
};

export default AdmLibros;