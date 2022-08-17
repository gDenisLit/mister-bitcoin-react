import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function AppHeaderLogin({ loggedInUser }) {
    if (loggedInUser) return ''
    return (
        <NavLink
            to='/login'
            className={'header-link login-link'}
        >
            <FontAwesomeIcon
                icon="fa-light fa-right-to-bracket"
                className={'link-icon'}
            />
            Login
        </NavLink>
    )
}
