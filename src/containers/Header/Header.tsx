import React from "react";
import logo from "../../assets/images/logo-calculator-bm-bot-s.svg"
import "./Header.scss"

const Header = () => {
    return(
        <header>
            <div className='header_container'>
                <img 
                    src={logo}
                    alt="Logo BM"
                    title="Logo BM"
                    onClick={() => document.location.reload()} 
                />
            </div>
        </header>
    )
}

export { Header }