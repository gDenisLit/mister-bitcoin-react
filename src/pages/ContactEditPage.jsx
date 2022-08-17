import { Component } from 'react'
import { ContactEditForm } from '../cmps/contact/ContactEditForm'
import { contactService } from '../services/contact.service'

export class ContactEditPage extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const { id } = this.props.match.params

        const contact = (!id) ?
            contactService.getEmptyContact() :
            await contactService.getContactById(id)
        this.setState({ contact })

    }

    handleChange = ({ target }) => {
        console.log(target.value)
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const contact = await contactService.saveContact(this.state.contact)
            if (contact) this.props.history.push('/contact')
        } catch (err) { console.log('Ops something went wrong') }
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
                    <ContactEditForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        contact={contact}
                    />
                </div>
            </section>
        )
    }
}
