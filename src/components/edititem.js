import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
import { withRouter } from 'react-router'

// import axios from 'axios';
// import Notifications, { notify } from 'react-notify-toast';

class edititem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: '',
      price: ''
    }
    // this.onSubmit = this.handleAddItemSubmit.bind(this);
    // this.inputformvalue = this.inputformvalue.bind(this);
    // // this.showValue = this.showValue.bind(this);
  }
  componentDidMount = () =>{
   console.log('======',this.props.location.state.item)
   this.setState({fruit: this.props.location.state.item.fruit, price: this.props.location.state.item.price })
//    let fruit= this.props.location.state.item.fruit
//    let price = this.props.location.state.item.price
  }
  handleEditItemSubmit= (event) => {
    event.preventDefault();
    console.log(">>>>>>", event.target.fruit.value)
    console.log(">>>>>>", event.target.price.value)
    const obid = this.props.location.state.item._id
    console.log('obid', obid)
    fetch(`/edititem/${obid}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fruit: event.target.fruit.value,
        price: event.target.price.value
      }),
    }).then((response) => {
        console.log("response >>>>>>>>>>", response)
      if (response) {
        
        this.props.history.push({
            pathname: '/viewrecord'
          })
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
        <form onSubmit={this.handleEditItemSubmit}>
          <p className="h5 text-center mb-4"><h4>EditItem</h4></p>
          <Input label="enter fruit name" icon="envelope" name="fruit" value={this.state.fruit} onchange={this.inputformvalue} validate error="wrong" success="right" />
          <Input label="enter fruit price" icon="lock" name="price" value={this.state.price} onchange={this.inputformvalue}validate />
          <div className="text-center">
            <Button type="submit">Update</Button>
          </div>
        </form>
        
      </div>
    );
  }
}
export default withRouter(edititem);