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
    {id: 1, title: 'Msisdn', prop: 'msisdn', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Category', prop: 'category', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Reason', prop: 'reason', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
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
    let _customerTable = () => {
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
    let _customerProduct = () => {
      return (<div>table product</div>);
    };
    let _customerBilling = () => {
      return (<div>table billing</div>);
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
                <MenuItem  value="subs_id" primaryText="Subscriber ID" />
                <MenuItem  value="name" primaryText="Name" />
                <MenuItem  value="id_address" primaryText="Address" />
                <MenuItem  value="email" primaryText="Email" />
                <MenuItem  value="cluster" primaryText="Cluster" />
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
        <h3>New Customer</h3>
        <Paper style={styles.paper}>
          {_search()}
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
            </Tabs>
          </div>
        </Paper>
      </Col>
    </Row>);
  }
}
