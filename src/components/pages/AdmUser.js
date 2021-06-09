import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import logo from '../../images/logo.png';
import { Container, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Cookies from 'universal-cookie';

const url="http://127.0.0.1:8000/api/usuario/";
const cookies = new Cookies();

class AdmUser extends Component {
  constructor(props) {
    super(props);
    this.state =({
      modalEliminar: false,
      data: [],
      form:{
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        username: '',
        password: '',
        TipUser: '',
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
            data: response.data.usuarios
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
  //Obtener valor de cada uno
  seleccionarUser=(nombre)=>{
    this.setState({
      tipoModal: 'actualizar',
      form: {
        _id: nombre._id,
        nombre: nombre.nombre,
        apellido: nombre.apellido,
        telefono: nombre.telefono,
        email: nombre.email,
        username: nombre.username,
        password: nombre.password,
        TipUser: nombre.TipUser
      }
    })
  }
  //Cancelar
  cancelar=()=>{
    this.setState({
      tipoModal: 'insertar',
      form: {
        _id: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        username: '',
        password: '',
        TipUser: ''
      }
    })
  }
  //Insert
  peticionPost=async()=>{
    if(this.state.form.nombre === ""){
      alert("Debe de insertar un nombre");
    }else if(this.state.form.apellido === ""){
      alert("Debe de insertar un apellido");
    }else if(this.state.form.telefono === ""){
      alert("Debe de insertar un numero de telefono");
    }else if(this.state.form.email === ""){
      alert("Debe de insertar un correo electronico");
    }else if(this.state.form.username === ""){
      alert("El nombre de usuario no puede quedar vacio");
    }else if(this.state.form.password === ""){
      alert("Debe de insertar una contraseña, no puede quedar vacio");
    }else if(this.state.form.TipUser === ""){
      alert("Debe de seleccionar un tipo de usuario");
    }else{
      await axios.post(url,this.state.form).then(response=>{
          alert("El usuario ha sido insertado correctamente");
          this.componentDidMount();
          this.cancelar();
        }).catch(error=>{
          console.log(error.message);
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
    if(this.state.form.nombre === ""){
      alert("Debe de insertar un nombre");
    }else if(this.state.form.apellido === ""){
      alert("Debe de insertar un apellido");
    }else if(this.state.form.telefono === ""){
      alert("Debe de insertar un numero de telefono");
    }else if(this.state.form.email === ""){
      alert("Debe de insertar un correo electronico");
    }else if(this.state.form.username === ""){
      alert("El nombre de usuario no puede quedar vacio");
    }else if(this.state.form.password === ""){
      alert("Debe de insertar una contraseña, no puede quedar vacio");
    }else if(this.state.form.TipUser === ""){
      alert("Debe de seleccionar un tipo de usuario");
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
          <h1 className="title-cards"> Administracion de Usuarios </h1>
          <br />
          <div className="row">
            <h2 className="h3 mb-3 text-black"></h2>
            <div className="col-md-7 p-4">
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="nombre" class="text-black"> Nombre <span class="text-danger">*</span></label>                            
                        <input className="form-control" type="text" name="nombre" id="nombre" onChange={this.handleChange} placeholder="Escribir el nombre de Usuario" value={form?form.nombre: ''} required/>
                        </div>
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Apellido </label>
                        <input className="form-control" type="text" name="apellido" id="apellido" onChange={this.handleChange} placeholder="Escribir el apellido de Usuario" value={form?form.apellido: ''} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Telefono </label>
                        <input className="form-control" type="number" name="telefono" id="telefono" pattern="[0-9]+" onChange={this.handleChange} placeholder="Escribir el numero de telefono" value={form?form.telefono: ''} required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Email </label>
                        <input className="form-control" type="text" name="email" id="email" onChange={this.handleChange} placeholder="Escribir el correo electronico" value={form?form.email: ''} required/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Nombre de Usuario </label>
                        <input className="form-control" type="text" name="username" id="username" onChange={this.handleChange} placeholder="Escribir el nombre de usuario" value={form?form.username: ''} required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="nombre"> Contraseña </label>
                        <input className="form-control" type="password" name="password" id="password" onChange={this.handleChange} placeholder="Escribir la contraseña" value={form?form.password: ''} required/>
                    </div>
                </div>
                <div className="form-group">
                    <select
                        name="TipUser"
                        className="form-control"
                        id="TipUser"
                        onChange={this.handleChange}
                        >
                            <option value="Seleccione" header> Seleccione su tipo de usuario </option>
                            <option value="Cliente"> Cliente </option>
                            <option value="Administrador"> Administrador </option>
                    </select>
                </div>
                <div className="form-group row">
                    <div className="col-md-6">
                      {this.state.tipoModal==='insertar'?
                        <button className="btn btn-primary form-control" onClick={()=>this.peticionPost()}> Insertar Usuario
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
                            <th scope="col"> Nombre </th>
                            <th scope="col"> Apellido </th>
                            <th scope="col"> Telefono </th>
                            <th scope="col"> Correo electronico</th>
                            <th scope="col"> UserName </th>
                            <th scope="col"> Tipo de User </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(user =>{
                            return(
                            <>
                                <tr>
                                    <td>{user._id}</td>
                                    <td>{user.nombre}</td>
                                    <td>{user.apellido}</td>
                                    <td>{user.telefono}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.TipUser}</td>
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

export default AdmUser;