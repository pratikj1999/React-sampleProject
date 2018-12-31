import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="info  ">
        <div className="container">
        <NavbarBrand href="/">React Nav Bar</NavbarBrand>
        </div>
        </Navbar>
        <Menu/>
      </div>
    );
  }
}

export default App;
