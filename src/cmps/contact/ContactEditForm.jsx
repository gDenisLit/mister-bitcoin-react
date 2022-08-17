import React from 'react'

export function ContactEditForm({ contact, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-column">
             <input
                type="email" 
                placeholder="Email"
                autoFocus name="email" 
                onInput={handleChange}
                value={contact.email}
                required
            />
             <input
                type="text" 
                placeholder="Name"
                name="name" 
                onInput={handleChange}
                value={contact.name}
                required
            />
             <input
                type="tel" 
                placeholder="Phone"
                name="phone" 
                onInput={handleChange}
                value={contact.phone}
                required
            />
            <button>Save contact</button>
        </form>
    )
}
