import React from 'react'

export function LoginForm({ handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Log in</h2>
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
                <span>Login</span>
            </button>
        </form>
    )
}
