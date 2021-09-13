import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import "./index.css"

export const App = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/">
          <Fragment>
            <Navbar />
            <Login />
          </Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
