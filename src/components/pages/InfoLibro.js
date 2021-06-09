import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import { withRouter } from "react-router";

let url="http://127.0.0.1:8000/api/libro/";

class InfoLibros extends Component {
    state =({
        data: []
    });

    componentDidMount(){
        const { match } = this.props;
        axios.get(url)
            .then(response => {

              console.log(response.data)
              alert(match.params.libInfo);
                this.setState({
                    data: response.data.libros
                })
                if(match.params.libInfo === this.state.data.map._id){
            
                }
            })
            .catch(error => {
              console.log(error)
            })
    }


  render() {
    const { match } = this.props;
    return(
      <>
        {
        this.state.data.map(nombre =>{
            return(
                <div className="title-cards">
                    <h2> Informacion del Libro </h2>
                    <p> { match.params.libInfo }</p>
                </div>
            )
            })
        }
      </>
    )
  }
}

export default InfoLibros;