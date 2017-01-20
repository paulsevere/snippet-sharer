import React from 'react';
import { TableRow, TableRowColumn as Col } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton'

export const SnippetItem = (props) => {
  let {text, title} = props.snippet
  return (
    <TableRow>
        <Col style={{
      width: "150px"
    }}>{title}</Col>
        <Col>{text}</Col>
        <Col style={{
      width: "100px"
    }}>
          <FlatButton primary={true} label="more"/>
          </Col>
  </TableRow>
  )
}
