import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { App } from './App'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons'
import './assets/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
library.add(fal)
root.render(<App />)
reportWebVitals()
