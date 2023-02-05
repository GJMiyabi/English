import React from 'react'
import Table from 'react-bootstrap/Table'

type ProjectItems = {
  atomsItem: number | string | null
  moleculesItem: number | string | null
}

const ProjectTableItem = (props: ProjectItems) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>プロパティ</th>
          <th>データ</th>
          <th>テスト</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="center">Variables/Constant</td>
          <td align="center">0</td>
          <td align="center">0</td>
        </tr>
        <tr>
          <td align="center">Atoms</td>
          <td align="center">{props.atomsItem}0</td>
          <td align="center">0</td>
        </tr>
        <tr>
          <td align="center">Molecules</td>
          <td align="center">0</td>
          <td align="center">0</td>
        </tr>
        <tr>
          <td align="center">Organisims</td>
          <td align="center">0</td>
          <td align="center">0</td>
        </tr>
        <tr>
          <td align="center">Template</td>
          <td align="center">0</td>
          <td align="center">0</td>
        </tr>
        <tr>
          <td align="center">Pages</td>
          <td align="center">0</td>
          <td align="center">0</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ProjectTableItem
