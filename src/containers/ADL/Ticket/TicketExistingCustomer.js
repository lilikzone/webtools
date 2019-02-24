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
              floatingLabelText="Name"
              fullWidth={true}
            />
            <TextField
              hintText="Address"
              multiLine={true}
              rows={2}
              rowsMax={5}
              fullWidth={true}
            />
            <TextField
              floatingLabelText="Phone Number"
              fullWidth={true}
              hintText="+62"
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
                label="Customer Data"
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
