import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
    const imgUrl = `https://robohash.org/${contact._id}`
    return (
        <>
            <img src={imgUrl} alt="" />
            <div className='flex flex-column'>
                <h2>{contact.name}</h2>
                <Link to={`/contact/${contact._id}`}
                    className={'link-details'}
                >View profile
                </Link>
            </div>
        </>
    )
}
