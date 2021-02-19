import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import React, { useState } from 'react';
import useIsLoggedIn from './login/useIsLoggedIn'

function loginSuccess(e) {
  alert("Login Success! +++");
}

function loginFailed() {
  alert("Login Failed! +++ ");
}

function App() {
  // const LoginView = () => <Login success={loginSuccess} failed={loginFailed} />;

  const TodoAppView = () => <h1>Inicio</h1>;

  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();

  if(!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }
  
  return (
    <div className="wrapper">
      <Router>
        {/* <ul>
          {!JSON.parse(localStorage.getItem("isLoggedIn")) && (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
          {JSON.parse(localStorage.getItem("isLoggedIn")) && (
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          )}
        </ul> */}

        {/* <Route exact path="/">
          {LoginView}
        </Route> */}
        <Switch>
        <Route path="/todo">
          {TodoAppView}
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
