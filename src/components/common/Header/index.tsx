import React from 'react'
import logo from '../../../assets/creditas-branco.png'
import './styles.css'

export default function Header () {
    return <header>
        <div className="logo">
            <img src={logo} alt="logo-creditas"/>
        </div>
        <ul>
            <li>
                Ajuda
            </li>
        </ul>
    </header>
}