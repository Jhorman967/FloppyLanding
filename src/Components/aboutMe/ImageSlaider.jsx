import React from "react";
import './styles.css'



function Image(props) {
    return(
        <div className="image-slider__image">
        <img src={props.imageUrl} alt="" />
        <div className="image-slider__button-container">
          <button onClick={props.nextImage} className="image-slider__button">Anterior</button>
          <button onClick={props.prevImage} className="image-slider__button">Siguiente</button>
        </div>
      </div>
    )
    
}
export default Image