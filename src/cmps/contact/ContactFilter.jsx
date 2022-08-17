import { Component } from 'react'
import { debounce } from 'lodash'

export class ContactFilter extends Component {

    state = {
        term: ''
    }

    debounceTxt = debounce(() => this.props.onSearch({ ...this.state }), 600)

    handleChange = ({ target }) => {
        this.setState({ term: target.value }, this.debounceTxt)
    }

    render() {
        return (
            <form className='contact-filter flex'>
                <input
                    type="search"
                    onChange={this.handleChange}
                    value={this.state.term}
                    placeholder='Search'
                />
            </form>
        )
    }
}
