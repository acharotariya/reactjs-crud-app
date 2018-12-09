import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
import Notifications, { notify } from 'react-notify-toast';
import {  withRouter } from 'react-router'
// import { browserHistory } from 'react-router'


class Bodycontent extends Component {
    constructor(props) {  // Props are read-only and are set by a parent component.
        // super allows you to access the constructor method of the parent class. 
        // super allows a subclass to have access to the this keyword.
        // The only reason to include props is to access this.props inside of your constructor.
        super(props);  
        this.state = { email:'',password:'',em:'',pass:'' };
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.inputformvalue = this.inputformvalue.bind(this);
    }
    handleEmailChange(event) {
        // console.log("event.target.value", event.target.value)
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    // handleEmChange(event) {
    //     console.log('event.target.value', event.target.value)
    //     this.setState({ em: event.target.value });
    // }
    // handlePassChange(event) {
    //     console.log('event.target.value ===>', event.target.value)
    //     this.setState({ pass: event.target.value });

    inputformvalue(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    handleLoginSubmit(e){
        console.log("***************")
        console.log("email", this.state.value);
        console.log("password", this.state.value)
        e.preventDefault();
        var self = this;
        console.log(">>>>>>", self.state.email)
        console.log(">>>>>>", self.state.password)
        
        fetch('/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: self.state.email,
                password: self.state.password
            }),
        }).then((response) => {
            if (response.ok) {
                console.log("response >>>>>>>>>>",response)
                notify.show("you are succesfully login..!!!", "success", 2000);
                this.props.history.push('/viewrecord');
                // return response.json();
            } else {
                notify.show("login failed.", "error", 5000);
            }
        })
    }
    onSignUpSubmit(event) {
        event.preventDefault();
        console.log("em",event.target.em.value);
        console.log("pass",event.target.pass.value)
        // // On submit of the form, send a POST request with the data to the server.
        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: event.target.em.value,
                password: event.target.pass.value
            }),
        }).then((response) => {
            if (response.ok) {
                notify.show("you are succesfully register..!!!", "success", 5000);
                // return response.json();
            } else {
                notify.show("email already exist", "error", 5000);
            }
        })
    }
    render() {
        return (
            <div >
                <br />

                {/* <h2 className="mb-5">Form login</h2> */}
                <form method="post" onSubmit={this.handleLoginSubmit}>
                    {/* <p className="h5 text-center mb-4"></p><h4>Sign in</h4> */}
                    <Input label="Type your email" icon="envelope" group type="email"  ref="email" onChange={this.handleEmailChange} validate error="wrong" success="right" />
                    <Input label="Type your password" icon="lock" group type="password"  onChange={this.handlePasswordChange} ref="password" validate />
                    <div className="text-center">
                        <Notifications />
                        <Button type="submit">Login</Button>
                    </div>
                </form>
                <br />
                {/* <h2 className="mb-5"><center>Form register</center></h2> */}
                <form onSubmit={this.onSignUpSubmit}>
                    {/* <p className="h5 text-center mb-4"></p><h4>Sign up</h4> */}
                    <Input label="Your email" icon="envelope" group type="email"   name="em"  onChange={this.inputformvalue} validate error="wrong" success="right" />
                    <Input label="Your password" icon="lock" group type="password"  name="pass" onChange={this.inputformvalue} ref="pass" validate />
                    <div className="text-center">
                        <Notifications />
                        <Button type="submit" color="deep-orange">Sign up</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Bodycontent);