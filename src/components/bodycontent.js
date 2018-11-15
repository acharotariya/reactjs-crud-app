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
        this.state = { email: '', password: '' };
        this.onSubmit = this.handleSubmit.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleEmailChange(event) {
        // console.log("event.target.value", event.target.value)
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
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
                this.this.props.history.push('/AddItem');
                // return response.json();
            } else {
                notify.show("login failed.", "error", 5000);
            }
        })
    }
    handleSubmit(e) {
        console.log("email", this.state.value);
        console.log("password", this.state.value)
        e.preventDefault();
        var self = this;
        console.log(">>>>>>", self.state.email)
        console.log(">>>>>>", self.state.password)
        // On submit of the form, send a POST request with the data to the server.
        fetch('/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: self.state.email,
                password: self.state.password
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
                    <p className="h5 text-center mb-4"><h4>Sign in</h4></p>
                    <Input label="Type your email" icon="envelope" group type="email" value={this.state.email} ref="email" onChange={this.handleEmailChange} validate error="wrong" success="right" />
                    <Input label="Type your password" icon="lock" group type="password" value={this.state.password} onChange={this.handlePasswordChange} ref="password" validate />
                    <div className="text-center">
                        <Notifications />
                        <Button type="submit">Login</Button>
                    </div>
                </form>
                <br />
                {/* <h2 className="mb-5"><center>Form register</center></h2> */}
                <form method="post" onSubmit={this.onSubmit}>
                    <p className="h5 text-center mb-4"><h4>Sign up</h4></p>
                    <Input label="Your email" icon="envelope" group type="email" value={this.state.email} ref="email" onChange={this.handleEmailChange} validate error="wrong" success="right" />
                    <Input label="Your password" icon="lock" group type="password" value={this.state.password} onChange={this.handlePasswordChange} ref="password" validate />
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