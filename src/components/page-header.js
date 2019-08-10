import React from 'react';
import {Navbar, Form, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import logo from '../images/avatar02.jpg'
import SearchForm from './search-form';

import './page-header.css';

export default function PageHeader (props) {
  const visStyle = props.hidden? {visibility: 'hidden'} : {visibility: 'visible'} 
  const topper = props.hidden?  '' : 'top';

  return (
    <header style={visStyle}>
      <Navbar fixed={topper} bg="danger" className="d-inline-flex flex-row justify-content-left">
        <Navbar.Brand id="header-logo" className="align-self-end">
          <Link to="/"><Image src={logo} alt="GameHaus Logo" fluid/></Link>
        </Navbar.Brand>
        <Navbar.Brand className="flex-grow-1"><h1>GameHaus Cafe</h1></Navbar.Brand>

        <SearchForm className="ml-auto" />   
      </Navbar>
    </header>
  )
}