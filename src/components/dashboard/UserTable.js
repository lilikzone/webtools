import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {white, blue400} from 'material-ui/styles/colors';

import Data from '../../data';
import Paper from 'material-ui/Paper';
const UserTable = () => {
  const styles = {

    columns: {
      id: {
        width: '0',
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
    header: {
      background: blue400,
      color: white,
    },
  };

  return (
    <div>
      <Paper className="card" zDepth={1}>
        <div  className="card-header" style={styles.header}>User Table</div>
        <div className="card-container">
          <Table>

            <TableBody>
              {Data
                .userTable
                .items
                .map((item) => <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                  <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>

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
