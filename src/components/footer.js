import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="blue" dark expand="md" scrolling fixed="bottom">
                    <NavbarBrand href="/">
                        {/* <strong>Navbar</strong> */}
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        {/* <NavbarNav left>
                          <NavItem active>
                              <NavLink to="#">Home</NavLink>
                          </NavItem>
                          </NavbarNav>
                          <NavbarNav right>
                          <NavItem>
                              <NavLink to="#">login</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">register</NavLink>
                          </NavItem>                        */}
                        {/* </NavbarNav> */}
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
 export default Footer;