import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container, Form, Button, FormGroup } from 'react-bootstrap'

const VariableForm = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Form.Label for="inputName">変数/定数の入力</Form.Label>
          <Form.Control type="name" placeholder="変数/定数の名称を入力" />
        </FormGroup>
        <FormGroup>
          <Form.Label for="inputType">データの形式</Form.Label>
          <Form.Select>
            <option>String</option>
            <option>Number</option>
            <option>Boolean</option>
            <option>Array</option>
            <option>Any</option>
            <option>Null</option>
            <option>JSON</option>
          </Form.Select>
        </FormGroup>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default VariableForm
