import React, { useState } from 'react';
import { Button } from './Button';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';
import Cookies from 'universal-cookie';
//Aqui las de prueba
import ReactDOM from 'react-dom'

const url="http://127.0.0.1:8000/api/login/";
const cookies = new Cookies();

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const cerrarSesion=()=>{
    axios.put(url+cookies.get('Token')).then(response=>{
      cookies.remove('Token', {path: "/"} );
      cookies.remove('TipoU', {path: "/"} );
      window.location.href='./';
    });
  }

  //Verifica si el token esta vacio, si lo esta redirecciona la nav con boton de 
    //Inicio de sesion, si tiene datos este verifica que tipo de usuario es y
    //Le envia la navbar que corresponde para cada uno
    if(!cookies.get('Token') && !cookies.get('TipoU')){
      return (
      <>
          <nav className='navbarS'>
              <Link to='/' className='navbarS-logo' onClick={closeMobileMenu}>
                  Only
                  <i class='fab fa-firstdraft' />
                  <img src={require('../images/logo.png')} alt='Books' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Inicio
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link
                          to='/bibloteca'
                          className='nav-links'
                          onClick={closeMobileMenu}
                          >
                          Bibloteca
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link
                          to='/about'
                          className='nav-links'
                          onClick={closeMobileMenu}
                          >
                          Sobre Nosotros
                      </Link>
                  </li>
                  <li>
                      <Link
                          to='/sign-up'
                          className='nav-links-mobile'
                          onClick={closeMobileMenu}
                          >
                          Iniciar Sesion
                      </Link>
                  </li>
              </ul>
              <Link to='/sign-up'>
                <button className='btnC'> Iniciar Sesion </button>
              </Link>
          </nav>
      </> );
  }else{
      if(cookies.get('TipoU') === "Cliente"){

      return (
      <>
          <nav className='navbarS'>
              <Link to='/' className='navbarS-logo' onClick={closeMobileMenu}>
                  Only
                  <i class='fab fa-firstdraft' />
                  <img src={require('../images/logo.png')} alt='Books' />
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Inicio
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link
                          to='/bibloteca'
                          className='nav-links'
                          onClick={closeMobileMenu}
                          >
                          Bibloteca
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link
                          to='/about'
                          className='nav-links'
                          onClick={closeMobileMenu}
                          >
                          Sobre Nosotros
                      </Link>
                  </li>
                  <li>
                      <Link to='/'>
                        <button className='nav-links-mobile'> Cerrar Sesion </button>
                      </Link>
                  </li>
              </ul>
              <button className='btnC' onClick={cerrarSesion}> Cerrar Sesion </button>
          </nav>
      </> );
      }else if(cookies.get('TipoU') === "Administrador"){
        return (
          <>
              <nav className='navbarS'>
                  <Link to='/' className='navbarS-logo' onClick={closeMobileMenu}>
                      Only
                      <i class='fab fa-firstdraft' />
                      <img src={require('../images/logo.png')} alt='Books' />
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                              Inicio
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link
                              to='/bibloteca'
                              className='nav-links'
                              onClick={closeMobileMenu}
                              >
                              Bibloteca
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link
                              to='/about'
                              className='nav-links'
                              onClick={closeMobileMenu}
                              >
                              Sobre Nosotros
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link
                              to='/AdmLibros'
                              className='nav-links'
                              onClick={closeMobileMenu}
                              >
                              Adm Libros
                          </Link>
                      </li>
                      <li className='nav-item'>
                          <Link
                              to='/AdmUser'
                              className='nav-links'
                              onClick={closeMobileMenu}
                              >
                              Adm Usuarios
                          </Link>
                      </li>
                      <li>
                          <Link to='/'>
                            <button className='nav-links-mobile'> Cerrar Sesion </button>
                          </Link>
                      </li>
                  </ul>
                  <button className='btnC' onClick={cerrarSesion}> Cerrar Sesion </button>
              </nav>
        </> );
      }
  }
}

export default Navbar;