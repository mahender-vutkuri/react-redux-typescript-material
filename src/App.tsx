import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { useHistory, useLocation } from "react-router-dom";
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import HomePage from './pages/home';
import ContactPage from './pages/contactus';
import RegistrationPage from './pages/registration'

function App() {

  return (
    <div className="App">

      <Router>

        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/contactus">
            <ContactPage />
          </Route>
          <Route path="/registration">
            <RegistrationPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
