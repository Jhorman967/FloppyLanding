import React from "react";
import { FaFacebookSquare,FaTwitterSquare, FaInstagramSquare  } from "react-icons/fa";
import "./styles.css";



function Footer() {
  return (
    <>
    <footer>
      <div className="redes-sociales">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare  />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare  />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
      </div>
      <p>Derechos de autor © 2023 Floppy. Todos los derechos reservados.</p>
    </footer>

    </>
  )
}
export default Footer