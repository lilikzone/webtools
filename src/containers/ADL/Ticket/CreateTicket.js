import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import {Link} from 'react-router';

export default class CreateTicket extends React.Component {
  render() {
    return (
      <Row>
        <Col md={12} lg={12} sm={12} xs={12}>
          <Paper style={styles.paper}>
            <h3>Create Ticket</h3>
            <Col md={8} lg={8} sm={12} xs={12}>
              <Link to={'/admin/ticketExistingCustomer'}>
                <div className="custom-large-button" >Existing Customer</div>
              </Link>
              <Link to={'/admin/ticketNewCustomer'}>
                <div className="custom-large-button" >New Customer</div>
              </Link>
              <Link to={'/admin/ticketSpamReport'}>
                <div className="custom-large-button" >Spam Report</div>
              </Link>
            </Col>
          </Paper>
        </Col>
      </Row>
    );
  }
}
