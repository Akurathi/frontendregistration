import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

import axios from "axios"
// import validator from 'validator';

export default class RegistrationForm extends Component{

    constructor(props){
        super(props);
        this.state={
            email : "",
            username : "",
            password : "",
            cancelActive : false,
            emailValid : false,
            lastName : "",
            firstName : "",

            responseData : []

        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]: value
        });
    
        
    };

    cancelBtn = (event) => {

        event.preventDefault();

        this.setState({cancelActive : true})

    }

    submitForm = (event) => {

        console.log("coming in")
        event.preventDefault();

        if(this.state.email !== null){
            if(this.state.email.endsWith('@gmail.com') || this.state.email.endsWith('@hotmail.com') || this.state.email.endsWith('@yahoo.com'))
        {
            //var url = "http://ec2-18-188-184-95.us-east-2.compute.amazonaws.com:8084/?username=" +this.state.username+"&password="+this.state.password+"&email="+this.state.email;
            var url = "http://ec2-18-188-184-95.us-east-2.compute.amazonaws.com:8084/?username="+this.state.username+"&password="+this.state.password+"&email="+this.state.email+"&firstName="+this.state.firstName+"&lastName="+this.state.lastName;
            console.log(url);
            axios
              .post(url)
              .then(res => {
                const resp = res.data;
                console.log(resp);
                this.setState({ responseData: resp });

                console.log(this.state.responseData.status)
    
                if(this.state.responseData.status === "UserAvailable")
                {
                    alert("name is available")
                }
                
            });

        }
        else{
            alert("Enter correct email")
        }
    }
       

      }

    render(){

        if(this.state.responseData.status === "successful")
        {
            console.log("success+++++++++++")
            console.log(this.state.responseData)
            return <Redirect to={`/registrationFormDeatils/${this.state.responseData.id}/${this.state.responseData.userName}/${this.state.responseData.email}/${this.state.responseData.firstName}/${this.state.responseData.lastName}`}/>
            // return <Redirect to={"/registrationFormDeatils/" }/>
        }

        if(this.state.cancelActive === true)
        {
            
            return <Redirect to={"/" }/>
        }

        
        

        return(
            <div>
                <form onSubmit={this.submitForm}>
                <table >
                {/* style={{position: 'relative',left: '9px'}} */}
                    <tr>
                        <th><label>Username</label></th>
                        <th><input id="username" name="username" type="text" onChange={this.handleChange} ></input></th>
                    </tr>
                    {/* style={{position: 'relative', left: '15px'}} */}
                    <tr>
                        <th><label>Password</label></th>
                        <th> <input id="password" name="password" type="password" onChange={this.handleChange} ></input></th>
                    </tr>
                    
                    {/* style={{position: 'relative', left: '47px'}} */}
                    <tr>
                        <th><label>Email</label></th>
                        <th><input id="email" name="email" type="text" onChange={this.handleChange} ></input></th>
                    </tr>
                    
                    {/* style={{position: 'relative', left: '9px'}} */}

                    <tr>
                        <th><label>FirstName</label></th>
                        <th><input id="firstName" name="firstName" type="text" onChange={this.handleChange} ></input></th>
                    </tr>

                    {/* style={{position: 'relative', left: '11px'}} */}

                    <tr>
                        <th><label>LastName</label></th>
                        <th><input id="lastName" name="lastName" type="text" onChange={this.handleChange} ></input></th>
                    </tr>
                </table>
                <div style={{position: 'relative', top: '30px'}}>
                <button name="submit" >Submit</button>

                <button name="cancel" onClick={this.cancelBtn} style={{position: 'relative', left: '158px'}}>Cancel</button>
                </div>
                
                </form>

                
            </div>
        );
    }

}