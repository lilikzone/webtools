import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {blue400} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {color} from '../../themes/theme';

const CompletedTasks = (props) => {
  const styles = {
    paper: {
      backgroundColor: blue400,
      padding: 10,
    },
    miniIcon: {
      color: blue400,
      marginRight: 10,
    },
  };
  return (
    <Paper className="card" zDepth={1}>
      <div className="card-header" style={styles.paper}>
        <div  style={styles.paper}>
          <ResponsiveContainer minHeight={130}>

            <LineChart data={props.data}>
              <Line
                type="monotone"
                dataKey="Food"
                stroke={color.purple}
                strokeWidth={3}
                dot={{
                  fill: color.purple,
                }}
              />
              <XAxis dataKey="name" hide={true} />
              <Tooltip
                wrapperStyle={{
                  width: 120,
                  backgroundColor: '#403F4C',
                  borderRadius: 5,
                }}
              />
              <Line
                type="monotone"
                dataKey="Electronics"
                stroke={color.green}
                strokeWidth={3}
                dot={{
                  fill: color.green,

                }}
              />
              <Line
                type="monotone"
                dataKey="Clothes"
                stroke={color.red}
                strokeWidth={3}
                dot={{
                  fill: color.red,
                }}

              />


            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card-content">
        <h4 className="title">Completed Tasks</h4>
        <p className="category">

          Daily Completed Tasks Graphic</p>
      </div>
      <div className="card-footer">
        <div className="stats">
          <i style={styles.miniIcon} className="material-icons">access_time</i>
          updated 4 minutes ago
        </div>
      </div>
    </Paper>
  );
};

CompletedTasks.propTypes = {
  data: PropTypes.array,
};

export default CompletedTasks;
