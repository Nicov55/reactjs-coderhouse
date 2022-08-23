import React from "react";
import imagenes from "./imagenes";

const Header = () => {
    return (
        <div className="bg-dark py-3">
       <div className="container px-2 px-lg-2 my-2">
            <div className="text-center text-white">
              &nbsp;
                <h1 className="display-5 fw-bolder titulo">T-BURGER</h1>
                <p><img className="tigerimage" alt="Cambiar imagen" height="130" src={imagenes.logoburger} /></p>
              
            </div>
        </div>
        </div>      
    )
}

export default Header; 