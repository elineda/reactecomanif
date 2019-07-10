import logo from "../img/Tous-climat-FR.png";
import React from "react";

function Header(){
    return(
        <div className='container'>

            <div className="header d-flex justify-content-center">
                <img className="img-fluid lien imglogo" id="logofr" alt='Logo Tous Climat'
                     src={logo} />
            </div>


        </div>
    )
}

export default Header