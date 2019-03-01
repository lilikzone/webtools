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
import {Subheader, DatePicker} from 'material-ui';

const futureLeadsColumn = [
  {id: 1, title: 'Msisdn', prop: 'msisdn', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 2, title: 'Category', prop: 'category', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 3, title: 'Reason', prop: 'reason', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];

const style = {
  title: {
    textAlign: 'center',
  },
};

export default class TicketExistingCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      dataFutureLeads: [],
      dataInquiry: [],
    };
  }
  render() {
    let _createLeads = () => {
      return (<div>
        <Col xs={12} md={6} lg={6} sm={12}>
          <form>
            <SelectField
              fullWidth={true}
              required={true}
              floatingLabelText="Type"
              name="type"
            >
              <MenuItem value="future_leads" primaryText="Future Leads" />
              <MenuItem value="inquiry" primaryText="Inquiry" />
            </SelectField>
            <TextField
              required={true}
              floatingLabelFixed={true}
              value={this.state.dataTemp.customer_name}
              floatingLabelText="Customer Name"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, customer_name: input},
                });
              }}
            />
            <DatePicker
              value={new Date(this.state.dataTemp.dob)}
              floatingLabelFixed={true}
              floatingLabelText="Date of Birth"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, dob: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.birth_place}
              floatingLabelText="DOB Place"
              floatingLabelFixed={true}
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, birth_place: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.type_id}
              floatingLabelFixed={true}
              floatingLabelText="Type ID"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, type_id: input},
                });
              }}
              disabled={true}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.id_number}
              floatingLabelFixed={true}
              floatingLabelText="ID Number"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, id_number: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.id_address}
              floatingLabelFixed={true}
              floatingLabelText="ID Address"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, id_address: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.phone1}
              floatingLabelFixed={true}
              floatingLabelText="Primary Phone"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, phone1: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.phone2}
              floatingLabelFixed={true}
              floatingLabelText="Alternative Phone 1"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, phone2: input},
                });
              }}
            />

            <TextField
              required={true}
              value={this.state.dataTemp.phone3}
              floatingLabelFixed={true}
              floatingLabelText="Alternative Phone 2"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, phone3: input},
                });
              }}
            />

            <TextField
              fullWidth={true}
              required={true}
              value={this.state.dataTemp.email1}
              floatingLabelFixed={true}
              floatingLabelText="Email"
              // errorText={!this.state.isEmailValid1}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, email1: input},
                });
              }}
            />

            <TextField
              fullWidth={true}
              required={true}
              value={this.state.dataTemp.email2}
              floatingLabelFixed={true}
              floatingLabelText="Alternative Email"
            // errorText={!this.state.isEmailValid2}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, email2: input},
                });
              }}
            />
            <TextField
              fullWidth={true}
              required={true}
              value={this.state.dataTemp.sales_name}
              floatingLabelFixed={true}
              floatingLabelText="Helpdesk Name"
            // errorText={!this.state.isEmailValid2}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, sales_name: input},
                });
              }}
            />
            <RaisedButton
              label="Submit Data"
              secondary={true}
              style={styles.raisedButton}
            />
          </form>
        </Col>
      </div>);
    };
    let _leadsInquiryTable = () => {
      return (<div className="mdl-layout">
        <h3 style={style.title}>Leads Table</h3>
        <MaterialContainer
          keys="msisdn"
          className="mdl-data-table"
          columns={futureLeadsColumn}
          dataArray={this.state.dataFutureLeads}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          pageSizeOptions={[5]}
        />
        <h3 style={style.title}>Inquiry Table</h3>
        <MaterialContainer
          keys="msisdn"
          className="mdl-data-table"
          columns={futureLeadsColumn}
          dataArray={this.state.dataInquiry}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          <h3>New Customer</h3>
          <Paper style={styles.paper}>
            <Tabs value={this.state.currentTab} >
              <Tab
                value={0}
                label="Leads Data"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_createLeads()}</Tab>
              <Tab
                value={1}
                label="Manage Leads"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_leadsInquiryTable()}</Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    );
  }
}
