import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
// import RegistrationForm from './RegistrationForm'

// import axios from "axios"
// import RegistrationForm from './RegistrationForm';

export default class LoginPage extends Component{

    state = {
        logout : false
    }

    submitBtn = (event) => {

        event.preventDefault();

        console.log("inside")

        this.setState({logout : true})

    }
    
    render(){
        if(this.state.logout === true)
        {
            
            return <Redirect to={"/" }/>
        }
        console.log(this.props.match.params.username)
        return(
            <div>
                {/* <h1>{this.props.match.params.username}</h1> */}
                <h1>Welcome to HomePage {this.props.match.params.username}</h1>
                <button onClick={this.submitBtn}>Logout</button>
            </div>
        );
    }

}