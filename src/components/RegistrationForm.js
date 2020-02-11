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
            var url = "http://localhost:8083/?username=" +this.state.username+"&password="+this.state.password+"&email="+this.state.email;
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
            return <Redirect to={`/registrationFormDeatils/${this.state.responseData.id}/${this.state.responseData.userName}/${this.state.responseData.email}`}/>
            // return <Redirect to={"/registrationFormDeatils/" }/>
        }

        if(this.state.cancelActive === true)
        {
            
            return <Redirect to={"/" }/>
        }

        
        

        return(
            <div>
                <form onSubmit={this.submitForm}>
                {/* <label>username</label> */}
                Username <input id="username" name="username" type="text" onChange={this.handleChange} style={{}}></input><br></br>
                {/* <label>Password</label> */}
                Password <input id="password" name="password" type="text" onChange={this.handleChange} style={{position: 'relative', left: '4px'}}></input><br></br>
                {/* <label>email</label> */}
                Email <input id="email" name="email" type="text" onChange={this.handleChange} style={{position: 'relative', left: '47px'}}></input><br></br>
                <div style={{position: 'relative', top: '30px'}}>
                <button name="submit" >Submit</button>

                <button name="cancel" onClick={this.cancelBtn} style={{position: 'relative', left: '158px'}}>Cancel</button>
                </div>
                </form>

                
            </div>
        );
    }

}