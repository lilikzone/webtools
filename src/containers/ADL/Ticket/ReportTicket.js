import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';

const ChooseBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-button--raised"
      onClick={() => {
        console.log(data);
          // const custDataArray = [];
          // custDataArray.push(data);
          // this.setState({
          //   textField: data,
          // });
      }
      }
    >
      Choose</button>
  </div>
  );

const customerColumn = [
    {id: 1, title: 'Id', prop: 'ticket_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Type', prop: 'type', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'Reason', prop: 'reason', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Status', prop: 'ticket_status', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];
export default class TicketNewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      dataCustomer: [],
    };
  }
  render() {
    let _ticketTable = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="msisdn"
          className="mdl-data-table"
          columns={customerColumn}
          dataArray={this.state.dataCustomer}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    let _search = () => {
      return (
        <form>
          <Row>
            <Col xs={12} md={4} lg={4} sm={12}>
              <SelectField
                fullWidth={true}
                required={true}
                floatingLabelText="Category"
                name="Category"
              >
                <MenuItem  value="ticket_id" primaryText="Ticket ID" />
                <MenuItem  value="ticket_type" primaryText="Ticket Type" />
                <MenuItem  value="ticket_status" primaryText="Ticket Status" />

              </SelectField></Col>
            <Col xs={12} md={4} lg={4} sm={12}>
              <TextField
                floatingLabelText="Search"
                //   value={this.state.textField.dobPlace}
                fullWidth={true}
              />
            </Col>
            <Col xs={12} md={4} lg={4} sm={12}>
              <RaisedButton
                label="Search"
                secondary={true}
                style={styles.raisedButton}
              />
            </Col>
          </Row>
        </form>
      );
    };
    return (<Row>
      <Col xs={12} md={12} lg={12} sm={12}>
        <h3>Ticket Reporting</h3>
        <Paper style={styles.paper}>
          {_search()}
          <Row>
            <Col xs={12} sm={12} lg={4} md={4}>
              <RaisedButton
                label="Show All Ticket"
                secondary={true}
                style={styles.raisedButton}
              />
            </Col>
          </Row>
          <div style={{marginTop: 10}}>
            {_ticketTable()}
          </div>
        </Paper>
      </Col>
    </Row>);
  }
}
