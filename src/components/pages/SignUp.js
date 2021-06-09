import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { Container } from 'reactstrap';
import Cookies from 'universal-cookie';
import logo from '../../images/logo.png';

const url="http://127.0.0.1:8000/api/login/";
const cookies = new Cookies();

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: [],
      form:{
        username: '',
        password: '',
        TipUser: ''
      }
    })
  }
  //Cargar datos en tiempo real
  componentDidMount() {
      if(cookies.get('TipoU') === "Cliente"){
        window.location.href='./';
      }else if(cookies.get('TipoU') === "Administrador"){
        window.location.href='./';
      }
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

      //Proceso de peticion a la api
      IniciarSesion=async()=>{
       await axios.post(url,this.state.form).then(response=>{
          console.log(response.data);
          if(response.data === "Usuario no existe"){
            alert("Debe ingresar los datos correctamente")
          }else{
            console.log(response.data);
            cookies.set('Token', response.data, {path: "/"});
            if(this.state.form.TipUser === "Cliente"){
              cookies.set('TipoU', this.state.form.TipUser, {path: "/"});
              alert("Bienvenido, disfruta de nuestros libros");
              window.location.href = "./";
            }else if(this.state.form.TipUser === "Administrador"){
              cookies.set('TipoU', this.state.form.TipUser, {path: "/"});
              alert("Bienvenido administrador");
              window.location.href = "./";
            }else if(this.state.form.TipUser === "Seleccione"){
              alert("Debe de seleccionar un tipo de usuario");
            }
          }
        }).catch(error=>{
          console.log(error.message);
        })
      }
      //Renderizado del formulario
  render() {
    return(
      <>
        <Container>
          <h1 className="title-cards"> Inicio de sesión </h1>
          <div class="col-md-12">
                <h2 class="title-cards"> </h2>
            </div>
          <div class="row">
          <div class="col-md-7 p-4 mb-3">
          <div className="form-group">
            <label htmlFor="id"> Nombre de Usuario </label>
            <input className="form-control" type="text" name="username" id="username" onChange={this.handleChange} placeholder="Escribir su nombre de Usuario" required/>
            <br />
            <label htmlFor="nombre"> Contraseña </label>
            <input className="form-control" type="password" name="password" id="password" onChange={this.handleChange} placeholder="Escribir su contraseña" required/>
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
            <br/>
            <button className="btn btn-primary form-control" onClick={()=>this.IniciarSesion()}> Iniciar Sesión </button>
            <br/>
          </div>
          <div class="col-md-5 ml-auto">
            <div class="p-4 border mb-3">
              <center> <img src={logo} width="200"/> </center>
            </div>
            <div class="p-4 border mb-3">
              <p class="">  Bienvenido, Inicia sesión para poder descargar nuestro contenido. </p>
            </div>
          </div>
        </div>
        </Container>
      </>
    );
  }
};

export default SignUp;