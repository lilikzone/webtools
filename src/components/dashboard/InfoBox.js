import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

class InfoBox extends React.Component {

  render() {
    const {color, title, value, Icon, NumberColor} = this.props;

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
        paddingTop: 8,
        color: color,
        opacity: 1,
      },
      text: {
        color: '#A5ABAF',
        fontWeight: typography.fontWeightMedium,
        fontSize: 24,
      },
      iconSpan: {
        float: 'left',
        height: 100,
        width: 90,
        textAlign: 'center',
        backgroundColor: color,
      },
      icon: {
        height: 48,
        width: 48,
        marginTop: 25,
        maxWidth: '100%',
        opacity: 1,

      },
    };

    return (
      <Paper zDepth={1} >
        <span style={styles.iconSpan}>
          <Icon
            color={white}
            style={styles.icon}
          />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}><h3>{value}</h3></span>
        </div>
      </Paper>
    );
  }
}

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
};

export default InfoBox;
