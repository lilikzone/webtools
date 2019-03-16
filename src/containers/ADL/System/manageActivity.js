import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/activity/';

const UserPic = (row) => (
  <div className="text-center">
    <img src={row.pic} />
  </div>
);

const EditBtn = () => (
  <div className="text-center">
    <button className="mdl-button mdl-button--raised">Edit</button>
  </div>
);

const DeleteBtn = () => (
  <div className="text-center">
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
      Delete
    </button>
  </div>
);

const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);
const columns = [
  {
    id: 1,
    title: 'Id',
    prop: 'id',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 2,
    title: 'Username',
    prop: 'username',
    width: '20%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 3,
    title: 'Activity',
    prop: 'description',
    width: '20%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 5,
    title: 'Activity Time',
    prop: 'created_at',
    width: '20%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
];

export default class ManageActivity extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];
    this.state = {
      isGenderValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      currentTab: 0,
      loaded: false,
      activityData: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      textField: {
        code: '',
        vendor: '',
      },
      dataTable: this.data,
    };
  }

  _handleTouchTap() {
    this.data.push({
      code: this.state.textField.code,
      vendor: this.state.textField.vendor,
    });
    this.setState({
      dataTable: this.data,
      isRegistered: true,
      textField: {
        code: '',
        vendor: '',
      },
      // currentTab: 1,
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

  _getAPI(apiUrl, stateName) {
    fetch(apiUrl,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${cookies.get('ssid')}`,
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

  componentDidMount() {
    this._getAPI(`${HOSTNAME}all?page=${this.state.activityData.current_page}`, 'activityData');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.activityData.current_page != this.state.activityData.current_page) {
      this.setState({
        loaded: false,
      });
      this._getAPI(`${HOSTNAME}all?page=${this.state.activityData.current_page}`, 'activityData');
    }
  }
  render() {
    let _renderCreateVendor = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Activity Report</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    hintText="Code"
                    value={this.state.textField.code}
                    floatingLabelText="Code"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this._handleValidationCode(e, input);
                    }}
                  />

                  <TextField
                    required={true}
                    hintText="Vendor Name"
                    floatingLabelText="Vendor Name"
                    fullWidth={true}
                    value={this.state.textField.vendor}
                    onChange={(e, input) => {
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
          <h3 style={styles.navigation}>Manage Activity</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  {/* <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.data}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'country.name', order: 'asc'}}
                    pageSizeOptions={[1]}
                  /> */}
                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={columns}
                    onChangePage={((page) => this.setState({
                      activityData: {...this.state.activityData, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.activityData.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.activityData.current_page - 1}
                    total={this.state.activityData.total}
                    sortBy={{prop: 'id', order: 'asc'}}
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
        <Grid item={true} xs={10} md={12} lg={12}>
          <Paper style={styles.paper}>
            <Col xs={12} md={12} lg={12}>
              {_renderManageUser()}
            </Col>
          </Paper>
        </Grid>
      </Row>
    );
  }
}
