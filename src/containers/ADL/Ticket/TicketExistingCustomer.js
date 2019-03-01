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
    {id: 1, title: 'Msisdn', prop: 'msisdn', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Category', prop: 'category', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Reason', prop: 'reason', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
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
