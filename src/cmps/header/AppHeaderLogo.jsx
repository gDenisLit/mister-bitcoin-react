import React from 'react'
import logo from '../../assets/img/bitcoin.png'

export function AppHeaderLogo() {
    return (
        <div className="logo-wrapper flex items-center">
            <img src={logo} alt=""/>
            <h2>MISTER BTC</h2>
        </div>
    )
}
