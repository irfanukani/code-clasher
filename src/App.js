import { Alert, AlertIcon } from '@chakra-ui/alert'
import { CloseButton } from '@chakra-ui/close-button'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createError, deleteErrors } from './Actions/Errors/handleErrors'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
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

  return (
    <BrowserRouter >
      {dErrors && <Alert status="error"> <AlertIcon /> {dErrors.message} <CloseButton position="absolute" right="8px" top="8px" onClick={() => _handleClose()} /></Alert>}
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
