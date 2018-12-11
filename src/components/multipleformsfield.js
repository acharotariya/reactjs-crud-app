// This file only for getting input checkbox and radio values
import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, FormInline, Input } from 'mdbreact';   


class multiplefield extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radio: '',
      checkbox1: false
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick = (nr) => {
    console.log('nr', nr)
    console.log(this.state.checkbox1)
//     if(this.state.checkbox1 === true) {
//         this.setState({
//             checkbox1: false,
//             radio: ''
//           });
//     }else{
//     this.setState({
//       radio: nr,
//       checkbox1: true
//     });
//    }
  }
  render() {
    return (
      <div>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  <FormInline>
                  <Input
                    onClick={() => this.onClick(1)}
                    checked={this.state.radio === 1 ? true : false}
                    label="male"
                    type="radio"
                    id="radio1"
                  />
                  <Input
                    onClick={() => this.onClick(2)}
                    checked={this.state.radio === 2 ? true : false}
                    label="female"
                    type="radio"
                    id="radio2"
                  />
                  <Input label="Do you have passport?" checked={this.state.checkbox1} type="checkbox" id="checkbox1"  onClick={() => this.onClick(true)}/>
                  </FormInline>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
  }
}

export default multiplefield;
