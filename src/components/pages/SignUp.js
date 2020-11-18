import React from 'react';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SignUp() {
  return <>
  <div className='sign-up'>
  <h1 >LIKE & SUBSCRIBE</h1>
  <Form className="form-submit">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label><br/>
    <Form.Control type="email" placeholder="Enter email" /><br/>
    <br/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <br/>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
  </>
}