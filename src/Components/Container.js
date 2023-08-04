import React from "react";
import { Component } from "react";
import Details from "./Details";
import Login from "./Login";
import Navbar from "./Navbar";


export default class Container extends Component {

    constructor() {
        super();

        this.state = {

            isSubmitted: false,
            name: null,
            email: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null
            }

        }
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({isSubmitted: true, name, email}, () => {
            console.log(this.state);
        });
        console.log(name + email);

    }

    handleDetailsSubmit = (event) => {
        
        event.preventDefault();
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;

        this.setState({questions}, () => {
            console.log(this.state);
        });
        

    }

    render() {


        

        return (

            <div>

                

                {

                    this.state.name === null && this.state.email === null ? (<Login submit={this.handleSubmit} />) : (<Details  submit={this.handleDetailsSubmit} />)
      
                }


                

            </div>
        )
    }


}
