import React from "react"

export function TrasferFunds({ contacts, handleSubmit, handleChange, transferTo }) {
    return (

        <form onSubmit={handleSubmit}>
            <select name="id" onChange={handleChange}>
                <option value="" disabled>Select contact</option>
                {contacts.map(contact => {
                    return (
                        <option
                            value={contact._id}
                            key={contact._id}
                        >
                            {contact.name}
                        </option>
                    )
                })}
            </select>
            <input
                type="number"
                placeholder="Amount"
                name="amount"
                value={transferTo.amount}
                onInput={handleChange}
                required
            />
            <button>Send Funds</button>
        </form>
    )

}


