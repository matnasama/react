import React from "react";
import './navbar.css';
import logo from '../../assets/react.svg'
import { Link } from 'react-scroll';


export function Navbar () {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <div className="menu">
                <Link className="menuListItem">Inicio</Link>
                <Link className="menuListItem">Acerca de</Link>
                <Link className="menuListItem">Clientes</Link>
                <Link className="menuListItem">Portfolio</Link>
            </div>
            <button className="menuBtn"><img src={logo} alt="" />Contacto</button>
        </div>
    )
}