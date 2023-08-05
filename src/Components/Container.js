import React from "react";
import { Component } from "react";
import Details from "./Details";
import Login from "./Login";
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyDj3v8yyGxHMwtyK_ysXk_obSwKSuJg4s8",
    authDomain: "ws-survey-b1f1b.firebaseapp.com",
    databaseURL: "https://ws-survey-b1f1b-default-rtdb.firebaseio.com",
    projectId: "ws-survey-b1f1b",
    storageBucket: "ws-survey-b1f1b.appspot.com",
    messagingSenderId: "1076461992272",
    appId: "1:1076461992272:web:0a57e752f1a07f00295455"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbRef = ref(getDatabase());




export default class Container extends Component {

    constructor() {
        super();

        this.state = {

            id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            isSubmitted: false,
            name: null,
            email: null,
            other: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null
            },
            finalSubmit: false

        }
    }

    writeUserData = (userId, name, email, questions, other) => {
        const db = getDatabase();
        set(ref(db, 'survey/' + userId), {
            username: name,
            email: email,
            questions: questions,
            other: other
        });
    };


   
handleSubmit = (event) => {

    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ isSubmitted: true, name, email }, () => {
        console.log(this.state);
    });
    
    // Getting all bd data at once in console
    get(child(dbRef, `survey/`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });


}

handleDetailsSubmit = (event) => {

    event.preventDefault();
    const questions = {};
    questions.q1 = event.target.q1.value;
    questions.q2 = event.target.q2.value;
    questions.q3 = event.target.q3.value;
    const other = event.target.other.value;

    this.setState({ questions, finalSubmit: true, other: other }, () => {
        console.log(this.state);
    });


    this.writeUserData(this.state.id, this.state.name, this.state.email, questions, other);
};





render() {




    return (

        <div>



            {

                this.state.finalSubmit ?
                    (
                        <div className="text-center mt-5 text-dark">

                            <h1>Thank you!</h1>
                            <h1>Your request has been submitted successfully ....</h1>
                            <h3>Please wait for
                                3 seconds we will redirect you to home page...</h3>



                            {


                                setTimeout(() => {

                                    this.setState({ finalSubmit: false, isSubmitted: false, name: null, email: null });

                                }, 3000)

                            }

                        </div>

                    )

                    : (this.state.name === null && this.state.email === null ? (<Login submit={this.handleSubmit} />) : (<Details submit={this.handleDetailsSubmit} />))

            }




        </div>
    )
}


}
