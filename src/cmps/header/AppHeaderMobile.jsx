import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Hamburger({ toggleMenu }) {
    return (
        <div className="hamburger-wrapper" onClick={toggleMenu} >
            <FontAwesomeIcon icon="fa-light fa-bars" />
        </div >
    )
}

export function CloseMenuX({ toggleMenu }) {
    return (
        <span className="close-menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon="fa-light fa-circle-x" />
        </span>
    )
}
