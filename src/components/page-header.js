import React from 'react';
import {Navbar, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default function PageHeader (props) {
  const visStyle = props.hidden? {visibility: 'hidden'} : {visibility: 'visible'} 
  const topper = props.hidden?  '' : 'top';

  return (
    <header style={visStyle}>
      <Navbar fixed={topper} bg="danger">
        <div className="d-inline-flex flex-row justify-content-end">
          <div id='header-logo'><Link to="/">logo here</Link></div>
          <h1>GameHaus Catalog</h1>
          <Form inline >
            <Form.Group  controlId="gameSearch">
              <Form.Label  >Search Games:</Form.Label>
              <Form.Control   type="search" placeholder="Checkers"/>
            </Form.Group>
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </Navbar>
    </header>
  )
}