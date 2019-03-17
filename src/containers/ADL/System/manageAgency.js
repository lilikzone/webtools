import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
const HOSTNAME = 'https://source.adlsandbox.com/api/agency/';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class ManageAgency extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      dialogMsg: '',
      isDialog: false,
      keyword: '',
      isAgencyValid: true,
      updateAlert: false,
      isRegistered: false,
      deleteAlert: false,
      deleteId: '',
      deleteName: '',
      cookies: '',
      loaded: false,
      currentTab: 0,
      onEdit: false,
      idTemp: '',
      codeTemp: '',
      nameTemp: '',
      textField: {
        code: '',
        agency: '',
      },
      agencyData: {},
      // dataTable: this.data,
      redirect: false,
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
      {
        id: 1,
        title: 'Id',
        prop: 'id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Code',
        prop: 'code',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Agency Name',
        prop: 'name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
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
    this._getAPI(`${HOSTNAME}all`, 'agencyData');
  }

  _onUpdate() {
    this.setState({
      updateAlert: false,
    });
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
        this._getAPI(`${HOSTNAME}all`, 'agencyData');
        this.setState({dialogMsg: 'Agency Created', isDialog: true});
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
        this._getAPI(`${HOSTNAME}all`, 'agencyData');
        // this.setState({
        //   currentTab: 0,
        // });
      }

      )
      .catch((error) => {
        console.error(error);
      });
  }
  _putAPI(apiUrl) {
    const id = this.state.idTemp;
    const code = this.state.codeTemp;
    const name = this.state.nameTemp;
    fetch( `${apiUrl}${id}?code=${code}&name=${name}`,
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
        this._getAPI(`${HOSTNAME}all`, 'agencyData');
        // this.setState({
        //   currentTab: 0,
        //   redirect: true,
        // });
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
            textField: responseJson.result.data,
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
      code: this.state.textField.code,
      agency: this.state.textField.agency,
    });
    this._postAPI(`${HOSTNAME}register?`, 'test', this.state.textField.code, this.state.textField.agency);
    this._getAPI(`${HOSTNAME}all`, 'agencyData');
    this.setState({
      // dataTable: this.data,
      // currentTab: 1,
      isRegistered: true,
      textField: {
        code: '',
        agency: '',
      },
    });
  }
  _handleUpdate() {
    this.setState({
      loaded: false,
      updateAlert: true,
    });
    this._putAPI(`${HOSTNAME}`);
    this._handleClose();
  }

  _handleClose(param) {
    if (param == 'update') {
      this.setState({
        updateAlert: false,
      });
    }    else if (param == 'delete') {
      this.setState({
        deleteAlert: false,
      });
    }     else if (param == 'error') {
      this.setState({
        isDialog: false,
      });
    }    else {
      this.setState({
        onEdit: false,
      });
    }
  }
  _onTouchDelete(data) {
    this.setState({
      loaded: false,
      redirect: true,
    });
    this._deleteAPI(`${HOSTNAME}delete?`, data);
    this._getAPI(`${HOSTNAME}all`, 'agencyData');
    this._handleClose('delete');
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
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            value={this.state.idTemp}
            hintText="ID"
            floatingLabelFixed={true}
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
            // hintText="Code"
            floatingLabelFixed={true}
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
            // hintText="Agency Name"
            floatingLabelFixed={true}
            floatingLabelText="Agency Name"
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
    let _renderCreateAgency = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Create Agency</h3>
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
                    value={this.state.textField.code}
                    floatingLabelFixed={true}
                    floatingLabelText="Code"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this._handleValidationCode(e, input);
                    }}
                  />

                  <TextField
                    required={true}
                    // hintText="Agency Name"
                    floatingLabelText="Agency Name"
                    fullWidth={true}
                    floatingLabelFixed={true}
                    value={this.state.textField.agency}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, agency: input},
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
                    message="Agency Added"
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
    let _renderManageUser = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage Agency</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="Agency Updated"
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
                    dataArray={this.state.agencyData}
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
                  label="Create Agency"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                      isRegistered: false,
                    });
                  }}
                >
                  {this.state.currentTab == 0 && _renderCreateAgency()}
                </Tab>
                <Tab
                  value={1}
                  label="Manage Agency"
                  onActive={(val) => {
                    this.setState({
                      currentTab: val.props.index,
                    });
                  }}
                >
                  {this.state.loaded && this.state.currentTab == 1 ? _renderManageUser() : _renderLoading()}
                </Tab>
              </Tabs>
            </Col>
            {/* <Snackbar
              open={this.state.isRegistered}
              message="Agency Added"
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            /> */}
          </Paper>
        </Grid>
      </Row>
    );
  }
}
