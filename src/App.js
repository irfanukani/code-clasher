import { Alert, AlertIcon } from '@chakra-ui/alert'
import { CloseButton } from '@chakra-ui/close-button'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createError, deleteErrors } from './Actions/Errors/handleErrors'
import AuthNavbar from './Components/AuthNavbar'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'
import "./index.css"

export const App = () => {
  const storedState = useSelector((state) => state);
  const [dErrors, setdErrors] = useState([]);

  useEffect(() => {
    setdErrors(storedState.getErrors);
  }, [storedState.getErrors])

  const dispatch = useDispatch();

  const _handleClose = () => {
    dispatch(deleteErrors());
  }

  const getAuthRoutes = () => {
    return <Switch>
      <Route path="/" exact>
        <Fragment>
          <Navbar />
          <Login />
        </Fragment>
      </Route>
      <Route path="/signup" exact>
        <Fragment>
          <Navbar />
          <SignUp />
        </Fragment>
      </Route>
    </Switch>
  }

  const getUserRoutes = () => {
    return <Fragment>
      <AuthNavbar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </Fragment>
  }

  return (
    <BrowserRouter >
      {dErrors && <Alert status="error"> <AlertIcon /> {dErrors.message} <CloseButton position="absolute" right="8px" top="8px" onClick={() => _handleClose()} /></Alert>}
      {!storedState?.userData ? getAuthRoutes() : getUserRoutes()}
    </BrowserRouter>
  )
}
