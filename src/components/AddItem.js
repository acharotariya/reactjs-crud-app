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
    // this.showValue = this.showValue.bind(this);
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
      }),
    }).then((response) => {
      if (response.ok) {
        console.log("response >>>>>>>>>>", response)
      } else {
        // notify.show("add item failed.. ", "error", 5000);
      }
    })
  }
  inputformvalue(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  //    showValue(event){
  //     event.preventDefault();
  //     alert('fruit: '+ this.state.fruit + ' price: ' + this.state.price)
  // }
  render() {

    return (
      <div style={{ "margin": "0 auto", "width": "50%" }}>
        <br />
        <form method="post" onSubmit={this.handleAddItemSubmit}>
          <p className="h5 text-center mb-4"><h4>AddItem</h4></p>
          <Input label="enter fruit name" icon="envelope" name="fruit" onChange={this.inputformvalue} validate error="wrong" success="right" />
          <Input label="enter fruit price" icon="lock" name="price" onChange={this.inputformvalue} validate />
          <div className="text-center">
            <Button type="submit">AddItem</Button>
            {/* onClick={this.showValue}     */}
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(AddItem);