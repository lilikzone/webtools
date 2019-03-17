import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, teal300} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';

class InfoBox extends React.Component {

  render() {
    const {
      color,
      title,
      value,
      icon,

    } = this.props;


    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 90,
      },
      number: {
        display: 'block',
        fontWeight: typography.fontWeightMedium,
        fontSize: '1.8em',
        color: teal300,
        paddingTop: 10,
      },
      text: {
        fontSize: 16,
        fontWeight: typography.fontWeightLight,
        color: '#A5ABAF',

      },
      iconSpan: {
        float: 'left',
        height: 100,
        width: 90,

        textAlign: 'center',
        backgroundColor: teal300,
      },
      icon: {
        fontSize: 60,
        marginTop: 20,
        maxWidth: '100%',

      },
    };

    return (
      <Paper>
        <span style={styles.iconSpan}>
          <FontIcon className="material-icons" color={white} style={styles.icon}>
            {icon}
          </FontIcon>

        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}>{value}</span>
        </div>
      </Paper>
    );
  }
}

InfoBox.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
};

export default muiThemeable()(InfoBox);
