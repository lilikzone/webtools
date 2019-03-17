import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {typography} from 'material-ui/styles';

const NewOrders = (props) => {
  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 420,
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px',
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    },
  };

  return (
    <Paper style={styles.paper} zDepth={4}>
      <div style={{...styles.header}}>New Orders</div>
      <div style={styles.div}>
        <ResponsiveContainer minHeight={360}>
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  data: PropTypes.array,
};

export default NewOrders;
