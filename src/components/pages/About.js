import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <>
      <h1 className="title-cards"> Sobre Nosotros </h1>
      <div className="container-card">
          <div className="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div className="contenido-card">
		          <h3> Erick Manuel Aguilar Siguache </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
          <div className="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div className="contenido-card">
		          <h3> Jose Ernesto Erazo Linarez </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
          <div className="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div className="contenido-card">
		          <h3> Manuel Alejandro Garcia Torres </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
      </div>
      <div className="container-fluid">
          <div className="container-fluid">
                <h1 className="title-cards"></h1>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="p-3 p-lg-5 border">
                      <center><h1> Mision </h1></center>
                      <p></p>
                      <p>  Promover la digitalización, el acceso y la preservación del 
                        patrimonio cultural y científico. Brindar acceso a todos los
                         usuarios a los recursos informativos acopiados por las bibliotecas, 
                         respetando los derechos de propiedad intelectual. </p>
                         
                      
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="p-3 p-lg-5 border mb-3">
                      <div className="mb-3">
                      <center><h1> Vision </h1></center>
                      <p></p>
                      <p></p>
                      <p>  Promover la digitalización, el acceso y la preservación del 
                        patrimonio cultural y científico. Brindar acceso a todos los
                         usuarios a los recursos informativos acopiados por las bibliotecas, 
                         respetando los derechos de propiedad intelectual. </p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
    </>
  );
}