import { Alert, AlertIcon } from '@chakra-ui/alert'
import { CloseButton } from '@chakra-ui/close-button'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { createError, deleteErrors } from './Actions/Errors/handleErrors'
import { getUserProfile } from './Actions/Profile/getUserProfile'
import AuthNavbar from './Components/AuthNavbar'
import Dashboard from './Components/Dashboard/Dashboard'
import Solve from './Components/Dashboard/Solve'
import Game from './Components/Game'
import GameNavBar from './Components/GameNavBar'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import { Room } from './Components/Room'
import SignUp from './Components/SignUp'
import "./index.css"

export const App = () => {
  const storedState = useSelector((state) => state);
  const [dErrors, setdErrors] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setdErrors(storedState.getErrors);
    dispatch(getUserProfile());
  }, [storedState.getErrors])


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
      <Switch>
        <Route path="/" exact>
          <>
            <AuthNavbar />
            <Dashboard />
          </>

        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/game/:id" >
          <>
            <GameNavBar />
            <Game />
          </>
        </Route>
        <Route path="/problem/:id" >
          <>
            <AuthNavbar />
            <Solve />
          </>
        </Route>
        <Route path="/room/:id">
          <Room />
        </Route>
        <Route path="*">
          <Redirect to="/"></Redirect>
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
