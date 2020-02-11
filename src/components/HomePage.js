import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
// import RegistrationForm from './RegistrationForm'

import axios from "axios"
// import RegistrationForm from './RegistrationForm';

export default class LoginPage extends Component{

    state = {
        logout : false,
        userInfo : []
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        
        console.log(username);

        // const url = "http://localhost:8084/getByUsername/?username="+username;

        const url = "http://ec2-18-188-184-95.us-east-2.compute.amazonaws.com:8084/getByUsername/?username="+username;

        console.log(url);

        axios
            .get(url)
            .then(res => {
                // console.log(res)
              this.setState({ userInfo: res.data});
            });

        console.log(this.state.userInfo)

      }


    LogoutBtn = (event) => {

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
                <h1>Welcome to HomePage</h1>
                <h3>first name : {this.state.userInfo.firstName} </h3>
                <h3>last name : {this.state.userInfo.lastName} </h3>
                <button onClick={this.LogoutBtn}>Logout</button>
            </div>
        );
    }

}