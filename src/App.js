import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import RegistrationForm from './components/RegistrationForm';
import RegistrationFormDetails from './components/RegistrationFormDetails';

function App() {
  return (
    <div className="App-header" >
    
      <header >
        <h1>Assignment - 1</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header> 
      <Router>
        <Switch>
          <Route path="/home/:username" component={HomePage} />
          <Route path="/registration" component={RegistrationForm} />
          {/* <Route path="/registrationFormDeatils" component={RegistrationFormDetails} /> */}
          <Route path="/registrationFormDeatils/:id/:username/:email/:firstName/:lastName" component={RegistrationFormDetails} />
          <Route path="/" component={LoginPage} />
          
          
          
          {/* <Route exact path="/home">
            <HomePage />
          </Route>

          <Route exact path="/">
            <LoginPage />
          </Route> */}
        </Switch>
      </Router>
      <footer>
        <h3>Developed by Sravani Goli</h3>
      </footer>
    </div>
  );
}

export default App;
