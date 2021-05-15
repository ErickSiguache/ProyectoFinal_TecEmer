import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';

let url="http://127.0.0.1:8000/api/libro/";

class Bibloteca extends Component {
  constructor(props) {
    super(props);
    this.state =({
      data: []
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
    return(
      <>
        <div className="title-cards">
          <h2>Libros que Ofrecemos</h2>
        </div>
        {this.state.data.map(nombre =>{
            return(
              <>
                <div class="contenedor-card">
                  <div class="card">
                    <figure>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
                    </figure>
                    <div class="contenido-card">
		                  <h3> {nombre.tituloLibro} </h3>
		                  <p> {nombre.description} </p>
		                  <a href="#">Leer Más</a>
	                  </div>
                  </div>
                </div>
              </>
            )
        })}
    </>

    )
    
  }
};

export default Bibloteca;
