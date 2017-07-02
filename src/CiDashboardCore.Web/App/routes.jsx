import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './components/shared/layout'
import NotFound from './components/shared/notFound'
import Home from './components/home/home'

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route component={NotFound} />
  </Switch>
)
