import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Card} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Subheader} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const dataGender = ['Male', 'Female'];

const vendorShowRole = ['manageservice', 'manageservicemanager', 'operation', 'admin'];
const agentShowRole = ['operation', 'admin', 'internalsales'];

const enableAgency = ['sales', 'salesadmin'];
const enableVendor = ['dispatcher', 'installer'];

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

// const dataVendor = ['Vendor1', 'Vendor2', 'Vendor3'];
// const dataAgency = ['Agency1', 'Agency2'];
const style = {
  card: {
    padding: 20,
  },
};
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

const generateRowProps = (row) => {
  const options = {};
  if (row.gender === 'Male') {
    options.className = 'info';
  }
  if (row.gender === 'Female') {
    options.className = 'warning';
  }
  return options;
};

export default class ManageUser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      errorFetch: '',
      isError: false,
      isEmailValid: true,
      isEmailValidTemp: true,
      isPhoneValid: true,
      isPhoneValidTemp: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      deleteAlert: false,
      deleteId: '',
      deleteName: '',
      onEdit: false,
      updateAlert: false,
      currentTab: 0,
      nameTemp: '',
      emailTemp: '',
      phoneNumberTemp: '',
      roleTemp: '',
      textField: {
        name: '',
        email: '',
        username: '',
        password: '',
        // gender: '',
        phoneNumber: '',
        role: '',
        vendor: '',
        agency: '',
        vendorValue: '',
      },
      role: '',
      dataRole: '',
      token: '',
      dataVendor: [],
      dataAgency: [],
      allData: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      loaded: false,
      redirect: false,
      disableVendorButton: true,
      disableAgencyButton: true,
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() =>
           this.setState({
             onEdit: true,
             nameTemp: data.name,
             idTemp: data.id,
             emailTemp: data.email,
             phoneNumberTemp: data.phoneNumber,
             roleTemp: data.role,
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
          onClick={() => {
            this._onDelete(data);
          }
         }
        >
          Delete
        </button>
      </div>
    );
    this.columns = [
      {
        id: 1,
        title: 'Username',
        prop: 'username',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Role',
        prop: 'role',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Name',
        prop: 'name',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Gender',
        prop: 'gender',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Email',
        prop: 'email',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Vendor',
        prop: 'vendor',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Agency',
        prop: 'agency',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Edit Action',
        render: EditBtn,
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Delete Action',
        render: DeleteBtn,
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
    this.NonAdmincolumns = [
      {
        id: 1,
        title: 'Username',
        prop: 'username',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Role',
        prop: 'role',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Name',
        prop: 'name',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Gender',
        prop: 'gender',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Email',
        prop: 'email',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Vendor',
        prop: 'vendor',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Agency',
        prop: 'agency',
        width: '10%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }
  _getUpdate(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('result_Search', responseJson);
        if (responseJson.result.data.length > 0) {
          this.setState({
            allData: {
              data: responseJson.result.data,
              current_page: responseJson.result.current_page,
              total: responseJson.result.total,
            },
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
    this._getUpdate(`https://source.adlsandbox.com/api/admin/search?keyword=${this.state.keyword}`);
  }
  _onDelete(data) {
    this.setState({
      deleteId: data.id,
      deleteName: data.name,
      deleteAlert: true,
    });
  }

  _dataRole(role) {
    if (role === 'manageservice' || role === 'manageservicemanager') {
      return [{
        'value': 'dispatcher',
        'name': 'Dispatcher',
      }, {
        'value': 'installer',
        'name': 'Installer',
      }];
    }
    if (role === 'admin') {
      return [
        {'name': 'Admin', 'value': 'admin'},
        {'name': 'Homepassed', 'value': 'homepassed'},
        {'name': 'Operation', 'value': 'operation'},
        {'name': 'Product', 'value': 'product'},
        {'name': 'Finance', 'value': 'finance'},
        {'name': 'Internal Sales', 'value': 'internalsales'},
        {'name': 'Sales Admin', 'value': 'salesadmin'},
        {'name': 'Sales', 'value': 'sales'},
        {'name': 'Manage Service', 'value': 'manageservice'},
        {'name': 'Manage Service Manager', 'value': 'manageservicemanager'},
        {'name': 'Dispatcher', 'value': 'dispatcher'},
        {'name': 'Installer', 'value': 'installer'},
        {'name': 'CS', 'value': 'cs'},
        {'name': 'CS External', 'value': 'csexternal'},
      ];
    }

    if (role === 'internalsales') {
      return [{'name': 'Sales Admin', 'value': 'salesadmin'},
      {'name': 'Sales', 'value': 'sales'}];
    }
  }


  componentDidMount() {
    const json = (response) => response.json();
    fetch(`https://source.adlsandbox.com/api/admin/all?page=${this.state.allData.current_page}`, {
      method: 'GET',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({allData: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.allData.current_page != this.state.allData.current_page) {
      this.setState({
        loaded: false,
      });
      const json = (response) => response.json();
      fetch(`https://source.adlsandbox.com/api/admin/all?page=${this.state.allData.current_page}`, {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Content-Type': 'application/json',
        },
      }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({allData: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  componentWillMount() {
    const cookiesData = cookies.get('ssid');
    if (cookiesData !== undefined && cookiesData !== '') {
      this.setState({token: cookiesData});

      const json = (response) => response.json();
      fetch('https://source.adlsandbox.com/api/admin/check', {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookiesData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        // console.log(respons);
        const role = respons.user.role;
        this.setState({role: role});
        const dataRole = this._dataRole(role);
        this.setState({dataRole: dataRole});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });


      fetch('https://source.adlsandbox.com/api/vendor/all', {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookiesData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        // console.log(respons);

        const dataVendorObject = respons.data;
        const dataVendor = [];
        let i;
        for (i = 0;i < dataVendorObject.length;i++) {
          dataVendor.push({textKey: dataVendorObject[i].name, valueKey: dataVendorObject[i].code});
        }
        this.setState({dataVendor: dataVendor});
        // console.log(this.state.dataVendor);
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      fetch('https://source.adlsandbox.com/api/agency/all', {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookiesData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        // console.log(respons);

        const dataAgencyObject = respons.data;
        const dataAgency = [];
        let i;
        for (i = 0;i < dataAgencyObject.length;i++) {
          dataAgency.push(dataAgencyObject[i].name);
        }

        this.setState({dataAgency: dataAgency});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
      fetch(`https://source.adlsandbox.com/api/admin/all?page=${this.state.allData.current_page}`, {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookiesData}`,
          'Content-Type': 'application/json',
        },
      }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({allData: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  _handleTouchTap() {
    const username = this.state.textField.username;
    const password = this.state.textField.password;
    const name = this.state.textField.name;
    // const gender = this.state.textField.gender;
    const email = this.state.textField.email;
    // const phone = this.state.textField.phoneNumber;
    const role = this.state.textField.role;
    const vendor = this.state.textField.vendorValue;
    const agency = this.state.textField.agency;

    const json = (response) => response.json();


    fetch(`https://source.adlsandbox.com/api/admin/register?username=${username}&password=${password}&password_confirmation=${password}&name=${name}&email=${email}&role=${role}&vendor=${vendor}&agency=${agency}`, {
      method: 'POST',
      type: 'cors',
    })
      .then(json)
      .then((respons) => {
        console.log(respons);
        if (respons.user.token !== '') {
          this.setState({
            currentTab: 1,
            isRegistered: true,
            textField: {
              name: '',
              email: '',
              username: '',
              password: '',
              // gender: '',
              phoneNumber: '',
              role: '',
              vendor: '',
              agency: '',
            },
          });
        }
      }).catch((error) => {
        console.log(`error: ${error}`);
        this.setState({
          errorFetch: 'Register fail, please check again', isError: true,
        });
      });

    fetch('https://source.adlsandbox.com/api/admin/all', {
      method: 'GET',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({allData: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
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
    }    else if (param == 'error') {
      this.setState({
        isError: false,
      });
    }        else {
      this.setState({
        onEdit: false,
      });
    }
  }

  _handleValidationName(input, data) {
    this.setState({
      textField: {...this.state.textField, name: data},
    });
  }

  _handleValidationUserName(input, data) {
    this.setState({
      textField: {...this.state.textField, username: data},
    });
  }

  _handleValidationRole(input, index, data) {
    const target = input.target;

    if (data === '') {
      this.setState({
        isRoleValid: false,
      });
    }

    if (enableAgency.includes(data)) {
      this.setState({disableVendorButton: true});
      this.setState({disableAgencyButton: false});
    } else if (enableVendor.includes(data)) {
      this.setState({disableAgencyButton: true});
      this.setState({disableVendorButton: false});
    } else {
      this.setState({disableAgencyButton: true});
      this.setState({disableVendorButton: true});
    }


    this.setState({
      textField: {...this.state.textField, role: data},
    });
  }

  _handleValidationAgency(input, data) {
    let dataInput = input.toLowerCase();
    let dataAgency = data.map((val) => val.toLowerCase());
    this.setState({
      isAgencyValid: dataAgency.includes(dataInput),
    });
    if (dataAgency.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, agency: dataInput},
      });
    }
  }

  _handleValidationVendor(input, data) {
    let dataInput = input;
    // console.log(data);
    const found = data.find((element) => {
      if (element.textKey == input) {
        return (element);
      } else {
        return null;
      }
    });
    console.log(found);
    if (found === undefined) {
      this.setState({isVendorValid: false});
    } else {
      this.setState({
        textField: {...this.state.textField, vendor: dataInput, vendorValue: found.valueKey},
      });
    }
    // }
  }
  _handleValidationGender(input, data) {
    let dataInput = input.toLowerCase();
    let dataGender = data.map((val) => val.toLowerCase());
    this.setState({
      isGenderValid: dataGender.includes(dataInput),
    });
    if (dataGender.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, gender: dataInput},
      });
    }
  }
  _handleValidationNumber(e, input) {
    this.setState({
      isPhoneValid: !isNaN(input),
      textField: {...this.state.textField, phoneNumber: input},
    });
  }

  _handleValidationNumberTemp(e, input) {
    this.setState({
      isPhoneValidTemp: !isNaN(input),
      phoneNumberTemp: input,
    });
  }

  _handleValidationEmail(e, input) {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      textField: {...this.state.textField, email: input},
    });
  }

  _handleValidationEmailTemp(e, input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      isEmailValidTemp: re.test(String(input).toLowerCase()),
      emailTemp: input,
    });
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
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const name = this.state.nameTemp;
      const email = this.state.emailTemp;
      const id = this.state.idTemp;
      const role = this.state.roleTemp;
      fetch(`https://source.adlsandbox.com/api/admin/edit/${id}?name=${name}&email=${email}&role=${role}`, {
        method: 'PUT',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((respons) => {
          // console.log(respons);
          this.setState({
            redirect: true,
          });
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }
  _handleDelete(id) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      fetch(`https://source.adlsandbox.com/api/admin/delete?ids=${id}`, {
        method: 'DELETE',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((respons) => {
          // console.log(respons);
          this.setState({
            redirect: true,
          });
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }
  _onTouchDelete(data) {
    this._handleDelete(data);
    fetch('https://ibase.adlsandbox.com:8081/api/admin/all', {
      method: 'GET',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Content-Type': 'application/json',
      },
    }).then(json)
      .then((respons) => {
        // console.log(respons);
        this.setState({allData: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
    this._handleClose('delete');
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
    let actionsUpdate = (val) => [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={() => this._handleClose(val)}
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

    let _renderCreateUser = () => {
      const dataRole = this.state.dataRole;
      const user_data = this.state.role;
      // console.log(agentShowRole.includes(user_data) );
      return (
        <div>
          <h3 style={styles.navigation}>Create User</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <Dialog
                    title="Failed to Register"
                    actions={actionsUpdate('error')}
                    modal={true}
                    open={this.state.isError}
                    onRequestClose={() => this.setState({
                      isError: false,
                    })}
                  >
                    {this.state.errorFetch}
                  </Dialog>
                  <TextField
                    required={true}
                    hintText="Username"
                    value={this.state.textField.username}
                    floatingLabelText="Username"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this._handleValidationUserName(e, input);
                    }}
                  />

                  <TextField
                    required={true}
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                    fullWidth={true}
                    value={this.state.textField.password}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, password: input},
                      });
                    }}
                  />

                  <TextField
                    required={true}
                    value={this.state.textField.name}
                    hintText="Name User"
                    floatingLabelText="Name"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this._handleValidationName(e, input);
                    }}
                  />

                  <TextField
                    fullWidth={true}
                    required={true}
                    value={this.state.textField.email}
                    hintText="Email"
                    floatingLabelText="Email"
                    errorText={!this.state.isEmailValid}
                    onChange={(e, input) => {
                      this._handleValidationEmail(e, input);
                    }}
                  />
                  <TextField
                    fullWidth={true}
                    required={true}
                    hintText="Phone Number"
                    floatingLabelText="Phone Number"
                    value={this.state.textField.phoneNumber}
                    errorText={!this.state.isPhoneValid}
                    onChange={(e, input) => {
                      this._handleValidationNumber(e, input);
                    }}
                  />

                  <SelectField
                    fullWidth={true}
                    floatingLabelText="Role"
                    name="role"
                    value={this.state.textField.role}
                    onChange={(e, input, value) => {
                      this._handleValidationRole(e, input, value);
                    }}
                  >
                    {dataRole !== '' ? dataRole.map((data, j) => {
                      return (<MenuItem key={j} value={data.value} primaryText={data.name} />);
                    }) : ''}

                  </SelectField>


                  {vendorShowRole.includes(user_data) ? <AutoComplete
                    required={true}
                    fullWidth={true}
                    floatingLabelText="Vendor"
                    filter={AutoComplete.caseInsensitiveFilter}
                    disabled={this.state.disableVendorButton}
                    openOnFocus={true}
                    dataSource={this.state.dataVendor}
                    dataSourceConfig={dataSourceConfig}
                    searchText={this.state.textField.vendor}
                    onUpdateInput={(input, dataSource) => {
                      this._handleValidationVendor(input, dataSource);
                    }}
                    errorText={!this.state.isVendorValid}
                                                        /> : ''}
                  {agentShowRole.includes(user_data) ? <AutoComplete
                    disabled={this.state.disableAgencyButton}
                    required={true}
                    fullWidth={true}
                    floatingLabelText="Agency"
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                    dataSource={this.state.dataAgency}
                    searchText={this.state.textField.agency}
                    onUpdateInput={(input, dataSource) => {
                      this._handleValidationAgency(input, dataSource);
                    }}
                    errorText={!this.state.isAgencyValid}
                                                       /> : ''}


                  <RaisedButton
                    label="Register"
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
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            value={this.state.nameTemp}
            hintText="Name User"
            floatingLabelText="Name"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                nameTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.emailTemp}
            hintText="Email"
            floatingLabelText="Email"
            errorText={!this.state.isEmailValidTemp}
            onChange={(e, input) => {
              this._handleValidationEmailTemp(e, input);
            }}
          />
          {/* <TextField
            fullWidth={true}
            required={true}
            hintText="Phone Number"
            floatingLabelText="Phone Number"
            value={this.state.phoneNumberTemp}
            errorText={!this.state.isPhoneValid}
            onChange={(e, input) => {
              this._handleValidationNumberTemp(e, input);
            }}
          /> */}
        </div>
      );
    };
    let _renderManageUser = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage User</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>

              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="User Updated"
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
                    keys="id"
                    className="mdl-data-table"
                    columns={this.state.role !== 'admin' ? this.NonAdmincolumns : this.columns}
                    onChangePage={((page) => this.setState({
                      allData: {...this.state.allData, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.allData.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.allData.current_page - 1}
                    total={this.state.allData.total}
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
        {this.state.redirect ? <React.Fragment>{window.location.reload()}</React.Fragment> : '' }
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="Create User"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                    isRegistered: false,
                  });
                }}
              >
                {this.state.currentTab == 0 && _renderCreateUser()}
              </Tab>
              <Tab
                value={1}
                label="Manage User"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}

              >
                {this.state.loaded ? _renderManageUser() : _renderLoading()}
              </Tab>
            </Tabs>
            <Snackbar
              open={this.state.isRegistered}
              message="User Added"
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            />
          </Col>
        </Paper>
      </Row>
    );
  }
}
