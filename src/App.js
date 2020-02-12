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
        
      </header> 
      <Router>
        <Switch>
          <Route path="/home/:username" component={HomePage} />
          <Route path="/registration" component={RegistrationForm} />
          {/* <Route path="/registrationFormDeatils" component={RegistrationFormDetails} /> */}
          <Route path="/registrationFormDeatils/:id/:username/:email/:firstName/:lastName/:wordCount" component={RegistrationFormDetails} />
          <Route path="/" component={LoginPage} />
          
        </Switch>
      </Router>
      <footer>
        <h3>Developed by Sravani Goli</h3>
      </footer>
    </div>
  );
}

export default App;
