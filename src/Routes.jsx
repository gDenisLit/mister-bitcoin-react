import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { StatisticPage } from './pages/StatisticPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { ContactDetailsPage } from './pages/ContactDetailsPage'

export function Routes() {
    return (
        <Switch>
            <Route path='/contact/:id' component={ContactDetailsPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <Route path='/statistic' component={StatisticPage} />
            <Route path='/' component={HomePage} />
        </Switch>
    )
}
