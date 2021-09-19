import React from "react";
import './Header.css';
import Logo from "../img/cappacitaLogo.png"

export default ()=>{



    return(
        
        <header>
            <div className="logo">
                <a href="/">
                    <img src={Logo} alt="logo-cappacita"/>
                </a>
            </div>
            <div className="user">
                <a href="/">
                    <span>Login</span>
                </a>
            </div>
        </header>

    )
}