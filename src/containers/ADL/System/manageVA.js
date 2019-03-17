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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/va/';

const paymentType = ['Open', 'Close'];
export default class ManageVA extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      dialogMsg: '',
      isDialog: false,
      loaded: false,
      currentTab: 0,
      isGenderValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      onEdit: false,
      deleteAlert: false,
      deleteId: '',
      deleteName: '',
      vaTemp: '',
      issuerTemp: '',
      partnerTemp: '',
      ipTemp: '',
      subnetTemp: '',
      textField: {
        va_number: '',
        issuer: '',
        partner: '',
        partnerType: '',
        cred1: '',
        cred2: '',
        cred3: '',
        subnet: '',
        ip: '',
      },
      dataTable: this.data,
      allData: [],
      cookies: '',
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() =>
            this.setState({
              onEdit: true,
              idTemp: data.id,
              vaTemp: data.va,
              issuerTemp: data.issuer,
              ipTemp: data.ip,
              subnetTemp: data.subnet,
              paymentTypeTemp: data.type_payment,
              partnerTemp: data.mitra,
              cred1Temp: data.cred_1,
              cred2Temp: data.cred_2,
              cred3Temp: data.cred_3,
            })
          }
        >
          Edit
        </button>
      </div>
    );
    const DeleteBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
          onClick={() => this._onDelete(data)}
        >
          Delete
        </button>
      </div>
    );
    this.columns = [
      {
        id: 0,
        title: 'Id',
        prop: 'id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 1,
        title: 'VA',
        prop: 'va',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Issuer',
        prop: 'issuer',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'IP',
        prop: 'ip',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Subnet',
        prop: 'subnet',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Partner',
        prop: 'mitra',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Payment Type',
        prop: 'type_payment',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Cred 1',
        prop: 'cred_1',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Cred 2',
        prop: 'cred_2',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Cred 3',
        prop: 'cred_3',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Delete Action',
        render: DeleteBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
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
    this._getAPI(`${HOSTNAME}all`, 'allData');
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
        if (responseJson) {
          this.setState({
            [stateName]: responseJson.data,
            loaded: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _postAPI(apiUrl, stateName, va_number, issuer, ip, subnet, type_payment, partner, cred1, cred2, cred3, environment) {
    fetch(`${apiUrl}va_number=${va_number}&issuer=${issuer}&ip=${ip}&subnet=${subnet}&mitra=${partner}&type_payment=${type_payment}&cred_1=${cred1}&cred_2=${cred2}&cred_3=${cred3}&environment=${environment}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('res', responseJson);
        this.setState({
          dialogMsg: responseJson.status,
          isDialog: true,
        });
        this._getAPI(`${HOSTNAME}all`, 'allData');
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          dialogMsg: 'Create fail, please check again', isDialog: true,
        });
      });
  }
  _putAPI(apiUrl, id,  va_number, issuer, ip, subnet, type_payment, partner, cred1, cred2, cred3, environment) {
    console.log('idih', apiUrl, id,  va_number, issuer, ip, subnet, type_payment, partner, cred1, cred2, cred3, environment);
    fetch( `${apiUrl}${id}?va=${va_number}&issuer=${issuer}&ip=${ip}&subnet=${subnet}&mitra=${partner}&type_payment=${type_payment}&cred_1=${cred1}&cred_2=${cred2}&cred_3=${cred3}&environment=${environment}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('responseJSON', responseJson);
      this._getAPI(`${HOSTNAME}all`, 'allData');
    }
    )
    .catch((error) => {
      console.error(error);
    });
  }
  _deleteAPI(apiUrl, ids) {
    fetch(`${apiUrl}ids=${ids}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJSON', responseJson);
        this._getAPI(`${HOSTNAME}all`, 'allData');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _onDelete(data) {
    this.setState({
      deleteId: data.id,
      deleteName: `${data.issuer}`,
      deleteAlert: true,
    });
  }

  _handleTouchTap() {
    this.data.push({
      code: this.state.textField.code,
      vendor: this.state.textField.vendor,
    });
    this._postAPI(
      `${HOSTNAME}register?`,
      'test',
      this.state.textField.va_number,
      this.state.textField.issuer,
      this.state.textField.ip,
      this.state.textField.subnet,
      this.state.textField.paymentType,
      this.state.textField.partner,
      this.state.textField.cred1,
      this.state.textField.cred2,
      this.state.textField.cred3,
      'development'
    );
    this.setState({
      dataTable: this.data,
      isRegistered: true,
      loaded: false,
      textField: {
        va_number: '',
        issuer: '',
        ip: '',
        subnet: '',
        partner: '',
        paymentType: '',
        cred1: '',
        cred2: '',
        cred3: '',
      },
    });
    this._getAPI(`${HOSTNAME}all`, 'allData');
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
  _handleClose(param) {
    if (param == 'delete') {
      this.setState({
        deleteAlert: false,
      });
    }  else if (param == 'error') {
      this.setState({
        isDialog: false,
      });
    }        else {
      this.setState({
        onEdit: false,
      });
    }
  }
  _handleUpdate() {
    this.setState({
      loaded: false,
    });
    this._putAPI(`${HOSTNAME}`, this.state.idTemp, this.state.vaTemp, this.state.issuerTemp, this.state.ipTemp, this.state.subnetTemp, this.state.paymentTypeTemp, this.state.partnerTemp, this.state.cred1Temp, this.state.cred2Temp, this.state.cred3Temp, 'development');
    this._handleClose();
  }

  _onTouchDelete(data) {
    this.setState({
      loaded: false,
    });
    this._deleteAPI(`${HOSTNAME}delete?`, data);
    this._getAPI(`${HOSTNAME}all`, 'allData');
    this._handleClose('delete');
  }

  render() {
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleUpdate()}
      />,
    ];
    let actionsUpdate = (val) => [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={() => this._handleClose(val)}
      />,
    ];
    let _renderSelection = (data) => {
      return data.map((val, index) => {
        return <MenuItem key={index} value={val} primaryText={val} />;
      });
    };
    let _renderCreateVA = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Create VA</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <Dialog
                    title={this.state.dialogMsg}
                    actions={actionsUpdate('error')}
                    modal={true}
                    open={this.state.isDialog}
                    onRequestClose={() => this.setState({
                      isDialog: false,
                    })}
                  />
                  <TextField
                    required={true}
                    // hintText="VA"
                    value={this.state.textField.va_number}
                    floatingLabelFixed={true}
                    floatingLabelText="VA"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, va_number: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    // hintText="Issuer"
                    value={this.state.textField.issuer}
                    floatingLabelFixed={true}
                    floatingLabelText="Issuer"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, issuer: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    // hintText="Issuer"
                    value={this.state.textField.ip}
                    floatingLabelFixed={true}
                    floatingLabelText="IP"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, ip: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    // hintText="Issuer"
                    value={this.state.textField.subnet}
                    floatingLabelFixed={true}
                    floatingLabelText="Subnet"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, subnet: input},
                      });
                    }}
                  />

                  {/* CLOSED TEMPORARY */}
                  <TextField
                    required={true}
                    // hintText="Partner"
                    value={this.state.textField.partner}
                    floatingLabelFixed={true}
                    floatingLabelText="Partner"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, partner: input},
                      });
                    }}
                  />
                  <SelectField
                    floatingLabelText="Payment Type"
                    floatingLabelFixed={true}
                    value={this.state.textField.paymentType}
                    fullWidth={true}
                    onChange={(e, index, value) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          paymentType: value,
                        },
                      });
                    }}
                  >
                    {_renderSelection(paymentType)}
                  </SelectField>
                  <TextField
                    required={true}
                    hintText="Cred 1"
                    value={this.state.textField.cred1}
                    floatingLabelText="Cred 1"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, cred1: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="Cred 2"
                    value={this.state.textField.cred2}
                    floatingLabelFixed={true}
                    floatingLabelText="Cred 2"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, cred2: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="Cred 3"
                    value={this.state.textField.cred3}
                    floatingLabelFixed={true}
                    floatingLabelText="Cred 3"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, cred3: input},
                      });
                    }}
                  />
                  <RaisedButton
                    label="Create"
                    secondary={true}
                    style={styles.raisedButton}
                    onTouchTap={() => this._handleTouchTap()}
                  />
                  {/* <Snackbar
                    open={this.state.isRegistered}
                    message="VA Added"
                    autoHideDuration={4000}
                    bodyStyle={{backgroundColor: 'teal'}}
                  /> */}
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
            value={this.state.vaTemp}
            hintText="VA"
            floatingLabelText="VA"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                vaTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.issuerTemp}
            hintText="Issuer"
            floatingLabelText="Issuer"
            onChange={(e, input) => {
              this.setState({
                issuerTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="IP"
            floatingLabelText="IP"
            value={this.state.ipTemp}
            onChange={(e, input) => {
              this.setState({
                ipTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="Subnet"
            floatingLabelText="Subnet"
            value={this.state.subnetTemp}
            onChange={(e, input) => {
              this.setState({
                subnetTemp: input,
              });
            }}
          />
          <TextField
            required={true}
                    // hintText="Partner"
            value={this.state.partnerTemp}
            floatingLabelFixed={true}
            floatingLabelText="Partner"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                partnerTemp: input,
              });
            }}
          />
          <SelectField
            floatingLabelText="Payment Type"
            floatingLabelFixed={true}
            value={this.state.paymentTypeTemp}
            fullWidth={true}
            onChange={(e, index, value) => {
              this.setState({
                paymentTypeTemp: value,
              });
            }}
          >
            {_renderSelection(paymentType)}
          </SelectField>
          <TextField
            required={true}
            hintText="Cred 1"
            value={this.state.cred1Temp}
            floatingLabelText="Cred 1"
            floatingLabelFixed={true}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                cred1Temp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="Cred 2"
            value={this.state.cred2Temp}
            floatingLabelFixed={true}
            floatingLabelText="Cred 2"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                cred2Temp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="Cred 3"
            value={this.state.cred3Temp}
            floatingLabelFixed={true}
            floatingLabelText="Cred 3"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                cred3Temp: input,
              });
            }}
          />
        </div>
      );
    };
    let actionsDeleteTable = [
      <RaisedButton
        label="Cancel" primary={true}
        onTouchTap={() => this._handleClose('delete')}
      />,
      <RaisedButton
        label="Delete" primary={true}
        onTouchTap={() => this._onTouchDelete(this.state.deleteId)}
      />,
    ];
    let _renderManageVA = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage VA</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="Edit VA"
                    actions={actions}
                    modal={false}
                    autoScrollBodyContent={true}
                    open={this.state.onEdit}
                    onRequestClose={() => this._handleClose()}
                  >
                    {_renderModalComponent()}
                  </Dialog>
                  <Dialog
                    title="Delete Product"
                    actions={actionsDeleteTable}
                    modal={true}
                    open={this.state.deleteAlert}
                    onRequestClose={() =>
                      this.setState({
                        deleteAlert: false,
                      })
                  }
                  >
                  Are you sure want to delete {this.state.deleteName}?
            </Dialog>
                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.state.allData}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'asc'}}
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
                  label="Create VA"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                      // isRegistered: false,
                    });
                  }}
                >
                  {this.state.currentTab == 0 && _renderCreateVA()}
                </Tab>
                <Tab
                  value={1}
                  label="Manage VA"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                    });
                  }}
                >
                  {this.state.loaded && _renderManageVA()}
                </Tab>
              </Tabs>
            </Col>
          </Paper>
        </Grid>
      </Row>
    );
  }
}
