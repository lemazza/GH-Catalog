import React from 'react';
import {Navbar, Form, Button} from 'react-bootstrap'

export default function PageHeader (props) {
  return (
    <header>
      <Navbar bg="danger">
        <div id='header-logo'>logo here</div>
        <h1>GameHaus Game Catalog</h1>
        <Form inline >
          <Form.Group  controlId="gameSearch">
            <Form.Label  >Search Games:</Form.Label>
            <Form.Control   type="search" placeholder="Checkers"/>
          </Form.Group>
          <Button variant="dark" type="submit">
            Search
          </Button>
        </Form>
      </Navbar>
    </header>
  )
}