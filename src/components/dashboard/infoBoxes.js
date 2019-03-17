import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, grey800, red500} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import FontIcon from 'material-ui/FontIcon';
class infoBoxes extends React.Component {

  render() {
    const {
      color,
      title,
      value,
      footerTitle,
      icon,
      smallicon,
    } = this.props;

    const styles = {
      content: {
        padding: '5px 10px',
        marginLeft: 90,
        height: 90,
      },
      number: {
        display: 'block',
        color: '#A5ABAF',
        fontWeight: typography.fontWeightMedium,
        fontSize: 18,
      },
      text: {
        color: '#A5ABAF',
        fontWeight: typography.fontWeightMedium,
        fontSize: 24,
      },
      iconSpan: {
        float: 'left',

        textAlign: 'center',
        backgroundColor: color,
      },
      icon: {
        fontSize: 60,

      },
      smallicon: {
        fontSize: 20,

      },
      footer: {
        marginTop: 15,
      },
    };
    return (
      <Paper zDepth={1} className="card card-stats">
        <div className="card-header" style={styles.iconSpan}>
          <FontIcon className="material-icons" color={white} style={styles.icon}>
            {icon}
          </FontIcon>

        </div>
        <div className="card-content">
          <p className="category" style={styles.text}>{title}</p>
          <h3 className="card-title" style={styles.number} >{value}</h3>
        </div>
        <div className="card-footer" style={styles.footer}>
          <div className="stats">
            <FontIcon className="material-icons" color={red500} style={styles.smallicon}>
              {smallicon}
            </FontIcon>
            {footerTitle}
          </div>
        </div>
      </Paper>
    );
  }
}

infoBoxes.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
  footerTitle: PropTypes.string,
  icon: PropTypes.string,
  smallicon: PropTypes.string,
};

export default infoBoxes;
