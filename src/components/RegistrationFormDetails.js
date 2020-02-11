import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

// import axios from "axios"


export default class RegistrationFormDetails extends Component{

    state = {
        homePageActive : false
    }

    submitBtn = (event) => {

        event.preventDefault();

        console.log("inside")

        this.setState({homePageActive : true})

    }

    render(){

        if(this.state.homePageActive === true)
        {
            
            return <Redirect to={"/" }/>
        }

        console.log(this.props.match.params.username)

        console.log(this.props.match.params.email)

        console.log(this.props.match.params.id)

        console.log(this.props.match.params.firstName)

        console.log(this.props.match.params.lastName)

        return(

            <div>

                <h1>Registered details are</h1>
                <h4>id : {this.props.match.params.id}</h4>
                <h4>username : {this.props.match.params.username}</h4>
                <h4>Email : {this.props.match.params.email}</h4>
                <h4>FirstName : {this.props.match.params.firstName}</h4>
                <h4>LastName : {this.props.match.params.lastName}</h4>

                <button onClick={this.submitBtn}>HomePage</button>



            </div>

        );
    }
}