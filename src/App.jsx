import { HashRouter as Router } from 'react-router-dom'
import { AppHeader } from "./cmps/header/AppHeader"
import { Routes } from './Routes'

export function App() {

    return (
        <Router>
            <AppHeader />
            <Routes />
        </Router>
    )
}
