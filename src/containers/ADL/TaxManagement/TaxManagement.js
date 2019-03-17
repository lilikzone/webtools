import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import Dialog from 'material-ui/Dialog';
import Cookies from 'universal-cookie';
import moment from  'moment';

const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/ematerai/';

const EditBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-button--raised"
    >
      Edit</button>
  </div>
  );

const futureLeadsColumn = [
    {id: 1, title: 'ID', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Status', prop: 'status', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: 'E Materai', prop: 'e_materai', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 5, title: 'Description', prop: 'description', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 6, title: 'Expired at', prop: 'expired_at', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
];
export default class TaxManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTax: [],
      loaded: false,
      cookies: '',
      warningMessage: '',
      openWarning: false,
      createdCode: '',
      createdName: '',
      textField: {
        e_materai: '',
        desc: '',
        expired_at: {},
        status: '',
      },
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
    this._getAPI(`${HOSTNAME}all`);
  }

  _getAPI(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          this.setState({
            dataTax: responseJson.data,
            loaded: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _postAPI(apiUrl) {
    const status = this.state.textField.status;
    const e_materai = this.state.textField.e_materai;
    const desc = this.state.textField.desc;
    const expired_at = moment(this.state.textField.expired_at).format('YYYY-MM-DD');
    fetch(
      `${apiUrl}create?status=${
        status
      }&e_materai=${e_materai}&desc=${desc}&expired_at=${
        expired_at
      }`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.state.cookies}`,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          createdCode: responseJson.ematerai.id,
          createdName: responseJson.ematerai.e_materai,
          warningMessage: responseJson.message,
          openWarning: true,
        });
        this._getAPI(`${HOSTNAME}all?`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handleTouchTap() {
    this._postAPI(HOSTNAME);
    this._getAPI(`${HOSTNAME}all?`);
    this.setState({
      textField: {},
    });
  }
  handleClose() {
    this.setState({openWarning: false});
  }

  render() {
    let _createTax = () => {
      return (<div>
        <Col xs={12} md={6} lg={6} sm={12}>
          <form>
            <TextField
              floatingLabelText="E Materai"
              fullWidth={true}
              required={true}
              hintText="E Materai"
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, e_materai: input}
                  ,
                });
              }}
            />
            <SelectField
              fullWidth={true}
              floatingLabelText="Status"
              name="status"
              value={this.state.textField.status}
              onChange={(e, index, value) => {
                this.setState({
                  textField: {...this.state.textField, status: value},
                });
              }}
            >
              <MenuItem value={'active'} primaryText="Active" />
              <MenuItem value={'inactive'} primaryText="InActive" />

            </SelectField>
            <TextField
              floatingLabelText="Description"
              fullWidth={true}
              required={true}
              hintText="Description"
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, desc: input}
                  ,
                });
              }}
            />
            <DatePicker
              hintText="Expired at"
              floatingLabelText="Expired at"
              name="expired_at"
              value={this.state.textField.expired_at}
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, expired_at: input},
                });
              }}
            />
            <RaisedButton
              label="Submit"
              onTouchTap={() => this._handleTouchTap()}
              secondary={true}
              style={styles.raisedButton}
            />
          </form>
        </Col>
      </div>);
    };
    let _taxTable = () => {
      return (
        <div className="mdl-layout">
          {this.state.loaded &&
          <MaterialContainer
            keys="id"
            className="mdl-data-table"
            columns={futureLeadsColumn}
            dataArray={this.state.dataTax}
            draggable={false}
            sortable={false}
            sortBy={{prop: 'id', order: 'desc'}}
            pageSizeOptions={[5]}
          />
        }
        </div>);
    };
    let actions = [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={() => this.handleClose()}
      />,
    ];
    let _dialog = () => {
      return (
        <Dialog
          title="Success"
          actions={actions}
          modal={false}
          open={this.state.openWarning}
          onRequestClose={() => this.handleClose()}
        >
          {this.state.warningMessage}
          <br />
          {`${this.state.createdName} ${this.state.createdCode}`}
        </Dialog>
      );
    };
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          {_dialog()}
          <h3>Input Tax</h3>
          <Paper style={styles.paper}>
            <Tabs value={this.state.currentTab} >
              <Tab
                value={0}
                label="input Tax"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_createTax()}</Tab>
              <Tab
                value={1}
                label="Manage Tax"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_taxTable()}</Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    );
  }
}
