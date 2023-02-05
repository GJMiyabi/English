import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button, FormGroup } from 'react-bootstrap'

type User = {
  uuid: string
  username: string
  email: string
}

const UserMakeForm = () => {
  const sendUrl = `http://localhost:8080/api/users`

  const [values, setValues] = useState({
    email: ``,
    password: ``,
    username: ``,
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    username: ``,
  })

  const validate = (values, name) => {
    switch (name) {
      case 'name':
        nameValidation(values.name)
        break
      case 'email':
        emailValidation(values.email)
        break
      case 'password':
        emailValidation(values.password)
        break
    }
  }

  const handleChange: (name) => (event) => void = (name) => (event) => {
    const newValues = {
      ...values,
      [name]: event.target.value,
    }
    setValues(newValues)
    validate(newValues, name)
  }

  const nameValidation = (value: string): void => {
    if (value.length === 0) {
      setErrors({ ...errors, name: '名前は1文字以上' })
    } else {
      setErrors({ ...errors, name: '' })
    }
  }

  const emailValidation = (value: string): void => {
    if (value.length === 0) {
      setErrors({ ...errors, email: 'Emailは1文字以上' })
    } else {
      setErrors({ ...errors, email: '' })
    }
  }

  const handleSubmit = () => {
    axios
      .post(sendUrl, {
        headers: {
          'Content-type': 'Application/json',
          Accept: 'Application/json',
        },
        values,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container>
      <Form>
        <FormGroup>
          <Form.Label>メールアドレス</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="ログインに使用するIDとなるメールアドレス"
            onChange={handleChange(`email`)}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>ユーザーネーム</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="ユーザーネーム"
            onChange={handleChange(`username`)}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>パスワード</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="パスワード（4文字以上）"
            onChange={handleChange(`password`)}
          />
        </FormGroup>

        <br />
        <Button variant="primary" onClick={handleSubmit} value="Submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default UserMakeForm
