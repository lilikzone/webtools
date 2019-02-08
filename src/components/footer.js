import React, {PropTypes} from 'react';
import {Row, Col} from 'react-flexbox-grid';

const styles = {
  span: {
    fontWeight: 500,
    fontSize: '1.2em',
  },
};
const Footer = (props) => {
  return (
    <div>

      <Row center="xs">
        <Col xs={true}>
          <span style={styles.span}>© 2017 Mare Admin All Right Reserved. Created by Yellow Red Team</span>
        </Col>

      </Row>

    </div>
  );
};

export default Footer;
