import React from 'react';
import '../../App.css';
import logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
    <>
      <section className="bodyClass">
        <article class="textos-main">
          <img src={logo} width="170"/>
                <h2></h2>
                <h2></h2>
                <h1> Libros de todo los tipos </h1>
                <h2> Para tu educacion y entretenimiento </h2>
        </article>
      </section>
      <div class="site-wrap"></div>
    </>
  );
}
