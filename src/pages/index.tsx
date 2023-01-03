import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from '../components/organisms/Navbar'

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Welcome</h1>
      </Container>
    </>
  )
}
