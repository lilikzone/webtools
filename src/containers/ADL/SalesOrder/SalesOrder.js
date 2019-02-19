import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Card} from 'material-ui/Card';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import MenuItem from 'material-ui/MenuItem';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Data from '../../../data';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Subheader} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
const dataCity = [
  'Tangerang',
  'Tangerang Selatan',
  'Bogor',
  'Depok',
  'Bekasi',
  'Banjarmasin',
  'Balikpapan',
  'Makassar',
  'Denpasar',
  'Jakarta Selatan',
];
const dobPlace = [
  'KAB BOGOR',
  'KAB PONOGORO',
  'KAB LEBAK',
  'KAB LOMBOK BARAT',
  'KAB KUPANG',
  'KAB GORONTALO',
];
const dataTypePayment = ['Regular', 'Pay After Installation'];
const idType = ['KTP', 'KITAS', 'SIM'];
// all data with empty array will considered false in type input
const dataCluster = [];
const dataStreet = [];
const dataAddress = [];
const style = {
  card: {
    padding: 20,
  },
  columns: {
    action: {
      width: '10%',
      color: 'black',
    },
    name: {
      width: '20%',
      color: 'black',
    },
    promo: {
      width: '20%',
      color: 'black',
    },
    price: {
      width: '20%',
      color: 'black',
    },
  },
};
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
  // id','name','email','role','is_admin','created_at','updated_at
  // {id: 0, title: 'Action', render: CheckBtn, width: '5%', headerClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 1, title: 'Avatar', render: UserPic, width: '50px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {
    id: 1,
    title: 'Username',
    prop: 'username',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 4,
    title: 'Role',
    prop: 'role',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 2,
    title: 'Name',
    prop: 'name',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 0,
    title: 'City',
    prop: 'City',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 3,
    title: 'Email',
    prop: 'email',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 7,
    title: 'Vendor',
    prop: 'vendor',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 4,
    title: 'Agency',
    prop: 'agency',
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  // {id: 5, title: 'Created at', prop: 'created_at', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 6, title: 'Updated at', prop: 'updated_at', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 6, title: 'Ip address', prop: 'ip_address', width: '150px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 7, title: 'Country', prop: 'country.name', visible: false, width: '150px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 8, title: 'Code', prop: 'country.code', width: '80px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {
    id: 9,
    title: 'Action',
    render: EditBtn,
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 10,
    title: 'Action',
    render: DeleteBtn,
    width: '10%',
    headerClass: 'mdl-data-table__cell--non-numeric',
  },
];

