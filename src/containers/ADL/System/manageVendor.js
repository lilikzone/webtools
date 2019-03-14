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
import CircularProgress from 'material-ui/CircularProgress';

const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/vendor/';

export default class ManageVendor extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      dialogMsg: '',
      isDialog: false,
      loaded: false,
      cookies: '',
      keyword: '',
      currentTab: 0,
      deleteAlert: false,
      deleteId: '',
      deleteName: '',
      isGenderValid: true,
      updateAlert: false,
      redirect: false,
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
      vendorData: [],
      textField: {
        vendor: '',
        code: '',
      },
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
          onClick={() => this._onDelete(data)}
        >
        Delete
        </button>
      </div>
    );
    this.columns = [
      {id: 1, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 2, title: 'Code', prop: 'code', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 3, title: 'Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 4, title: 'Edit Action', render: EditBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
      {id: 5, title: 'Delete Action', render: DeleteBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
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
    this._getAPI(`${HOSTNAME}all`, 'vendorData');
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
          [stateName]: responseJson.data,
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
        this._getAPI(`${HOSTNAME}all`, 'vendorData');
        this.setState({
          dialogMsg: 'Vendor Created', isDialog: true,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          dialogMsg: 'Create fail, please check again', isDialog: true,
        });
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
        this._getAPI(`${HOSTNAME}all`, 'vendorData');
        this.setState({
          redirect: true,
        });
      }

      )
      .catch((error) => {
        console.error(error);
      });
  }
  _onDelete(data) {
    this.setState({
      deleteId: data.id,
      deleteName: data.name,
      deleteAlert: true,
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
            vendorData: responseJson.result.data,
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
  _handleUpdateKeyword() {
    this.setState({
      loaded: false,
    });
    this._getUpdate(`${HOSTNAME}search?keyword=${this.state.keyword}`);
  }
  _handleTouchTap() {
    this.data.push({
      'code': this.state.textField.code,
      'vendor': this.state.textField.vendor,
    });
    this._postAPI(`${HOSTNAME}register?`, 'test', this.state.textField.code, this.state.textField.vendor);
    this._getAPI(`${HOSTNAME}all`, 'vendorData');
    this.setState({
      dataTable: this.data,
      isRegistered: true,
      textField: {
        vendor: '',
        code: '',
      },
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
  _handleClose(param) {
    if (param == 'update') {
      this.setState({
        updateAlert: false,
        redirect: true,
      });
    }    else if (param == 'delete') {
      this.setState({
        deleteAlert: false,
      });
    }    else if (param == 'error') {
      this.setState({
        isDialog: false,
      });
    }        else {
      this.setState({
        onEdit: false,
      });
    }
  }
  _onTouchDelete(data) {
    this._deleteAPI(`${HOSTNAME}delete?`, data);
    this._getAPI(`${HOSTNAME}all`, 'vendorData');
    this._handleClose('delete');
  }

  _onUpdate() {
    this.setState({
      updateAlert: false,
    });
  }

  _handleUpdate() {
    this.setState({
      updateAlert: true,
    });
    this._handleClose();
    const name = this.state.nameTemp;
    const code = this.state.codeTemp;
    const id = this.state.idTemp;
    fetch(`https://source.adlsandbox.com/api/vendor/${id}?code=${code}&name=${name}`, {
      method: 'PUT',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
        .then((response) => response.json())
        .then((respons) => {
          console.log(respons);
        }).catch((error) => {
          console.log(`error: ${error}`);
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
    let actions = [
      <FlatButton
        label="Cancel" primary={true}
        onTouchTap={() => this._handleClose()}
      />, <FlatButton
        label="Submit" primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleUpdate()}
          />,
    ];
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
    let actionsUpdate = (val) => [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={() => this._handleClose(val)}
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
                  {/* <Snackbar
                    open={this.state.isRegistered}
                    message="Vendor Added"
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
                    title="Vendor Updated"
                    actions={actionsUpdate('update')}
                    modal={true}
                    open={this.state.updateAlert}
                    onRequestClose={() => this._onUpdate()}
                  />
                  <Dialog
                    title="Edit User"
                    actions={actions}
                    modal={false}
                    open={this.state.onEdit}
                    autoScrollBodyContent={true}
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
                  <div>
                    <TextField
                      required={true}
                      value={this.state.keyword}
                      hintText="Search"
                      fullWidth={false}
                      onChange={(e, input) => {
                        this.setState({
                          keyword: input,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <RaisedButton secondary={true} label={'Search'} onMouseDown={() => this._handleUpdateKeyword()} />
                  </div>
                  <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={this.columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.state.vendorData}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'country.name', order: 'asc'}}
                    pageSizeOptions={[10]}
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
        {this.state.redirect ? <React.Fragment>{window.location.reload()}</React.Fragment> : '' }
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
                  {this.state.loaded && this.state.currentTab == 1 ? _renderManageUser() :  _renderLoading()}
                </Tab>
              </Tabs>
            </Col>
          </Paper>
        </Grid>
      </Row>
    );
  }
}
