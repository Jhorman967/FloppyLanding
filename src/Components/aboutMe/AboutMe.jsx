import React,{useState} from 'react'
import './styles.css'
import Image from './ImageSlaider'

import Imgan1 from '../../assets/Img/header/heade(1).jpg'
import Imgan2 from '../../assets/Img/header/heade(2).jpg'
import Imgan3 from '../../assets/Img/header/heade(3).jpg'
import Imgan4 from '../../assets/Img/header/heade(4).jpg'



function AboutMe() {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

   setTimeout(()=>{
    handleNextImage()
   },9000)


      const images = [
       {url:Imgan1, caption: "esta es la imagen 1"},
       {url:Imgan2, caption: "esta es la imagen 2"},
       {url:Imgan3, caption: "esta es la imagen 3"},
       {url:Imgan4, caption: "esta es la imagen 4"},
      ];

  return (
  <>
     <div className="carousel">
      <div className="carousel__image-container">
      <img src={images[currentImageIndex].url} alt="carousel" className="carousel__image" />
      <div className="carousel__caption">{images[currentImageIndex].caption}</div>
      </div>
      <button onClick={handlePrevImage} className="carousel__button carousel__button--prev">  &lt; </button>
      <button onClick={handleNextImage} className="carousel__button carousel__button--next"> &gt; </button>
    </div>
  
  </>
  )
}
export default AboutMe;