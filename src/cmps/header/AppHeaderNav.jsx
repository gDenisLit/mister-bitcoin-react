import React from 'react'
import { NavLink } from 'react-router-dom'
import { CloseMenuX } from './AppHeaderMobile'
import { AppHeaderLogin } from './AppHeaderLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function AppHeaderNav({ links, isMenuOpen, toggleMenu, loggedInUser }) {

    return (
        <nav className={'nav-wrapper flex flex-column'}>
            {links.map(link => {
                return (
                    <NavLink
                        exact
                        key={link.id}
                        to={link.path}
                        className={'header-link'}
                    >
                        <FontAwesomeIcon
                            icon={link.icon}
                            className={'link-icon'}
                        />
                        {link.title}
                    </NavLink>
                )
            })}
           
        </nav >
    )
}
