import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { Container, Form, Button, FormGroup } from 'react-bootstrap'

const ProjectForm = () => {
  const [name, setName] = useState('')
  return (
    <Container>
      <h3>プロジェクト作成</h3>
      <Form>
        <FormGroup>
          <Form.Label for="inputEmail">プロジェクト名</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </FormGroup>
        <br />
        <Button variant="primary" type="submit">
          作成
        </Button>
      </Form>
    </Container>
  )
}

export default ProjectForm
