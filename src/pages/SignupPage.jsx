import { Component } from 'react'
import { userService } from '../services/user.service'
import { SignupForm } from '../cmps/login/SignupForm'
import { Link } from 'react-router-dom'

export class SignupPage extends Component {

    state = {
        email: '',
        password: '',
        moves: [],
        coins: 100,
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const user = await userService.signup(this.state)
            if (user) this.props.history.push('/#')
        } catch (err) { console.log('Wrong credentials') }
    }

    handleChange = ({ target }) => {
        const field = target.name
        this.setState({ [field]: target.value })
    }

    render() {
        const main = "login main-layout full"
        const inner = "login__inner flex-column-center"
        const Login = () => <Link to='/login'>Already a member?</Link>

        return (
            <section className={main}>
                <div className={inner}>
                    <SignupForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                    <Login />
                </div>
            </section>
        )
    }
}
