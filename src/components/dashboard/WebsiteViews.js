import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {red600, teal300, yellow500, teal700} from 'material-ui/styles/colors';
import {AreaChart, Area, ResponsiveContainer, Tooltip, XAxis} from 'recharts';

import {color} from '../../themes/theme';

const WebsiteViews = (props) => {
  const styles = {
    paper: {
      padding: 10,
      backgroundColor: teal300,
    },
    miniIcon: {
      color: red600,
      marginRight: 10,
    },

  };
  return (
    <Paper className="card" zDepth={1}>
      <div className="card-header" style={styles.paper}>
        <div  style={styles.paper}>
          <ResponsiveContainer minHeight={130}>
            <AreaChart data={props.data}>
              <Area
                type="monotone"
                dataKey="Single"
                stroke={yellow500}
                fill={teal700}
                strokeWidth={3}
                dot={{
                  fill: yellow500,
                }}
              />
              <XAxis dataKey="name" hide={true} />
              <Tooltip wrapperStyle={{width: 100, backgroundColor: '#403F4C', borderRadius: 5}} />
              <Area
                type="monotone"
                dataKey="Unique"
                stroke={yellow500}
                fill={teal700}
                strokeWidth={3}
                dot={{
                  fill: yellow500,
                }}
              />
            </AreaChart>

          </ResponsiveContainer>
        </div>
      </div>
      <div className="card-content">
        <h4 className="title">Website Views</h4>
        <p className="category">

          Monthly Website Views Graphic</p>
      </div>
      <div className="card-footer">
        <div className="stats">
          <i style={styles.miniIcon} className="material-icons">access_time</i>
          updated 44 minutes ago
        </div>
      </div>

    </Paper>
  );
};

WebsiteViews.propTypes = {
  data: PropTypes.array,
};

export default WebsiteViews;
