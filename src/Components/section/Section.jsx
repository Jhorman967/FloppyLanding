import React from 'react'
import './styles.css';
import image from '../../assets/Img/FloppyComputer.jpeg';

function Section(){
  return (
    <>
    <section className="seccion">
      <img src={image} alt="ImagenFloppy" className="imagen" />
      <div className="texto">
        <h2>Título de la sección</h2>
        <p>Este es un texto de ejemplo para la sección.</p>
      </div>
    </section>
    </>
  )
}

export default Section;