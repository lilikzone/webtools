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
          <span style={styles.span}>© 2019 iBase XL-Home All Right Reserved. Created by Axiata Digital labs</span>
        </Col>

      </Row>

    </div>
  );
};

export default Footer;
