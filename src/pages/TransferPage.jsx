import { Component } from 'react'
import { UserBalance } from '../cmps/home/UserBalance'
import { userService } from '../services/user.service'
import { AskToLogin } from '../cmps/login/AskToLogin'
import { TrasferFunds } from '../cmps/transfer/TrasferFunds'
import { contactService } from '../services/contact.service'

export class TransferPage extends Component {

    state = {
        loggedInUser: null,
        transferTo: {
            id: null,
            amount: '',
        },
        contacts: null,
    }

    componentDidMount() {
        this.loadUser()
        this.loadContacts()
    }

    loadUser() {
        const loggedInUser = userService.getLoggedinUser()
        if (loggedInUser) this.setState({ loggedInUser })
    }

    async loadContacts() {
        try {
            const contacts = await contactService.getContacts()
            this.setState({ contacts })
        } catch (err) { console.dir(err) }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(prevState => ({ transferTo: { ...prevState.transferTo, [field]: value } }))
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        const { loggedInUser, transferTo } = this.state
        try {
            const isTrasfer = await contactService.transferFunds(loggedInUser._id, transferTo.id, transferTo.amount)
            if (isTrasfer) this.loadUser()
            console.log('sent')
        } catch (err) { console.log('Ops something went wrong') }
    }

    render() {
        const { loggedInUser, transferTo, contacts } = this.state
        if (!loggedInUser) return <AskToLogin />
        if (!contacts) return <div>Loading...</div>
        const main = 'transfer main-layout full'
        const inner = 'transfer__inner'

        return (
            <section className={main}>
                <div className={inner}>
                    <UserBalance loggedInUser={loggedInUser} />
                    <TrasferFunds
                        transferTo={transferTo}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        contacts={contacts}

                    />
                </div>
            </section>
        )
    }
}
