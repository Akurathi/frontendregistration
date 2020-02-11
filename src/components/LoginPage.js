import React, { Component } from 'react'
import axios from "axios"
import {Redirect} from 'react-router-dom';
// import HomePage from "./HomePage"
// import RegistrationForm from './RegistrationForm';

export default class LoginPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            registration : false,
            status : "",
            username : "",
            password : ""
        }

    }

    submitBtn = (event) => {

        event.preventDefault();

        console.log("inside")

        this.setState({registration : true})

    }

    submitForm = (event) => {

        if(this.state.username.length === 0 || this.state.password.length === 0)
            alert("Enter credentials")

        event.preventDefault();

        var url = "http://ec2-18-188-184-95.us-east-2.compute.amazonaws.com:8084/login/?username="+this.state.username+"&password="+this.state.password;
        console.log(url);
        axios
          .post(url)
          .then(res => {
            const resp = res.data;
            console.log(resp);
            this.setState({ status: resp });
            // if(resp === "Login success")
            // {
            //     console.log("inside")
            //  return <Redirect to='/home' />
            // }
          });

        //   console.log(this.state.status+ "----------");

      }

      handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      };

      render(){

        if(this.state.registration === true)
            {
            
               return <Redirect to={"/registration/" }/>
            }
          
           if(this.state.status === "Login success")
            {
            
               return <Redirect to={"/home/" + this.state.username }/>
            }
          return(
              <div>
                  <div>Login for getting the acccess</div>
                  <form onSubmit={this.submitForm}>
                      {/* <label>username</label> */}
                      Username <input id="username" name="username" type="text" onChange={this.handleChange}></input><br></br>
                      {/* <label>Password</label> */}
                      Password <input id="password" name="password" type="text" onChange={this.handleChange} style={{position: 'relative',left: '8px'}}></input><br></br>
                      <button name="submit">Submit</button>
                  </form>
                  { console.log(this.state.username)}
                  <button onClick={this.submitBtn}>Registration Form</button>

              </div>
          );
      }



} 