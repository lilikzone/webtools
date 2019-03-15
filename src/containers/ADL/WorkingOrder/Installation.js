import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';
import {blue400, teal300, red400} from 'material-ui/styles/colors';
import AutoComplete from 'material-ui/AutoComplete';
import FontIcon from 'material-ui/FontIcon';
import FileBase64 from 'react-file-base64';
import moment from  'moment';
import IconButton from 'material-ui/IconButton';


const cookies = new Cookies();

// const workOrderShowRule = ['admin', 'operation', 'manageservice', 'dispatcher', 'installer'];
const AssignVendor = ['admin', 'operation', 'manageservice', 'manageservicemanager'];
const AssignInstaller = ['admin', 'operation', 'dispatcher'];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};


export default class Installation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: '',
      dataTemp: [],
      dataVendor: [],
      dataInstaller: [],
      workOrderData: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      // snStb: '',
      // snOnt: '',
      load: false,
      onEdit: false,
      onEditCheck: false,
      onEditRemark: false,
      disableEditVendor: false,
      disableEditInstaller: false,
      isVendorValid: true,
      isInstallerValid: true,
      status: 'Dispatch to dispatcher',
    };
    const EditBtn = (data) => (
      <div className="text-center">
        {data.status == 'Finish installation' && this.state.role == 'operation' ?
          <RaisedButton
            label="Upload"
            disabled={true}
          /> :
          data.status == 'Complete' && this.state.role != 'operation' ?
            <RaisedButton
              label="Activate"
              // secondary={true}
              disabled={true}
              // backgroundColor={teal300}
              // style={{
              //   color: '#fff',
              // }}
            />          :
        data.status != 'Active' ?
          <button
            className="mdl-button mdl-button--raised"
            style={(data.status == 'Complete' || data.status == 'Active') && ['operation', 'manageservice', 'manageservicemanager', 'dispatcher', 'admin', 'installer'].includes(this.state.role) ? {backgroundColor: teal300, color: 'white'} : {}}
            onClick={() => {
              console.log(data);
              this.setState({
                onEdit: true,
                dataTemp: data,
              });
            }}
          >
            {
                data.status == 'Finish installation' || (data.status != 'Complete' && !['operation', 'manageservice', 'manageservicemanager', 'dispatcher', 'admin', 'installer'].includes(this.state.role) ) ? 'Upload' :
                (data.status == 'Complete' || data.status == 'Active') && ['operation', 'manageservice', 'manageservicemanager', 'dispatcher', 'admin', 'installer'].includes(this.state.role) ? 'Activate' :
               'Update'
              }
          </button> :
          <FlatButton
            label="Active"
            disabled={true}
            style={{color: teal300}}
          />}
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
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 1,
        title: 'Subscription ID',
        prop: 'subs_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'WO ID',
        prop: 'wo_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Installation Address',
        prop: 'id_address',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 18,
        title: 'Status',
        prop: 'status',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'OLT',
        prop: 'olt',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'ONT Type',
        prop: 'ont_type',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'City',
        prop: 'city',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Cluster',
        prop: 'cluster',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'BAST',
        prop: 'bast',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'SN STB',
        prop: 'sn_stb',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'SN ONT',
        prop: 'sn_ont',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Phone 1',
        prop: 'phone1',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Phone 2',
        prop: 'phone2',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Installation Date',
        prop: 'installation_date',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Product Description',
        prop: 'product_description',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 17,
        title: 'Time Slot',
        prop: 'time_slot',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
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
      fetch(`https://source.adlsandbox.com/api/admin/check?token=${cookieData}`, {
        method: 'get',
        type: 'cors',
      })
        .then(json)
        .then((respons) => {
          console.log(respons);
          this.setState({
            role: respons.user.role,
          });
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
    this._getWoData();
    if (cookieData !== undefined && cookieData !== '') {
      if (AssignVendor.includes(role[1])) {
        fetch('https://source.adlsandbox.com/api/vendor/all', {
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
          const dataVendorObject = respons.data;
          const dataVendor = [];
          let i;
          for (i = 0;i < dataVendorObject.length;i++) {
            dataVendor.push({textKey: dataVendorObject[i].name, valueKey: dataVendorObject[i].code});
          }
          this.setState({dataVendor: dataVendor});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
      } if (AssignInstaller.includes(role[1])) {
        fetch('https://source.adlsandbox.com/api/admin/search?keyword=installer', {
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
          this.setState({
            load: false,
            dataInstaller: dataInstaller,
            status: 'Dispatch to installer'});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.workOrderData.current_page != this.state.workOrderData.current_page) {
      this.setState({
        load: false,
      });
      const json = (response) => response.json();
      fetch(`https://source.adlsandbox.com/api/workorder/all?page=${this.state.workOrderData.current_page}`, {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Content-Type': 'application/json',
        },
      }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({workOrderData: respons, load: true});
      }).catch((error) => {
        console.log(error);
      });
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
      fetch('https://source.adlsandbox.com/api/workorder/all',
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
        this.setState({workOrderData: respons, load: true, onEdit: false});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }
  _handleClose() {
    this.setState({
      onEdit: false,
      onEditCheck: false,
      onEditRemark: false,
    });
  }

  _handleOpenCheck() {
    this.setState({
      onEdit: false,
      onEditCheck: true,
    });
  }
  _handleOpenRemark(finishedInstallation) {
    if (!finishedInstallation) {
      this.setState({
        status: 'Complete',
      });
      this._updateDispatchWO('', 'Complete');
    }
    this.setState({
      onEdit: false,
      onEditCheck: false,
      onEditRemark: finishedInstallation,
    });
  }


  _handleValidationVendor(input, data) {
    let dataInput = input;
    console.log(dataInput);
    const found = data.find((element) => {
      if (element.textKey == input) {
        return (element);
      } else {
        return null;
      }
    });
    if (found === undefined) {
      this.setState({isVendorValid: false});
    } else {
      this.setState({
        dataTemp: {...this.state.dataTemp, vendor_name: dataInput, vendorValue: found.valueKey},
      });
    }
    // }
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

  _updateDispatchWO(role, stats) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const id = this.state.dataTemp.id;
      const vendor = this.state.dataTemp.vendorValue === undefined ? this.state.dataTemp.vendor : this.state.dataTemp.vendorValue;
      const installer = this.state.dataTemp.installer;
      const time_slot = this.state.dataTemp.time_slot;
      const status = stats || this.state.status;
      const json = (response) => response.json();
      // console.log(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}`);
      fetch(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}&time_slot=${time_slot}`, {
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
  _updateReturnWO() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const id = this.state.dataTemp.id;
      const vendor = this.state.dataTemp.vendorValue === undefined ? this.state.dataTemp.vendor : this.state.dataTemp.vendorValue;
      const installer = this.state.dataTemp.installer;
      const status = this.state.dataTemp.status;
      const notes = this.state.dataTemp.notes;
      const time_slot = this.state.dataTemp.time_slot;

      const json = (response) => response.json();

      console.log(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}&notes=${notes}&time_slot=${time_slot}`);
      fetch(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}&notes=${notes}&time_slot=${time_slot}`, {
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
          this.setState({load: false,
            onEdit: false,
            onEditCheck: false,
            onEditRemark: false});

          this._getWoData();
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }
  _updateFinishWO() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const id = this.state.dataTemp.id;
      const vendor = this.state.dataTemp.vendorValue === undefined ? this.state.dataTemp.vendor : this.state.dataTemp.vendorValue;
      const installer = this.state.dataTemp.installer;
      const status = 'Finish installation';
      const notes = '';
      const snOnt = this.state.dataTemp.snOnt;
      const snStb = this.state.dataTemp.snStb;
      const time_slot = this.state.dataTemp.time_slot;
      const installation_date = moment(this.state.dataTemp.installation_date).format('YYYY-MM-DD');
      const json = (response) => response.json();

      console.log(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}&notes=${notes}`);
      fetch(`https://source.adlsandbox.com/api/workorder/update/${id}?type_installation=Installation&status=${status}&vendor=${vendor}&installer=${installer == null ? '' : installer}&notes=${notes}`, {
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
          this.setState({load: false,
            onEdit: false,
            onEditCheck: false,
            onEditRemark: false});

          this._getWoData();
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  _handleActiveStatus() {
    this._updateDispatchWO('', 'Active');
    this.setState({
      status: 'Active',
    });
  }

  render() {
    const workOrder = this.state.workOrderData;
    const role = this.state.role;
    const disabled = (this.state.dataTemp.status == 'Active' || this.state.dataTemp.status == 'Complete') && ['operation', 'manageservice', 'manageservicemanager', 'dispatcher', 'admin', 'installer'].includes(this.state.role);
    let _renderModalComponent = (role, status) => {
      if (status == 'Finish installation' || (status == 'Complete' && this.state.role != 'operation')) {
        return (
          <div>
            <TextField
              fullWidth={true}
              required={true}
              value={this.state.dataTemp.snStb}
              hintText="SN STB"
              floatingLabelText="SN STB"
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, snStb: input},
                });
              }}

            />
            <TextField
              fullWidth={true}
              required={true}
              hintText="SN ONT"
              floatingLabelText="SN ONT"
              value={this.state.dataTemp.snOnt}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, snOnt: input},
                });
              }}
            />
            <h3 style={{marginTop: 20}} >Upload</h3>
            <hr />
            <div className="input-group">
              <span className="input-group-icon">
                <label>BAST FILE</label>
              </span>
              <div className="input-group-text">
                <FileBase64 name="BAST" multiple={false} onDone={(file) => this.setState({bast: file})}  />
              </div>
              {this.state.bast !== undefined && this.state.bast !== '' ? <img style={{width: 500}} src={this.state.bast.base64} /> : ''}
            </div>
          </div>
        );
      }      else {
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
              disabled={this.state.disableEditVendor || disabled}
              openOnFocus={true}
              dataSource={this.state.dataVendor}
              searchText={this.state.dataTemp.vendor_name}
              dataSourceConfig={dataSourceConfig}
              onUpdateInput={(input, dataSource) => {
                this._handleValidationVendor(input, dataSource);
              }}
              errorText={!this.state.isVendorValid}
            />
            <SelectField
              fullWidth={false}
              hintText={'Time Slot'}
              floatingLabelText="Time Slot"
              name="time_slot"
              disabled={!(this.state.role == 'manageservice' || this.state.role == 'manageservicemanager')}
              value={this.state.dataTemp.time_slot}
              onChange={(e, index, value) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, time_slot: value},
                });
              }}
            >
              <MenuItem value={'06:00-08:00'} primaryText="06:00 - 08:00" />
              <MenuItem value={'08:00-10:00'} primaryText="10:00 - 12:00" />
              <MenuItem value={'12:00-13:00'} primaryText="13:00 - 14:00" />
              <MenuItem value={'14:00-15:00'} primaryText="14:00 - 15:00" />
              <MenuItem value={'15:00-16:00'} primaryText="15:00 - 16:00" />
              <MenuItem value={'16:00-18:00'} primaryText="16:00 - 18:00" />
            </SelectField>
            <DatePicker
              hintText="Installation Date"
              floatingLabelText="Installation Date"
              fullWidth={true}
              disabled={!(this.state.role == 'manageservice' || this.state.role == 'manageservicemanager')}
              value={this.state.dataTemp.installation_date}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {
                    ...this.state.dataTemp,
                    installation_date: input,
                  },
                });
              }}
            />
            <AutoComplete
              required={true}
              fullWidth={true}
              floatingLabelText="Installer"
              filter={AutoComplete.caseInsensitiveFilter}
              disabled={this.state.disableEditInstaller || disabled}
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
              hintText="BASR"
              floatingLabelText="BAST"
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
              value={this.state.dataTemp.snStb}
              hintText="SN STB"
              floatingLabelText="SN STB"
              disabled={true}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, snStb: input},
                });
              }}
            />
            <TextField
              fullWidth={true}
              required={true}
              hintText="SN ONT"
              floatingLabelText="SN ONT"
              disabled={true}
              value={this.state.dataTemp.snOnt}
              onChange={(e, input) => {
                this.setState({
                  dataTemp: {...this.state.dataTemp, snOnt: input},
                });
              }}
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
      }
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
      if (role !== 'installer') {
        return ([
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => this._handleClose()}
          />,
          <FlatButton
            label={disabled ? 'Activate' : 'Update'}
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => {
              disabled ? this._handleActiveStatus() : this._updateDispatchWO(role);
            }}
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
            style={{
              color: '#fff',
              marginLeft: 5,
              display: ['Finish installation', 'Complete'].includes(this.state.dataTemp.status) ? 'none' : 'inline',
            }}
            onTouchTap={() => this._handleOpenCheck()}
          />,
          <FlatButton
            label="Update"
            primary={true}
            keyboardFocused={true}
            backgroundColor={blue400}
            style={{color: '#fff', marginLeft: 5}}
            onTouchTap={() => this._handleOpenRemark(!['Finish installation', 'Complete'].includes(this.state.dataTemp.status))}
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
        onTouchTap={() => this._updateFinishWO()}
      />,
    ];

    let actionsInstallerRemark = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._updateReturnWO()}
      />,
    ];


    let _setVendor = (workOrder) => {
      return (
        // <MaterialContainer
        //   keys="id"
        //   className="mdl-data-table"
        //   columns={this.WorkOrdersColumns}
        //   dataArray={workOrder}
        //   draggable={false}
        //   sortable={false}
        //   sortBy={{prop: 'id', order: 'desc'}}
        //   pageSizeOptions={[10]}
        // />
        <MaterialContainer
          keys="id"
          className="mdl-data-table"
          columns={this.WorkOrdersColumns}
          onChangePage={((page) => this.setState({
            workOrderData: {...this.state.workOrderData, current_page: page + 1},
          }))}
          dataArrayCustom={workOrder.data}
          draggable={false}
          sortable={false}
          currentPage={workOrder.current_page - 1}
          total={workOrder.total}
          sortBy={{prop: 'id', order: 'asc'}}
          pageSizeOptions={[10]}
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
                  title={disabled ? 'Activate Work Order' : 'Update Work Order'}
                  actions={actions(this.state.role)}
                  modal={false}
                  open={this.state.onEdit}
                  autoScrollBodyContent={true}
                  onRequestClose={() => this._handleClose()}
                >
                  {_renderModalComponent(role, this.state.dataTemp.status)}
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
                <Dialog
                  title="Remark"
                  actions={actionsInstallerRemark}
                  modal={false}
                  open={this.state.onEditRemark}
                  autoScrollBodyContent={true}
                  onRequestClose={() => this._handleClose()}
                >
                  <TextField
                    multiLine={true}
                    floatingLabelText="Notes"
                    value={this.state.dataTemp.notes}
                    onChange={(input, data) => {
                      this.setState({
                        dataTemp: {...this.state.dataTemp, notes: data},
                      });
                    }}
                    rows={2}
                    rowsMax={4}
                  />
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
