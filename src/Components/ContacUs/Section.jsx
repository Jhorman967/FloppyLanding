import React from 'react'
import './styles.css';



function ContacUs(){

  const location = {
  
  }
  return (
    <>
    <section className="Container">
      <div className="Container-ColLeft">
        <form >
          <label>
            Nombre
          </label>
          <input type="text">

          </input>
          <label>
            Correo
          </label>
          <input type="e-mail"></input>
          <label>
            Descripcion
          </label>
          <textarea>

          </textarea>

          <button class="boton" type="submit"> Enviar</button>

        </form>
      </div>
      <div className="Container-ColRight">

        <h2> Esta es nuestra ubicacion</h2>
       
       
      </div>
    </section>
    </>
  )
}

export default ContacUs;