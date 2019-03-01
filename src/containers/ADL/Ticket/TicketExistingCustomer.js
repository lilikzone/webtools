import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import FontIcon from 'material-ui/FontIcon';

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
    {id: 1, title: 'Subscriber Id', prop: 'subs_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Homespassed Id', prop: 'homespassed_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Name', prop: 'customer_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'DOB', prop: 'dob', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Birth Place', prop: 'birth_place', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Gender', prop: 'gender', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 7, title: 'Type ID', prop: 'type_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 8, title: 'ID Number', prop: 'id_number', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 9, title: 'Address', prop: 'id_address', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 10, title: 'Main Phone', prop: 'phone1', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 11, title: 'Main Email', prop: 'email1', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 12, title: 'Sales Name', prop: 'sales_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
];

const productColumn = [
    {id: 1, title: 'Product Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Description', prop: 'description', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'SOC ID', prop: 'soc_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'SOC Label', prop: 'soc_label', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Charging Name', prop: 'charging_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Total Recurring Payment', prop: 'grandtotal', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
];

const billingColumn = [
    {id: 1, title: 'VA', prop: 'va_pay', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'amount', prop: 'amount', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Approval code', prop: 'approval_code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'Trans ID Merchant', prop: 'transid_merchant', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Session ID', prop: 'session_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Payment Date', prop: 'payment_date', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
];

const ticketColumn = [
    {id: 1, title: 'Ticket ID', prop: 'case_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Request Type', prop: 'request_type', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Code', prop: 'code', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'Status', prop: 'transid_merchant', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Description', prop: 'description', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Department', prop: 'departement', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 7, title: 'Priority', prop: 'priority_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 8, title: 'Assignee Role', prop: 'assignee_role', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 9, title: 'Assignee User', prop: 'assignee_user', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 10, title: 'Ticket created date', prop: 'created_at', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 11, title: 'Ticket executed date', prop: 'executed_at', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 12, title: 'Escalated Role', prop: 'escalated_role', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 13, title: 'Escalated User', prop: 'escalated_user', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 14, title: 'Escalated date', prop: 'escalated_date', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 15, title: 'Solved date', prop: 'solved_date', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
];

const style = {
  flatIconButton: {
    backGround: 'rgb(0, 150, 136)',
    color: '#fff',
  },
};

export default class TicketNewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      dataCustomer: [],
      dataProduct: [],
      dataBilling: [],
      dataTicket: [],
    };
  }
  render() {
    let _customerTable = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="subs_id"
          className="mdl-data-table"
          columns={customerColumn}
          dataArray={this.state.dataCustomer}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'subs_id', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    let _customerProduct = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="name"
          className="mdl-data-table"
          columns={productColumn}
          dataArray={this.state.dataProduct}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'name', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    let _customerBilling = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="va_pay"
          className="mdl-data-table"
          columns={billingColumn}
          dataArray={this.state.dataBilling}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'va_pay', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    let _customerTicket = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="case_id"
          className="mdl-data-table"
          columns={ticketColumn}
          dataArray={this.state.dataTicket}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'case_id', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    return (<Row>
      <Col xs={12} md={12} lg={12} sm={12}>
        <h3>Existing Customer</h3>
        <Paper style={styles.paper}>
          <div style={{marginTop: 10}}>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="Customer Data"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {_customerTable()}
              </Tab>
              <Tab
                value={1}
                label="Product Data"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {_customerProduct()
                }</Tab>
              <Tab
                value={2}
                label="Billing History"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {_customerBilling()}
              </Tab>
              <Tab
                value={3}
                label="Ticket History"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {_customerTicket()}
              </Tab>
            </Tabs>
          </div>
          <Row>
            <Col xs={12} md={6} sm={6} lg={6}>
              <RaisedButton
                label="Create Ticket"
                secondary={true}
                style={styles.raisedButton}
              />
            </Col>
            <Col xs={12} md={6} sm={6} lg={6}>
              <RaisedButton
                label="Blast Email"
                secondary={true}
                icon={<FontIcon className="material-icons" > email </FontIcon>}
                style={styles.raisedButton}
              />
            </Col>
          </Row>
        </Paper>
      </Col>
    </Row>);
  }
}
