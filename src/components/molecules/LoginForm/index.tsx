import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container, Form, Button, FormGroup } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Form.Label for="inputEmail">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
          <Form.Label for="inputPassword">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Form.Check type="checkbox" label="Check me out" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default LoginForm
