import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const HOSTNAME = 'https://ibase.adlsandbox.com:8081/api/vendor/';

const UserPic = (row) => (
  <div className="text-center">
    <img src={row.pic} />
  </div>
);

const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);

export default class ManageVendor extends React.Component {
  constructor(props) {
    super(props);
    this.bearier = 'Bearier eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMy4yMjkuMTQ5LjIyODo4MDgxXC9hcGlcL2FkbWluXC9sb2dpbiIsImlhdCI6MTU1MDYwNTk1MCwiZXhwIjoxNTUwNjA5NTUwLCJuYmYiOjE1NTA2MDU5NTAsImp0aSI6InBGMFdBSU1Ld09vdFpxMkoiLCJzdWIiOjE0LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.jWdkPFWvlVoNQTegNzJPv3sAVQSVRVSiTNB48cXz3cY';
    this.data = [];
    this.state = {
      loaded: false,
      cookies: '',
      currentTab: 0,
      isGenderValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      onEdit: false,
      idTemp: '',
      codeTemp: '',
      nameTemp: '',
      textField: [],
      dataTable: this.data,
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() =>
           this.setState({
             onEdit: true,
             idTemp: data.id,
             codeTemp: data.code,
             nameTemp: data.name,
           })
         }
        >
        Edit</button>
      </div>
    );
    const DeleteBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
          onClick={() => this._deleteAPI(`${HOSTNAME}delete?`, data.Id)}
        >
        Delete
        </button>
      </div>
    );
    this.columns = [
      {id: 1, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 2, title: 'Code', prop: 'code', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 3, title: 'Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 4, title: '', render: EditBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
      {id: 5, title: '', render: DeleteBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
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
    this._getAPI(`${HOSTNAME}all`, 'textField');
  }

  _getAPI(apiUrl, stateName) {
    fetch(apiUrl,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson) {
        this.setState({
          [stateName]: responseJson,
          loaded: true,
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _postAPI(apiUrl, stateName, code, name) {
    fetch( `${apiUrl}code=${code}&name=${name}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('res', responseJson);
        this._getAPI(`${HOSTNAME}all`, 'textField');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _deleteAPI(apiUrl, ids) {
    fetch( `${apiUrl}ids=${ids}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJSON', responseJson);
        this._getAPI(`${HOSTNAME}all`, 'textField');
        this.setState({
          currentTab: 0,
        });
      }

      )
      .catch((error) => {
        console.error(error);
      });
  }
  _handleTouchTap() {
    this.data.push({
      'code': this.state.textField.code,
      'vendor': this.state.textField.vendor,
    });
    this._postAPI(`${HOSTNAME}register?`, 'test', this.state.textField.code, this.state.textField.vendor);
    this._getAPI(`${HOSTNAME}all`, 'textField');
    this.setState({
      dataTable: this.data,
      isRegistered: true,
      textField: {},
    });
  }

  _handleValidationName(input, data) {
    this.setState({
      textField: {...this.state.textField, name: data},
    });
  }

  _handleValidationCode(input, data) {
    this.setState({
      textField: {...this.state.textField, code: data},
    });
  }
  _handleClose() {
    this.setState({
      onEdit: false,
    });
  }

  render() {
    let actions = [
      <FlatButton
        label="Cancel" primary={true}
        onTouchTap={() => this._handleClose()}
      />, <FlatButton
        label="Submit" primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleClose()}
          />,
    ];
    let _renderCreateVendor = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Create Vendor</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    // hintText="Code"
                    floatingLabelFixed={true}
                    value={this.state.textField.code}
                    floatingLabelText="Code"
                    fullWidth={true}
                    onChange={( e, input) => {
                      this._handleValidationCode( e, input );
                    }}
                  />

                  <TextField
                    required={true}
                    // hintText="Vendor"
                    floatingLabelFixed={true}
                    floatingLabelText="Vendor"
                    fullWidth={true}
                    value={this.state.textField.vendor}
                    onChange={( e, input) => {
                      this.setState({
                        textField: {...this.state.textField, vendor: input},
                      });
                    }}
                  />
                  <RaisedButton
                    label="Create"
                    secondary={true}
                    style={styles.raisedButton}
                    onTouchTap={() => this._handleTouchTap()}
                  />
                  <Snackbar
                    open={this.state.isRegistered}
                    message="Vendor Added"
                    autoHideDuration={4000}
                    bodyStyle={{backgroundColor: 'teal'}}
                  />
                </Col>
              </form>
            </Col>
          </Row>
        </div>
      );
    };
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            value={this.state.idTemp}
            hintText="ID"
            floatingLabelText="ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                idTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.codeTemp}
            hintText="Code"
            floatingLabelText="Code"
            onChange={(e, input) => {
              this.setState({
                codeTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="Name"
            floatingLabelText="Name"
            value={this.state.nameTemp}
            onChange={(e, input) => {
              this.setState({
                nameTemp: input,
              });
            }}
          />
        </div>
      );
    };
    let _renderManageUser = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage Vendor</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="Edit User"
                    actions={actions}
                    modal={false}
                    open={this.state.onEdit}
                    onRequestClose={() => this._handleClose()}
                  >
                    {_renderModalComponent()}
                  </Dialog>
                  <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={this.columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.state.textField}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'country.name', order: 'asc'}}
                    pageSizeOptions={[5]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    };
    return (
      <Row className="m-b-15">
        <Grid item={true} xs={10} md={12} lg={12}>
          <Paper style={styles.paper}>
            <Col xs={12} md={12} lg={12}>
              <Tabs value={this.state.currentTab}>
                <Tab
                  value={0}
                  label="Create Vendor"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                      isRegistered: false,
                    });
                  }}
                >
                  {this.state.currentTab == 0 && _renderCreateVendor()}
                </Tab>
                <Tab
                  value={1}
                  label="Manage Vendor"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                    });
                  }}
                >
                  {this.state.loaded && this.state.currentTab == 1 && _renderManageUser()}
                </Tab>
              </Tabs>
            </Col>
          </Paper>
        </Grid>
      </Row>
    );
  }
}
