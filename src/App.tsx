import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';



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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
