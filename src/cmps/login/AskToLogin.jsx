import React from 'react'
import { Link } from 'react-router-dom'

export function AskToLogin() {
    return (
        <section className='ask-login main-layout full'>
            <div className='ask-login__inner'>
                <Link to='/login'>Login To check yout balance</Link>
            </div>
        </section>
    )
}
