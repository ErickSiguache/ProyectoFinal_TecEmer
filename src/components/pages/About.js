import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <>
      <h1 className="title-cards"> Sobre Nosotros </h1>
      <div class="container-card">
          <div class="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div class="contenido-card">
		          <h3> Erick Manuel Aguilar Siguache </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div class="contenido-card">
		          <h3> Jose Ernesto Erazo Linarez </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
          <div class="card">
            <figure>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ9DMNFHxwZcfPXJrJeBMITxPMP3FMZk_ixXzTfzt4G_C-G058"></img>
            </figure>
            <div class="contenido-card">
		          <h3> Manuel Alejandro Garcia Torres </h3>
		          <p> Estudiante de ingenieria en sistemas informaticos </p>
	          </div>
          </div>
      </div>
    </>
  );
}
