import 'react-hot-loader/patch';
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/shared/layout'
import NotFound from './components/shared/notFound'
import Home from './components/home/home'
import { Routes } from './routes'

function renderApp() {
 
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={ Home } />
                        <Route component={ NotFound } />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('react-app')
    )
}

renderApp();

//Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}