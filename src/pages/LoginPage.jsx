import { Component } from 'react'
import { userService } from '../services/user.service'
import { LoginForm } from '../cmps/login/LoginForm'
import { Link } from 'react-router-dom'

export class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        try {
            const user = await userService.login(this.state)
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
        const Signup = () => <Link to='/signup'>Don't have an account?</Link>

        return (
            <section className={main}>
                <div className={inner}>
                    <LoginForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                    <Signup />
                </div>
            </section>
        )
    }
}
