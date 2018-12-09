import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
import { withRouter } from 'react-router'

// import axios from 'axios';
// import Notifications, { notify } from 'react-notify-toast';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: '',
      price: ''
    }
    this.onSubmit = this.handleAddItemSubmit.bind(this);
    this.inputformvalue = this.inputformvalue.bind(this);
  }
  handleAddItemSubmit(event) {
    event.preventDefault();
    console.log(">>>>>>", event.target.fruit.value)
    console.log(">>>>>>", event.target.price.value)

    fetch('/additem', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fruit: event.target.fruit.value,
        price: event.target.price.value
      })
    }).then((response) => {
      if(response) {
        console.log("response >>>>>>>>>>", response)
        response.json().then((data) => {
          console.log(data);
          this.props.history.push('/viewrecord')
      });
      }
    })
  }
  inputformvalue(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {

    return (
      <div style={{ "margin": "0 auto", "width": "50%" }}>
        <br />
        <form onSubmit={this.handleAddItemSubmit}>
          <p className="text-center mb-4"><h4>AddItem</h4></p>
          <Input label="enter fruit name" icon="envelope" name="fruit" onChange={this.inputformvalue} validate error="wrong" success="right" />
          <Input label="enter fruit price" icon="lock" name="price" onChange={this.inputformvalue} validate />
          <div className="text-center">
            <Button type="submit">AddItem</Button>
          </div>
        </form>
        
      </div>
    );
  }
}
export default withRouter(AddItem);