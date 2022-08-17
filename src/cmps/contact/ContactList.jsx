import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts }) {

    return (
        <ul className='contact-list clean-list flex flex-column'>
            {contacts.map(contact => {
                return (
                    <li
                        key={contact._id}
                        className='contact-preview flex items-center'
                    >
                        <ContactPreview contact={contact} />
                    </li>
                )
            })}
        </ul>
    )
}
