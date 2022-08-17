import { Component } from 'react'
import { contactService } from '../services/contact.service'

export class ContactDetailsPage extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const { id } = this.props.match.params
        if (!id) return
        try {
            const contact = await contactService.getContactById(id)
            if (contact) this.setState({ contact })
        } catch (err) { console.log('Failed to find contact') }

    }
    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>

        const imgUrl = `https://robohash.org/${contact._id}`
        const main = 'contact-details main-layout full'
        const inner = 'contact-details__inner flex-column-center'

        return (
            <section className={main}>
                <div className={inner}>
                    <img src={imgUrl} alt="" />
                    <h2>{contact.name}</h2>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            </section>
        )
    }
}
