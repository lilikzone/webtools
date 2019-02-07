import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Data from '../../data';
import Paper from 'material-ui/Paper';
const UserTable = () => {
  const styles = {

    columns: {
      id: {
        width: '10%',
      },
      name: {
        width: '40%',
      },
      price: {
        width: '20%',
      },
      category: {
        width: '20%',
      },
      edit: {
        width: '10%',
      },
    },
  };

  return (
    <div>
      <Paper className="card" zDepth={4}>
        <div className="card-header" data-background-color="red">User Table</div>
        <div className="card-container">
          <Table>

            <TableBody>
              {Data
              .userTable
              .items
              .map((item) => <TableRow key={item.id}>
                <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
                <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>

              </TableRow>)}
            </TableBody>
          </Table>
        </div>

      </Paper>
    </div>
  );
};

export default UserTable;
