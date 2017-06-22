import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RoutesModule from './routes'

ReactDOM.render(
    <BrowserRouter children={ RoutesModule.routes } />,
    document.getElementById('react-app')
);