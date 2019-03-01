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
const HOSTNAME = 'https://ibase.adlsandbox.com:8081/api/agency/';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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


export default class ManageAgency extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      isAgencyValid: true,
      isRegistered: false,
      cookies: '',
      loaded: false,
      currentTab: 0,
      onEdit: false,
      idTemp: '',
      codeTemp: '',
      nameTemp: '',
      textField: [],
      dataTable: this.data,
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
          onClick={() => this._deleteAPI(`${HOSTNAME}delete?`, data.id)}
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
        title: '',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: '',
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
        this.setState({redirect: true});
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
        this._getAPI(`${HOSTNAME}all`, 'textField');
        this.setState({
          currentTab: 0,
          redirect: true,
        });
      }

      )
      .catch((error) => {
        console.error(error);
      });
  }


  _handleTouchTap() {
    this.data.push({
      code: this.state.textField.code,
      agency: this.state.textField.agency,
    });
    this._postAPI(`${HOSTNAME}register?`, 'test', this.state.textField.code, this.state.textField.agency);
    this._getAPI(`${HOSTNAME}all`, 'textField');
    this.setState({
      dataTable: this.data,
      currentTab: 1,
      isRegistered: true,
      textField: {},
    });
  }
  _handleUpdate() {
    this._putAPI(`${HOSTNAME}`);
  }

  _handleClose() {
    this.setState({
      onEdit: false,
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

  render() {
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
                  <Snackbar
                    open={this.state.isRegistered}
                    message="Agency Added"
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
                  {this.state.loaded && this.state.currentTab == 1 && _renderManageUser()}
                </Tab>
              </Tabs>
            </Col>
            <Snackbar
              open={this.state.isRegistered}
              message="Agency Added"
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            />
          </Paper>
        </Grid>
      </Row>
    );
  }
}
