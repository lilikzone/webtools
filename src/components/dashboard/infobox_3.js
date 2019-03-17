import React, {PropTypes} from 'react';
import {typography} from 'material-ui/styles';
import FontIcon from 'material-ui/FontIcon';
import {Row, Col} from 'react-flexbox-grid';

class InfoBox extends React.Component {

  render() {
    const {
      color,
      title,
      value,
      icon,
      increase,
    } = this.props;

    const styles = {
      content: {
        padding: 18,

        width: '100%',
      },

      number: {
        fontWeight: typography.fontWeightMedium,
        color: color,
        fontSize: '1.8em',
      },

      ico: {

        fontWeight: typography.fontWeightMedium,
        fontSize: 32,
        textAlign: 'right',
        borderLeft: '1px solid #ccc',
      },
      iconSpan: {
        color,
      },
      title: {
        width: '100%',
        textAlign: 'center',
        height: 30,
        borderBottom: 'solid 1px #ddd',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#A5ABAF',
        fontWeight: typography.fontWeightMedium,
        fontSize: 24,
      },
    };

    return (
      <div>
        <div style={styles.title}>{title}</div>
        <Row style={styles.content}>
          <Col xs={6} md={6} lg={6}>
            <div style={styles.number}>
              {value}</div>

          </Col>
          <Col xs={6} md={6} lg={6}>
            <div style={styles.ico}>
              <FontIcon className="material-icons" color={color}>
                {icon}
              </FontIcon>
              <span style={styles.iconSpan}>{increase}</span>
            </div>
          </Col>

        </Row>

      </div>
    );
  }
}

InfoBox.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
  increase: PropTypes.object,
};

export default InfoBox;
