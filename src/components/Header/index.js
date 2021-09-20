import React from "react";
import './style.css';
import Logo from "../../img/cappacitaLogo.png"


const Header = ({black})=>{

    return(
        
        <header className={black ? "header_black" : ""}>
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

export default Header