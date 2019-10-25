import React from 'react';
import {Navbar, Form, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import logo from '../images/avatar02.jpg'
import SearchForm from './search-form';

import './page-header.css';

//GämëHäüs Cätälög

export default function PageHeader (props) {
  const visStyle = props.hidden? {visibility: 'hidden'} : {visibility: 'visible'} 
  const topper = props.hidden?  '' : 'top';

  return (
    <header style={visStyle}>
      <Navbar expand="lg" fixed={topper} bg="danger" className="d-inline-flex flex-row justify-content-left">
        <Navbar.Brand id="header-logo">
          <Link to="/home"><Image src={logo} alt="GameHaus Logo" fluid/></Link>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Brand className="flex-grow-1 gh-title-font text-dark"><h1>GAMEHAUS CATALOG</h1></Navbar.Brand>
        </Navbar.Collapse>
        <SearchForm className="ml-auto" />   
      </Navbar>
    </header>
  )
}