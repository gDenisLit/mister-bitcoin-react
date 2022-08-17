import React from 'react'

export function SignupForm({ handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Sign up</h2>
            <input
                type="email" placeholder="Email"
                autoFocus name="email" onInput={handleChange}
            />
            <input
                type="password" placeholder="Password"
                show-password="true" name="password"
                onInput={handleChange}
            />
            <button className="login__btn">
                <span>Signup</span>
            </button>
        </form>
    )
}
