import { Component } from 'react'
import { ContactList } from '../cmps/contact/ContactList'
import { contactService } from '../services/contact.service'
import { ContactFilter } from '../cmps/contact/ContactFilter'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const { filterBy } = this.state
        try {
            const contacts = await contactService.getContacts(filterBy)
            this.setState({ contacts })
        } catch (err) { console.dir(err) }
    }

    onSearch = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>

        const main = 'contact-page main-layout full'
        const inner = 'contact-page__inner flex-column-center'
        
        return (
            <section className={main}>
                <div className={inner}>
                    <div className='container'>
                        <h3>Find someone to trade with</h3>
                        <ContactFilter onSearch={this.onSearch} />
                        <ContactList contacts={contacts} />
                    </div>
                </div>
            </section>
        )
    }
}
