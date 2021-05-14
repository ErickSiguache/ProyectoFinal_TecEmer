import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <section className="bodyClass">
        <article class="textos-main">
                <img src="./src/images/logo.png"></img>
                <h2></h2>
                <h2></h2>
                <h2> Libros de todo los tipos </h2>
        </article>
      </section>
      <div class="site-wrap"></div>

        
      <h1 className="title-cards">Inicio</h1>
      <div className="container">
      <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
      </div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>

      
      
    </>
  );
}