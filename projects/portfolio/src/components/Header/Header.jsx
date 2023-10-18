import React from "react"
import './Header.css'
import { Link } from 'react-scroll'
import IconSquarePhone from "../../assets/IconSquarePhone.jsx"


export function Header () {
    return (
        <div className="navbar">
            <img src="" className="logo" alt="" />
            <div className="menu">
                <Link className="menuListItem">Inicio</Link>
                <Link className="menuListItem">Acerca de</Link>
                <Link className="menuListItem">Clientes</Link>
                <Link className="menuListItem">Portfolio</Link>
            </div>
            <button className="menuBtn"><IconSquarePhone /><p>Contacto</p></button>
        </div>
    )
}