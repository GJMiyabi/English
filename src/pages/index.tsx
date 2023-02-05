import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container } from 'react-bootstrap'
import ListGroups from '../components/organisms/ListGroup'
import NavBar from '../components/organisms/Navbar'

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Welcome</h1>
        <ListGroups />
      </Container>
    </>
  )
}
