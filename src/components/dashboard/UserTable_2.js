import React from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import Data from '../../data';
import Trend from 'react-trend';
import Avatar from 'material-ui/Avatar';
import AppBare from '../../components/appBar';
import {teal300, blue400} from 'material-ui/styles/colors';

const UserTables_2 = () => {
  const styles = {

    columns: {
      pic: {
        width: '35%',
        paddingTop: 10,
      },
      name: {
        width: '20%',
      },
      price: {
        width: '20%',
      },
      category: {
        width: '20%',
      },
      edit: {
        width: '5%',
      },
      table: {
        paddingTop: 10,
      },
    },
  };

  return (
    <div>


      <Table>

        <TableBody>
          {Data
                .userTable_2
                .items
                .map((item) => <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.pic}><Avatar src={item.pic} /></TableRowColumn>
                  <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                  <TableRowColumn style={styles.columns.price}>{item.price}</TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>
                    <Trend
                      height={50}
                      smooth={true}
                      autoDraw={true}
                      autoDrawDuration={3000}
                      autoDrawEasing="ease-out"
                      data={item.data}
                      gradient={[blue400, teal300]}
                      radius={1}
                      strokeWidth={5}
                      strokeLinecap={'butt'}
                    />
                  </TableRowColumn>

                </TableRow>)}
        </TableBody>
      </Table>

    </div>
  );
};

export default UserTables_2;
