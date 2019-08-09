import React from 'react';
import {Navbar, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

import SearchForm from './search-form';

export default function PageHeader (props) {
  const visStyle = props.hidden? {visibility: 'hidden'} : {visibility: 'visible'} 
  const topper = props.hidden?  '' : 'top';

  return (
    <header style={visStyle}>
      <Navbar fixed={topper} bg="danger">
        <div className="d-inline-flex flex-row justify-content-center">
          <div id='header-logo'><Link to="/">logo here</Link></div>
          <h1>GameHaus Catalog</h1>
          <SearchForm />
        </div>
      </Navbar>
    </header>
  )
}