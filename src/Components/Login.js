import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import "./Login.css"
function Login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <div className='form'>
        <Form className="d-flex">
          <Form.Control
          style={{width:300}}
          type="Text"
            placeholder="Email/Username"
            className="me-1"
            aria-label="Username/Email"
          />
          </Form>
          <Form className="e-flex">
          <Form.Control
          style={{width:300}}
            type="Text"
            placeholder="Password"
            className="me-2"
            aria-label="Password"
          />
        </Form>
        </div>
          <Button variant="primary" style={{marginTop:50}}>Login</Button>
          <Nav.Link href="#action2">forgot password ?</Nav.Link>
    </div>
  )
}

export default Login