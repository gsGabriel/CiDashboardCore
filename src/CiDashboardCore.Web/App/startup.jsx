import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/shared/layout'
import NotFound from './components/shared/notFound'
import Home from './components/home/home'
import { Routes } from './routes'

function renderApp() {
 
    ReactDOM.render(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>,
        document.getElementById('react-app')
    )
}

renderApp();

// Allow Hot Module Replacement
// if (module.hot) {
//    module.hot.accept('./routes', () => {
//        routes = RoutesModule('./routes').routes;
//        renderApp();
//    });
// }