import React from 'react'
import Route from 'react-router-dom'
import Layout from './components/shared/layout'
import Home from './components/home/home'

const routes = 
    <Layout>
        <Route exact path='/' component={ Home } />
    </Layout>;

export default routes