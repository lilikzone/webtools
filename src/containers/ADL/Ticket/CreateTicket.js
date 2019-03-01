import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {MaterialContainer} from 'react-table-components';

const introSearch = [
  {id: 1, title: 'id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 2, title: 'Subscriber ID', prop: 'subs_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 3, title: 'Customer Name', prop: 'customer_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 4, title: 'ID Address', prop: 'id_address', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 5, title: 'DOB', prop: 'dob', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 6, title: 'ID Type', prop: 'type_id', width: '5%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 7, title: 'ID Number', prop: 'id_number', width: '5%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];

export default class CreateTicket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIntroSearch: [],
    };
  }
  render() {
    return (
      <Row>
        <Col md={12} lg={12} sm={12} xs={12}>
          <Paper style={styles.paper}>
            <h3>Create Ticket</h3>
            <Col md={8} lg={8} sm={12} xs={12}>
              <TextField
                floatingLabelText="Name"
                fullWidth={true}
              />
              <TextField
                hintText="Address"
                floatingLabelText="Full Address"
                multiLine={true}
                rows={2}
                rowsMax={5}
                fullWidth={true}
              />
              <RaisedButton
                label="Search"
                secondary={true}
                style={styles.raisedButton}
                onTouchTap={() => this._handleTouchTap()}
              />
              <MaterialContainer
                keys="id"
                className="mdl-data-table"
                columns={introSearch}
                dataArray={this.state.dataIntroSearch}
                draggable={false}
                sortable={false}
                sortBy={{prop: 'id', order: 'asc'}}
                pageSizeOptions={[5]}
              />
              <Link to={'/admin/ticketExistingCustomer'}>
                <RaisedButton
                  label="Check Existing Customer"
                  secondary={true}
                  style={styles.raisedButton}
                  onTouchTap={() => this._handleTouchTap()}
                />
              </Link>
              <Link to={'/admin/ticketNewCustomer'}>
                <RaisedButton
                  label="Create New Customer"
                  secondary={true}
                  style={styles.raisedButton}
                />
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
