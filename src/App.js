import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import React, { useState } from 'react';
import useIsLoggedIn from './login/useIsLoggedIn';
import PersistentDrawerLeft from './navigation/PersistentDrawerLeft'



function App() {
  // const LoginView = () => <Login success={loginSuccess} failed={loginFailed} />;

  const TodoAppView = () => <h1>Inicio</h1>;

  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();

  if(!isLoggedIn) {
    console.log("F");
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }
  
  return (
    <div className="wrapper">
      <PersistentDrawerLeft/>
      <Router>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/todo" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        </Route>
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
