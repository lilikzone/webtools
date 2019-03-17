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

const HOSTNAME = 'https://source.adlsandbox.com/api/ticket';

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

const ticketColumn = [
    {id: 1, title: 'Id', prop: 'ticket_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Priority', prop: 'priority_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Name', prop: 'customer_name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'Type', prop: 'request_type', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Departement', prop: 'departement', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Status', prop: 'status_id', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    // {id: 7, title: 'Choose Action', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];
export default class TicketNewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      ticketAll: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      cookies: '',
    };
  }


  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
    }
  }

  componentDidMount() {
    this._getAPI(`${HOSTNAME}/all?page=${this.state.ticketAll.current_page}`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ticketAll.current_page != this.state.ticketAll.current_page) {
      this.setState({
        loaded: false,
      });
      this._getAPI(`${HOSTNAME}/all?page=${this.state.ticketAll.current_page}`, 'textField');
    }
  }

  _getAPI(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          ticketAll: responseJson,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let _ticketTable = () => {
      return (<div className="mdl-layout">
        <MaterialContainerCustom
          keys="msisdn"
          className="mdl-data-table"
          columns={ticketColumn}
          onChangePage={((page) => this.setState({
            ticketAll: {...this.state.ticketAll, current_page: page + 1},
          }))}
          dataArrayCustom={this.state.ticketAll.data}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          currentPage={this.state.ticketAll.current_page - 1}
          total={this.state.ticketAll.total}
          pageSizeOptions={[10]}
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
