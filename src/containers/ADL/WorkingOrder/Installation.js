import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
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
import {blue400, teal300, red400} from 'material-ui/styles/colors';


const cookies = new Cookies();

// const workOrderShowRule = ['admin', 'operation', 'manageservice', 'dispatcher', 'installer'];
const AssignVendor = ['admin', 'operation', 'manageservice'];
const AssignInstaller = ['admin', 'operation', 'manageservice', 'dispatcher'];


export default class Installation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      dataTemp: [],
      workOrderData: [],
      load: false,
      onEdit: false,
      disableEditVendor: false,
      disableEditInstaller: false,
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() => {
            console.log(data);
            this.setState({
              onEdit: true,
              dataTemp: data,
            });
          }}
        >
                  Update
                </button>
      </div>
            );
    const DeleteBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
        >
                    Delete
                </button>
      </div>
            );

    this.WorkOrdersColumns = [
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
        title: 'Installation Type',
        prop: 'type_installation',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Status',
        prop: 'status',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Subscription ID',
        prop: 'subs_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Product ID',
        prop: 'product_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Vendor',
        prop: 'vendor',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Installer',
        prop: 'installer',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'bast',
        prop: 'bast',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: '',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: '',
        render: DeleteBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }


  componentWillMount() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      this.setState({token: cookieData});
      const json = (response) => response.json();
      fetch(`https://ibase.adlsandbox.com:8081/api/admin/check?token=${cookieData}`, {
        method: 'get',
        type: 'cors',
      })
        .then(json)
        .then((respons) => {
          this.setState({role: respons.user.role});
          if (AssignVendor.includes(respons.user.role) === false) {
            this.setState({disableEditVendor: true});
          }
          if (AssignInstaller.includes(respons.user.role) === false) {
            this.setState({disableEditInstaller: true});
          }
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  componentDidMount() {
    const cookieData = cookies.get('ssid');
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(new Error(response.statusText));
    };
    const json = (response) => response.json();
    fetch('https://ibase.adlsandbox.com:8081/api/workorder/all',
      {
        method: 'get',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookieData}`,
          'Content-Type': 'application/json',
        },
      }, )
    .then(status)
    .then(json)
    .then((respons) => {
      console.log(respons);
      this.setState({workOrderData: respons.data, load: true});
    }).catch((error) => {
      console.log(`error: ${error}`);
    });
  }

  _handleClose() {
    this.setState({
      onEdit: false,
    });
  }

  render() {
    const workOrder = this.state.workOrderData;
    console.log(workOrder);
    const role = this.state.role;
    let _renderModalComponent = (role) => {
      return (
        <div>
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.dataTemp.type_installation}
            hintText="type_installation"
            floatingLabelText="type_installation"
            // onChange={(e, input) => {
            //   this.setState({
            //     codeTemp: input,
            //   });
            // }}
            disabled={true}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="status"
            floatingLabelText="status"
            value={this.state.dataTemp.status}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={true}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="subs_id"
            floatingLabelText="subs_id"
            value={this.state.dataTemp.subs_id}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={true}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="product_id"
            floatingLabelText="product_id"
            value={this.state.dataTemp.product_id}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={true}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="vendor"
            floatingLabelText="vendor"
            value={this.state.dataTemp.vendor}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={this.state.disableEditVendor}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="installer"
            floatingLabelText="installer"
            value={this.state.dataTemp.installer}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={this.state.disableEditInstaller}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="bast"
            floatingLabelText="bast"
            value={this.state.dataTemp.bast}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={true}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="created_at"
            floatingLabelText="created_at"
            value={this.state.dataTemp.created_at}
            // onChange={(e, input) => {
            //   this.setState({
            //     nameTemp: input,
            //   });
            // }}
            disabled={true}
          />
        </div>
      );
    };
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="update"
        primary={true}
        keyboardFocused={true}
        // onTouchTap={() => this._updateData()}
      />,
    ];
    let installerAction = [
      <FlatButton
        label="Cancel"
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Accept"
        secondary={true}
        keyboardFocused={true}
        backgroundColor={teal300}
        style={{color: '#fff', marginLeft: 5}}
        // onTouchTap={() => this._updateData()}
      />,
      <FlatButton
        label="Reschedule"
        primary={true}
        keyboardFocused={true}
        backgroundColor={blue400}
        style={{color: '#fff', marginLeft: 5}}
        // onTouchTap={() => this._updateData()}
      />,
      <FlatButton
        label="Return"
        keyboardFocused={true}
        backgroundColor={red400}
        style={{color: '#fff', marginLeft: 5}}
        // onTouchTap={() => this._updateData()}
      />,
    ];
    let _setVendor = (workOrder) => {
      return (
        <MaterialContainer
          keys="id"
          className="mdl-data-table"
          columns={this.WorkOrdersColumns}
          dataArray={workOrder}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'id', order: 'desc'}}
          pageSizeOptions={[5]}
        />
      );
    };

    return (<div>
      <h3 style={styles.navigation}>Manage Work Order</h3>
      <Row>
        <Paper  style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <br />
                <Dialog
                  title="Update Work Order"
                  actions={role !== 'installer' ? actions : installerAction}
                  modal={false}
                  open={this.state.onEdit}
                  autoScrollBodyContent={true}
                  onRequestClose={() => this._handleClose()}
                >
                  {_renderModalComponent(role)}
                </Dialog>
                {this.state.load ? _setVendor(workOrder) : ''}
              </div>
            </div>
          </Col>
        </Paper>
      </Row>
    </div>);
  }
}
