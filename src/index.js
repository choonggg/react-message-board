import { configure } from "mobx";

import './styles.css'

import App from './App'
import React from 'react'
import { render } from 'react-dom'

configure({ enforeActions: true })

render(<App />, document.getElementById('new-app'))
