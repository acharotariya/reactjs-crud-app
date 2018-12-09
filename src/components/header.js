import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends Component {
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

    onClick() {
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
                <Navbar color="blue" dark expand="md" scrolling>
                    <NavbarBrand href="#">
                        <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" alt="img" height="30" className="d-inline-block align-top" />
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem active>
                                <NavLink to="#">Home</NavLink>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav middle="true">
                            <NavItem>
                                <NavLink to="#">Reactjs-express-mongodb crud-app</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink to="#">register</NavLink>
                            </NavItem> */}
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
export default Header;