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
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';


const cookies = new Cookies();

// const workOrderShowRule = ['admin', 'operation', 'manageservice', 'dispatcher', 'installer'];
const AssignVendor = ['admin', 'operation', 'manageservice'];
const AssignInstaller = ['admin', 'operation', 'dispatcher'];


export default class Installation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      dataTemp: [],
      dataVendor: [],
      dataInstaller: [],
      workOrderData: [],
      load: false,
      onEdit: false,
      onEditCheck: false,
      disableEditVendor: false,
      disableEditInstaller: false,
      isVendorValid: true,
      isInstallerValid: true,
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
        title: 'Sales Name',
        prop: 'sales_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      // {
      //   id: 11,
      //   title: '',
      //   render: DeleteBtn,
      //   width: '2%',
      //   headerClass: 'mdl-data-table__cell--non-numeric',
      // },
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
    const roleData = cookies.get('rdata');
    const role = roleData.split('+');
    const cookieData = cookies.get('ssid');
    const json = (response) => response.json();

    if (cookieData !== undefined && cookieData !== '') {
      this._getWoData();
      if (role[1] === 'manageservice') {
        fetch('https://ibase.adlsandbox.com:8081/api/vendor/all', {
          method: 'GET',
          type: 'cors',
          headers: {
            'Authorization': `Bearer ${cookieData}`,
            'Content-Type': 'application/json',
          },
        })
        .then(json)
        .then((respons) => {
          console.log(respons);
          const dataVendorObject = respons;
          const dataVendor = [];
          let i;
          for (i = 0;i < dataVendorObject.length;i++) {
            dataVendor.push(dataVendorObject[i].name);
          }
          this.setState({dataVendor: dataVendor});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
      } else if (role[1] === 'dispatcher') {
        fetch('https://ibase.adlsandbox.com:8081/api/admin/search?keyword=installer', {
          method: 'GET',
          type: 'cors',
          headers: {
            'Authorization': `Bearer ${cookieData}`,
            'Content-Type': 'application/json',
          },
        })
        .then(json)
        .then((respons) => {
          console.log(respons);
          const dataInstallerObject = respons.result.data;
          const dataInstaller = [];
          let i;
          for (i = 0;i < dataInstallerObject.length;i++) {
            dataInstaller.push(dataInstallerObject[i].username);
          }
          this.setState({dataInstaller: dataInstaller});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
      }
    }
  }

  _getWoData() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
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
        this.setState({workOrderData: respons.data, load: true, onEdit: false});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }
  _handleClose() {
    this.setState({
      onEdit: false,
      onEditCheck: false,
    });
  }

  _handleOpenCheck() {
    this.setState({
      onEdit: false,
      onEditCheck: true,
    });
  }

  _handleValidationVendor(input, data) {
    let dataInput = input.toLowerCase();
    let dataInputDua = dataInput.charAt(0).toUpperCase() + dataInput.slice(1);
    let dataVendor = data.map((val) => val.toLowerCase());
    this.setState({
      isVendorValid: dataVendor.includes(dataInput),
    });
    if (dataVendor.includes(dataInput)) {
      this.setState({
        dataTemp: {...this.state.dataTemp, vendor: dataInputDua},
      });
    }
  }

  _handleValidationInstaller(input, data) {
    let dataInput = input.toLowerCase();
    let dataInstaller = data.map((val) => val.toLowerCase());
    this.setState({
      isInstallerValid: dataInstaller.includes(dataInput),
    });
    if (dataInstaller.includes(dataInput)) {
      this.setState({
        dataTemp: {...this.state.dataTemp, installer: dataInput},
      });
    }
  }

  _updateDispatchWO(role) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const id = this.state.dataTemp.id;
      const vendor = this.state.dataTemp.vendor;
      const installer = this.state.dataTemp.installer;
      const status = 'Dispatch to dispatcher';
      if (installer !== '' && installer !== undefined) {
        const status = 'Dispatch to installer';
      }

      const json = (response) => response.json();
      console.log(`https://ibase.adlsandbox.com:8081/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer}`);
      fetch(`https://ibase.adlsandbox.com:8081/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer}`, {
        method: 'PUT',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookieData}`,
          'Content-Type': 'application/json',
        },
      })
        .then(json)
        .then((respons) => {
          console.log(respons);
          this.setState({load: false});
          this._getWoData();
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  render() {
    const workOrder = this.state.workOrderData;
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
          <AutoComplete
            required={true}
            fullWidth={true}
            floatingLabelText="Vendor"
            filter={AutoComplete.caseInsensitiveFilter}
            disabled={this.state.disableEditVendor}
            openOnFocus={true}
            dataSource={this.state.dataVendor}
            searchText={this.state.dataTemp.vendor}
            onUpdateInput={(input, dataSource) => {
              this._handleValidationVendor(input, dataSource);
            }}
            errorText={!this.state.isVendorValid}
          />
          <AutoComplete
            required={true}
            fullWidth={true}
            floatingLabelText="Installer"
            filter={AutoComplete.caseInsensitiveFilter}
            disabled={this.state.disableEditInstaller}
            openOnFocus={true}
            dataSource={this.state.dataInstaller}
            searchText={this.state.dataTemp.installer}
            onUpdateInput={(input, dataSource) => {
              this._handleValidationInstaller(input, dataSource);
            }}
            errorText={!this.state.isInstallerValid}
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

    let _renderModalComponentInstaller = () => {
      return (<Row>
        <Col xs={12} md={12} lg={12}>
          <form>
            <Row>
              <Col md={4} lg={6}>
                <RaisedButton
                  label="Check Provisioning"
                  secondary={true}
                />
              </Col>
              <Col md={6} lg={6}>
                <FlatButton disabled={true}> <FontIcon color={'#707780'} className="material-icons">
              check
        </FontIcon> </FlatButton>
              </Col>
            </Row>
            <Row>

              <Col md={4} lg={6}>
                <RaisedButton
                  label="Check ONT"
                  secondary={true}
                />
              </Col>
              <Col md={6} lg={6}>
                <FlatButton disabled={true}> <FontIcon color={'#707780'} className="material-icons">
                check
          </FontIcon> </FlatButton>
              </Col>
            </Row>
            <Row>

              <Col md={4} lg={6}>
                <RaisedButton
                  label="Check ONU"
                  secondary={true}
                />
              </Col>
              <Col md={6} lg={6}>
                <FlatButton disabled={true}> <FontIcon color={'#707780'} className="material-icons">
              check
        </FontIcon> </FlatButton>
              </Col>

            </Row>


          </form>
        </Col>
      </Row>);
    };
    let actions = (role) => {
      // console.log(role);
      if (role !== 'installer') {
        return ([
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => this._handleClose()}
          />,
          <FlatButton
            label="update"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this._updateDispatchWO(role)}
          />,
        ]);
      } else {
        return ([
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
            onTouchTap={() => this._handleOpenCheck()}
          />,
          <FlatButton
            label="Reschedule"
            primary={true}
            keyboardFocused={true}
            backgroundColor={blue400}
            style={{color: '#fff', marginLeft: 5}}
            onTouchTap={() => this._handleClose()}
          />,
          <FlatButton
            label="Return"
            keyboardFocused={true}
            backgroundColor={red400}
            style={{color: '#fff', marginLeft: 5}}
            onTouchTap={() => this._handleClose()}
          />,
        ]);
      }
    };

    let actionsInstallerCheck = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleClose()}
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
                  actions={actions(role)}
                  modal={false}
                  open={this.state.onEdit}
                  autoScrollBodyContent={true}
                  onRequestClose={() => this._handleClose()}
                >
                  {_renderModalComponent(role)}
                </Dialog>
                <Dialog
                  title="Checking"
                  actions={actionsInstallerCheck}
                  modal={false}
                  open={this.state.onEditCheck}
                  autoScrollBodyContent={true}
                  onRequestClose={() => this._handleClose()}
                >
                  {_renderModalComponentInstaller()}
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
