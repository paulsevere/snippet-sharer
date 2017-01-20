import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

export const SnippetsTable = (props) => (
  <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
                <TableHeaderColumn style={{
    width: "150px"
  }}>Title</TableHeaderColumn>
                <TableHeaderColumn>Text</TableHeaderColumn>
                  <TableHeaderColumn style={{
    width: "100px"
  }}></TableHeaderColumn>

            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={true}>
            {props.children}
        </TableBody>
    </Table>
);
