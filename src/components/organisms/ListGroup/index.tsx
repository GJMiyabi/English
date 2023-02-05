import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css'

type MenuItem = { title: string; URL: string }

const ListGroups = () => {
  const Menus: MenuItem[] = [{ title: 'プロジェクト', URL: '/' }]

  if (Menus.length == 0) return null

  return (
    <ListGroup>
      {Menus.map((items: MenuItem) => {
        return <ListGroup.Item key={items.URL}>{items.title}</ListGroup.Item>
      })}
    </ListGroup>
  )
}

export default ListGroups
