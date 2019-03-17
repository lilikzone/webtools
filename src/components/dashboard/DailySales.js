import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, teal300, yellow500, cyan200, cyan100} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';


const DailySales = (props) => {
  const styles = {
    paper: {
      backgroundColor: teal300,
      padding: 10,
    },
    miniIcon: {
      color: teal300,
      marginRight: 10,
    },
  };
  return (
    <Paper className="card" zDepth={1}>
      <div className="card-header" style={styles.paper}>
        <div  style={styles.paper}>
          <ResponsiveContainer minHeight={130}>
            <BarChart data={props.data} >
              <Bar dataKey="uv" fill={yellow500} />
              <XAxis dataKey="name" stroke="none" tick={{fill: white}} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card-content">
        <h4 className="title">Daily Sales</h4>
        <p className="category">

          Daily Sales Graphic</p>
      </div>
      <div className="card-footer">
        <div className="stats">
          <i style={styles.miniIcon} className="material-icons">access_time</i>
          updated 16 minutes ago
        </div>
      </div>
    </Paper>
  );
};

DailySales.propTypes = {
  data: PropTypes.array,
};

export default DailySales;
