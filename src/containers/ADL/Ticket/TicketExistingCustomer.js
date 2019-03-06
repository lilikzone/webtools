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
import MaterialContainerCustom from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';

const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/';


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
      allCustomer: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      selectedCustomer: [],
      textField: [],
      dataProduct: [],
      dataBilling: [],
      dataTicket: [],
      cookies: '',
      loaded: false,
      selected: false,
      selectedId: '',
      openModal: false,
    };

    const ChooseBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() => {
            console.log(data);
              // const custDataArray = [];
              // custDataArray.push(data);
            this.setState({
              selectedCustomer: data,
              selected: true,
            });
          }
          }
        >
          Choose</button>
      </div>
      );

    this.customerColumn = [
      {
        id: 1,
        title: 'id',
        prop: 'id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Subscriber ID',
        prop: 'subs_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'DOB',
        prop: 'dob',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Homepassed ID',
        prop: 'homepassed_id',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'DOB Place',
        prop: 'birth_place',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Gender',
        prop: 'gender',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Group',
        prop: 'group',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'ID Type',
        prop: 'type_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'ID Number',
        prop: 'id_number',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'ID Address',
        prop: 'id_address',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Primary Phone',
        prop: 'phone1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Alternative Phone 1',
        prop: 'phone2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Alternative Phone 2',
        prop: 'phone3',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Email',
        prop: 'email1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Alternative Email',
        prop: 'email2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
        // {
        //   id: 17,
        //   title: 'Sales Name',
        //   prop: 'sales_name',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 18,
        //   title: 'Balance',
        //   prop: 'balance',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 19,
        //   title: 'Created At',
        //   prop: 'created_at',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 20,
        //   title: 'updated At',
        //   prop: 'updated_at',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
      {
        id: 21,
        title: 'Action',
        render: ChooseBtn,
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];

    this.customerSelectedColumn = [
      {
        id: 1,
        title: 'id',
        prop: 'id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Subscriber ID',
        prop: 'subs_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'DOB',
        prop: 'dob',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Homepassed ID',
        prop: 'homepassed_id',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'DOB Place',
        prop: 'birth_place',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Gender',
        prop: 'gender',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Group',
        prop: 'group',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'ID Type',
        prop: 'type_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'ID Number',
        prop: 'id_number',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'ID Address',
        prop: 'id_address',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Primary Phone',
        prop: 'phone1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Alternative Phone 1',
        prop: 'phone2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Alternative Phone 2',
        prop: 'phone3',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Email',
        prop: 'email1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Alternative Email',
        prop: 'email2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
        // {
        //   id: 17,
        //   title: 'Sales Name',
        //   prop: 'sales_name',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 18,
        //   title: 'Balance',
        //   prop: 'balance',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 19,
        //   title: 'Created At',
        //   prop: 'created_at',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 20,
        //   title: 'updated At',
        //   prop: 'updated_at',
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        //   cellClass: 'mdl-data-table__cell--non-numeric',
        // },
        // {
        //   id: 21,
        //   title: 'Action',
        //   render: ChooseBtn,
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        // },
    ];
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
    }
  }

  componentDidMount() {
    this._getAPI(`${HOSTNAME}customer/all?page=${this.state.allCustomer.current_page}`, 'textField');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allCustomer.current_page != this.state.allCustomer.current_page) {
      this.setState({
        loaded: false,
      });
      this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
    }
  }

  _getAPI(apiUrl, stateName) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          allCustomer: responseJson,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getAPI(apiUrl, stateName) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          allCustomer: responseJson,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getUpdate(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('result_Search', responseJson);
        if (responseJson.result.data.length > 0) {
          this.setState({
            allCustomer: {
              data: responseJson.result.data,
              current_page: responseJson.result.current_page,
              total: responseJson.result.total,
            },
          });
        }
        this.setState({
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handleUpdateKeyword= () => {
    this.setState({
      loaded: false,
    });
    this._getUpdate(`${HOSTNAME}customer/search?keyword=${this.state.keyword}`);
  }

  _changeCustomer= () => {
    this.setState({selected: false});
  }

  handleClose = () => {
    this.setState({openModal: false});
  }

  _handleValidationPriority(input, index, data) {
    let dataInput = data.toLowerCase();

    this.setState({
      textField: {...this.state.textField, priority: dataInput},
    });
  }


  render() {
    let _renderLoading = () => {
      return (

        <div style={{minWidth: 700}}>
          <div
            style={{margin: '0 auto',
              marginTop: 20,
              width: '20%',
              textAlign: 'center'}}
          >
            <CircularProgress />
          </div>
        </div>
      );
    };
    let _renderTable = (selected) => {
      if (selected === false) {
        return (
          <div>
            <Col xs={12} sm={4} lg={4}>
              <Row>
                <Col xs={12} md={6} lg={4} sm={12}>
                  <TextField
                    floatingLabelFixed={true}
                    floatingLabelText="Subscription ID"
                    type="number"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        keyword: input,
                      });
                    }}
                  />
                </Col>
                <Col xs={12} md={6} lg={4} sm={12}>
                  <RaisedButton
                    label="SEARCH"
                    secondary={true}
                    style={styles.raisedButton}
                    onTouchTap={this._handleUpdateKeyword}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <MaterialContainerCustom
                    keys="name"
                    className="mdl-data-table"
                    columns={this.customerColumn}
                    onChangePage={((page) => this.setState({
                      allCustomer: {...this.state.allCustomer, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.allCustomer.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.allCustomer.current_page - 1}
                    total={this.state.allCustomer.total}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[10]}
                  />
                </div>
              </div>
            </Col>
          </div>
        );
      }
    };
    let _renderSelectedCustomerTable = (selected) => {
      if (selected) {
        return (
          <Row>
            <Col xs={12} md={12} lg={12}>

              <RaisedButton
                secondary={true}
                label={'Change Customer'}
                onTouchTap={this._changeCustomer}
              />
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={this.customerSelectedColumn}
                    dataArray={this.state.selectedCustomer}
                    draggable={true}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[10]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        );
      }
    };
    let _customerTable = () => {
      return (<div>
        <div style={{textAlign: 'left'}}><h3>Customer Data</h3></div>
        <Row>
          {this.state.loaded  ? _renderTable(this.state.selected) : _renderLoading()}
          {_renderSelectedCustomerTable(this.state.selected)}
        </Row>
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
    let _componentModal = () => {
      return (
        <div>
          <TextField
            floatingLabelText="Departement"
            fullWidth={true}
            required={true}
          />
          <SelectField
            fullWidth={true}
            required={true}
            floatingLabelText="Priority"
            value={this.state.textField.priority}
            onChange={(input, index, dataSource) => {
              this._handleValidationPriority(input, index, dataSource);
            }}
          >
            <MenuItem  value="1" primaryText="High" />
            <MenuItem  value="2" primaryText="Medium" />
            <MenuItem  value="3" primaryText="Low" />
          </SelectField>
          <TextField
            floatingLabelText="Description"
            fullWidth={true}
            required={true}
            multiLine={true}
            rows={2}
            rowsMax={4}
          />
          <TextField
            floatingLabelText="Details"
            fullWidth={true}
            required={true}
            multiLine={true}
            rows={4}
            rowsMax={4}
          />
          <TextField
            floatingLabelText="Assignee user"
            fullWidth={true}
            required={true}
          />
          {/* <AutoComplete
            fullWidth={true}
            required={true}
            floatingLabelText="City"
            hintText="City"
            searchText={this.state.textField.username}
            filter={AutoComplete.caseInsensitiveFilter}
            openOnFocus={true}
            dataSource={this.state.dataCity}
            onUpdateInput={(input, dataSource) => {
              this._handleValidationCity(input, dataSource);
            }}
            errorText={!this.state.isCityValid}
          /> */}
        </div>
      );
    };
    let action = [
      <RaisedButton
        label="cancel"
        secondary={true}
        style={styles.raisedButton}
        onTouchTap={() => this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        secondary={true}
        style={styles.raisedButton}
        onTouchTap={() => this._handleTouchTap()}
      />,
    ];
    return (<Row>
      <Paper style={styles.paper}>
        <Col xs={12} md={12} lg={12} sm={12}>
          <Dialog
            title="Create Ticket"
            actions={action}
            modal={false}
            open={this.state.openModal}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            {_componentModal()}
          </Dialog>
          <h3>Existing Customer</h3>
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
                onTouchTap={() => {
                  this.setState({openModal: true});
                }}
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
        </Col>
      </Paper>
    </Row>);
  }
}