export default class SalesOrder extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: '6584278700',
        name: 'Anna',
        last_name: 'Jackson',
        email: 'ajackson0@forbes.com',

        ip_address: '51.46.225.94',
        country: {id: 1, name: 'China', code: 'CN'},
        city: {id: 1, name: 'Xiaoruo'},
        pic: 'https://robohash.org/inquiaearum.bmp?size=50x50&set=set1',
      },
      {
        id: '5918167633',
        name: 'Douglas',
        last_name: 'Morales',
        email: 'dmorales1@noaa.gov',

        ip_address: '238.135.116.252',
        country: {id: 2, name: 'China', code: 'CN'},
        city: {id: 2, name: 'Daqiao'},
        pic:
          'https://robohash.org/perferendisminimaautem.bmp?size=50x50&set=set1',
      },
      {
        id: '0907148174',
        name: 'Adam',
        last_name: 'Walker',
        email: 'awalker2@cmu.edu',
        ip_address: '228.254.30.193',
        country: {id: 3, name: 'Vietnam', code: 'VN'},
        city: {id: 3, name: 'Phú Thái'},
        pic: 'https://robohash.org/possimuscumesse.jpg?size=50x50&set=set1',
      },
      {
        id: '42346855010',
        name: 'Jennifer',
        last_name: 'Pierce',
        email: 'jpierce3@wired.com',

        ip_address: '73.208.24.215',
        country: {id: 4, name: 'Philippines', code: 'PH'},
        city: {id: 4, name: 'Nalsian Norte'},
        pic:
          'https://robohash.org/architectoofficianeque.bmp?size=50x50&set=set1',
      },
      {
        id: '9010284751',
        name: 'Sarah',
        last_name: 'Williamson',
        email: 'swilliamson4@auda.org.au',

        ip_address: '54.52.225.20',
        country: {id: 5, name: 'Colombia', code: 'CO'},
        city: {id: 5, name: 'La Estrella'},
        pic: 'https://robohash.org/quiteneturdistinctio.jpg?size=50x50&set=set1',
      },
      {
        id: '2208992458',
        name: 'Carolyn',
        last_name: 'Snyder',
        email: 'csnyder5@reverbnation.com',

        ip_address: '104.79.186.2',
        country: {id: 6, name: 'Dominican Republic', code: 'DO'},
        city: {id: 6, name: 'La Caya'},
        pic: 'https://robohash.org/vitaeomnisprovident.png?size=50x50&set=set1',
      },
      {
        id: '8697834236',
        name: 'Johnny',
        last_name: 'Bryant',
        email: 'jbryant6@wired.com',

        ip_address: '159.105.102.24',
        country: {id: 7, name: 'China', code: 'CN'},
        city: {id: 7, name: 'Baisha'},
        pic: 'https://robohash.org/sitminimacum.bmp?size=50x50&set=set1',
      },
      {
        id: '4396016603',
        name: 'Jack',
        last_name: 'Hayes',
        email: 'jhayes7@furl.net',

        ip_address: '207.125.56.19',
        country: {id: 8, name: 'Spain', code: 'ES'},
        city: {id: 8, name: 'Valladolid'},
        pic: 'https://robohash.org/consequaturharumnon.bmp?size=50x50&set=set1',
      },
      {
        id: '0775707031',
        name: 'Nancy',
        last_name: 'Lane',
        email: 'nlane8@wsj.com',

        ip_address: '71.186.189.185',
        country: {id: 9, name: 'China', code: 'CN'},
        city: {id: 9, name: 'Diaoling'},
        pic:
          'https://robohash.org/omnisnecessitatibusaut.bmp?size=50x50&set=set1',
      },
    ];
    this.state = {
      isGetProduct: false,
      isClusterValid: true,
      isTypePaymentValid: true,
      isStreetValid: true,
      isFullAddressValid: true,
      isCityValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      currentTab: 0,
      textField: {
        name: '',
        olt: '',
        city: '',
        region: '',
        fdt: '',
        cluster: '',
        street: '',
        fullAddress: '',
        homepassedId: '',
        typePayment: '',
        idType: '',
        dobPlace: '',
        idNumber: '',
        address: '',
        phone1: '',
        phone2: '',
        phone3: '',
        email1: '',
        email2: '',
        dob: {},
        installationDate: {},
      },
    };
  }

  _handleTouchTap() {
    this.data.push({
      name: this.state.textField.name,
      olt: this.state.textField.olt,
      city: this.state.textField.city,
      region: this.state.textField.region,
      fdt: this.state.textField.fdt,
      cluster: this.state.textField.cluster,
      street: this.state.textField.street,
      fullAddress: this.state.textField.fullAddress,
      homepassedId: this.state.textField.homepassedId,
      typePayment: this.state.textField.typePayment,
      idType: this.state.textField.idType,
      dobPlace: this.state.textField.dobPlace,
      idNumber: this.state.textField.idNumber,
      address: this.state.textField.address,
      phone1: this.state.textField.phone1,
      phone2: this.state.textField.phone2,
      phone3: this.state.textField.phone3,
      email1: this.state.textField.email1,
      email2: this.state.textField.email2,
      dob: this.state.textField.dob,
      installationDate: this.state.textField.installationDate,
    });
    this.setState({
      currentTab: 1,
      isRegistered: true,
      textField: {},
    });
  }

  _handleValidationEmail(e, input, email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      isEmailValid: re.test(String(input).toLowerCase()),
      textField: {...this.state.textField, [email]: input},
    });
    // this.data.push({'email': this.state.textField.email});
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

  _handleValidationCity(input, data) {
    let dataInput = input.toLowerCase();
    let dataCity = data.map((val) => val.toLowerCase());
    this.setState({
      isCityValid: dataCity.includes(dataInput),
    });
    if (dataCity.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, city: dataInput, homepassedId: `${dataInput } SAMPLE ONLY`}, // homepassedID just for SAMPLE
      });
    }    else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }
  _handleValidationCluster(input, data) {
    let dataInput = input.toLowerCase();
    let dataCluster = data.map((val) => val.toLowerCase());
    this.setState({
      isClusterValid: dataCluster.includes(dataInput),
    });
    if (dataCluster.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, cluster: dataCluster},
      });
    }
  }
  _handleValidationStreet(input, data) {
    let dataInput = input.toLowerCase();
    let dataStreet = data.map((val) => val.toLowerCase());
    this.setState({
      isStreetValid: dataStreet.includes(dataInput),
    });
    if (dataStreet.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, street: dataStreet},
      });
    }
  }
  _handleValidationTypePayment(input, data) {
    let dataInput = input.toLowerCase();
    let dataTypePayment = data.map((val) => val.toLowerCase());
    this.setState({
      isTypePaymentValid: dataTypePayment.includes(dataInput),
    });
    if (dataTypePayment.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, typePayment: dataInput},
      });
    }
  }
  _handleValidationFullAddress(input, data) {
    let dataInput = input.toLowerCase();
    let dataFullAddress = data.map((val) => val.toLowerCase());
    this.setState({
      isFullAddressValid: dataFullAddress.includes(dataInput),
    });
    if (dataFullAddress.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, fullAddress: dataFullAddress},
      });
    }
  }

  render() {
    let _renderProduct = (data) => {
      if (data) {
        return (
          <div>
            <h1 style={{marginTop: 30, textAlign: 'center'}}>Product</h1>
            <Card style={style.card}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn style={style.columns.name}>
                      Name
                    </TableHeaderColumn>
                    <TableHeaderColumn style={style.columns.promo}>
                      Promo
                    </TableHeaderColumn>
                    <TableHeaderColumn style={style.columns.price}>
                      Price
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Data.tablePage.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableRowColumn style={style.columns.name}>
                        {item.name}
                      </TableRowColumn>
                      <TableRowColumn style={style.columns.promo}>
                        {item.price}
                      </TableRowColumn>
                      <TableRowColumn style={style.columns.price}>
                        {item.category}
                      </TableRowColumn>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        );
      }
    };
    let _renderCustomerForm = () => {
      return (
        <Card style={style.card}>
          <form>
            <Col xs={12} md={6} lg={6}>
              <AutoComplete
                fullWidth={true}
                required={true}
                floatingLabelText="City"
                hintText="City"
                searchText={this.state.textField.city}
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={dataCity}
                onUpdateInput={(input, dataSource) => {
                  this._handleValidationCity(input, dataSource);
                }}
                errorText={!this.state.isCityValid}
              />

              <AutoComplete
                fullWidth={true}
                required={true}
                floatingLabelText="Cluster"
                hintText="Cluster"
                searchText={this.state.textField.cluster}
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={dataCluster}
                onUpdateInput={(input, dataSource) => {
                  this._handleValidationCluster(input, dataSource);
                }}
                errorText={!this.state.isClusterValid}
              />

              <AutoComplete
                fullWidth={true}
                required={true}
                floatingLabelText="Street"
                hintText="Street"
                searchText={this.state.textField.street}
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={dataStreet}
                onUpdateInput={(input, dataSource) => {
                  this._handleValidationStreet(input, dataSource);
                }}
                errorText={!this.state.isStreetValid}
              />

              <AutoComplete
                fullWidth={true}
                required={true}
                floatingLabelText="Full Address"
                hintText="Full Address"
                searchText={this.state.textField.fullAddress}
                filter={AutoComplete.caseInsensitiveFilter}
                openOnFocus={true}
                dataSource={dataAddress}
                onUpdateInput={(input, dataSource) => {
                  this._handleValidationFullAddress(input, dataSource);
                }}
                errorText={!this.state.isFullAddressValid}
              />
            </Col>
            <Col xs={12} md={12} lg={12}>
              <TextField
                disabled={true}
                value={`${this.state.textField.city} SAMPLE WITH LONG TEXT`}
                style={{marginRight: 20}}
                hintText="OLT"
                floatingLabelText="OLT"
                fullWidth={false}
                onChange={(e, input) => {
                  this.setState({
                    textField: {...this.state.textField, olt: input},
                  });
                }}
              />
              <TextField
                disabled={true}
                value={`${this.state.textField.city} SAMPLE ONLY`}
                hintText="Region"
                floatingLabelText="Region"
                fullWidth={false}
                onChange={(e, input) => {
                  this.setState({
                    textField: {...this.state.textField, region: input},
                  });
                }}
              />
            </Col>
            <TextField
              disabled={true}
              value={`${this.state.textField.city} SAMPLE ONLY`}
              hintText="FDT"
              floatingLabelText="FDT"
              fullWidth={false}
              style={{marginRight: 20}}
            />
            <RaisedButton
              label="Get Product"
              secondary={true}
              style={style.button}
              icon={<FontIcon className="material-icons">attachment</FontIcon>}
              onTouchTap={() => {
                this.setState({
                  isGetProduct: true,
                });
              }}
            />
          </form>
        </Card>
      );
    };
    let _renderSelection = (data) => {
      return data.map((val, index) => {
        return <MenuItem key={index} value={val} primaryText={val} />;
      });
    };
    let _renderCustomerData = () => {
      return (
        <div>
          <h1 style={{marginTop: 15, textAlign: 'center'}}>Customer Data</h1>
          <Card style={style.card}>
            <form>
              <Col xs={12} md={6} lg={6}>
                <TextField
                  disabled={true}
                  value={this.state.textField.homepassedId}
                  hintText="Homepassed ID"
                  floatingLabelText="Homepassed ID"
                  fullWidth={true}
                />
                <AutoComplete
                  fullWidth={true}
                  required={true}
                  floatingLabelText="Type Payment"
                  hintText="Type Payment"
                  searchText={this.state.textField.typePayment}
                  filter={AutoComplete.caseInsensitiveFilter}
                  openOnFocus={true}
                  dataSource={dataTypePayment}
                  onUpdateInput={(input, dataSource) => {
                    this._handleValidationTypePayment(input, dataSource);
                  }}
                  errorText={!this.state.isTypePaymentValid}
                />
                <TextField
                  value={this.state.textField.name}
                  hintText="Name"
                  floatingLabelText="Name"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this._handleValidationName(e, input);
                  }}
                />
                <DatePicker
                  hintText="Date of Birth"
                  floatingLabelText="Date of Birth"
                  fullWidth={true}
                  value={this.state.textField.dob}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        dob: input,
                      },
                    });
                  }}
                />
                <SelectField
                  floatingLabelText="DoB Place"
                  value={this.state.textField.dobPlace}
                  fullWidth={true}
                  onChange={(e, index, value) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        dobPlace: value,
                      },
                    });
                  }}
                >
                  {_renderSelection(dobPlace)}
                </SelectField>
                <SelectField
                  floatingLabelText="ID Type"
                  fullWidth={true}
                  value={this.state.textField.idType}
                  onChange={(e, index, value) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        idType: value,
                      },
                    });
                  }}
                >
                  {_renderSelection(idType)}
                </SelectField>
                <TextField
                  required={true}
                  value={this.state.textField.idNumber}
                  hintText="ID Number"
                  floatingLabelText="ID Number"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        idNumber: input,
                      },
                    });
                  }}
                />
                <TextField
                  hintText="Address"
                  floatingLabelText="Address"
                  value={this.state.textField.address}
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        address: input,
                      },
                    });
                  }}
                />
                <TextField
                  required={true}
                  value={this.state.textField.phone1}
                  hintText="+62"
                  floatingLabelText="Phone 1"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        phone1: input,
                      },
                    });
                  }}
                />
                <TextField
                  required={true}
                  value={this.state.textField.phone2}
                  hintText="+62"
                  floatingLabelText="Phone 2"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        phone2: input,
                      },
                    });
                  }}
                />
                <TextField
                  required={true}
                  value={this.state.textField.phone3}
                  hintText="+62"
                  floatingLabelText="Phone 3"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        phone3: input,
                      },
                    });
                  }}
                />
                <TextField
                  required={true}
                  value={this.state.textField.email1}
                  hintText="Email"
                  floatingLabelText="Email 1"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        email1: input,
                      },
                    });
                  }}
                />
                <TextField
                  required={true}
                  value={this.state.textField.email2}
                  hintText="Email"
                  floatingLabelText="Email 2"
                  fullWidth={true}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        email2: input,
                      },
                    });
                  }}
                />
                <DatePicker
                  hintText="Installation Date"
                  floatingLabelText="Installation Date"
                  fullWidth={true}
                  value={this.state.textField.installationDate}
                  onChange={(e, input) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        installationDate: input,
                      },
                    });
                  }}
                />
              </Col>
            </form>
          </Card>
        </div>
      );
    };
    let _renderButton = (isCoverage) => {
      if (isCoverage.length > 0) {
        return (
          <RaisedButton
            label="Register"
            secondary={true}
            style={styles.raisedButton}
            onTouchTap={() => this._handleTouchTap()}
          />
        );
      } else {
        return (
          <RaisedButton
            label="Save Customer Leads"
            secondary={true}
            style={styles.raisedButton}
            onTouchTap={() => this._handleTouchTap()}
          />
        );
      }
    };
    let _renderCreateUser = () => {
      return (
        <div>
          <h1 style={{marginTop: 15, textAlign: 'center'}}>Region Check</h1>
          <Row>
            <Col xs={12} md={12} lg={12}>
              {_renderCustomerForm()}
              {_renderProduct(this.state.isGetProduct)}
              {_renderCustomerData()}
              {_renderButton(this.state.textField.homepassedId)}
            </Col>
          </Row>
        </div>
      );
    };
    let _renderManageUser = () => {
      return (
        <div>
          <h1 style={{marginTop: 15, textAlign: 'center'}}>Customer Table</h1>
          <Card style={style.card}>
            <Row>
              <Col xs={12} md={12} lg={12}>
                <div className="mdl-layout mdl-layout--no-drawer-button container">
                  <div className="mdl-layout--fixed-drawer" id="asa">
                    <br />
                    <MaterialContainer
                      keys="id"
                      className="mdl-data-table"
                      columns={columns}
                      dataArray={this.data}
                      draggable={false}
                      sortable={false}
                      sortBy={{prop: 'country.name', order: 'asc'}}
                      pageSizeOptions={[5]}
                    />
                    {_renderProduct(true)}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </div>
      );
    };
    return (
      <Row className="m-b-15">
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="New Customer"
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
                label="Existing Customer"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.currentTab == 1 && _renderManageUser()}
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
