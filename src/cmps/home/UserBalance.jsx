import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function UserBalance({loggedInUser}) {
    if (loggedInUser) {
        return (
            <>
                <h3>Hi {loggedInUser.name}</h3>
                <p>Your balance: {loggedInUser.coins} <FontAwesomeIcon icon="fa-light fa-bitcoin-sign" /></p>
            </>
        )
    } else return (<Link to='/login'>Login To check yout balance</Link>)
}
