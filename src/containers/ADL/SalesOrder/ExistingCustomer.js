import React, {Component} from 'react';
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
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {grey50, teal300, red400} from 'material-ui/styles/colors';
import Cookies from 'universal-cookie';
import moment from  'moment';
import Dialog from 'material-ui/Dialog';


const cookies = new Cookies();

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


export default class ExistingCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cookies: '',
      textField: [],
      dataCity: [],
      dataCluster: [],
      dataStreet: [],
      dataFullAddress: [],
      dataCustomer: [],
      selectedCustomer: [],
      isClusterValid: true,
      isStreetValid: true,
      isFullAddressValid: true,
      isCityValid: true,
      loadSelectedCustomer: false,
    };

    const ChooseCustBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() => {
            const custChosen = [];
            custChosen.push(data);
            this.setState({
              selectedCustomer: custChosen,
              loadSelectedCustomer: true,
            });
          }
          }
        >
          Choose</button>
      </div>
      );

    this.columns = [
      {
        id: 1,
        title: 'id',
        prop: 'id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Subscriber ID',
        prop: 'subs_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'DOB',
        prop: 'dob',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'DOB Place',
        prop: 'birth_place',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Gender',
        prop: 'gender',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Group',
        prop: 'group',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'ID Type',
        prop: 'type_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'ID Number',
        prop: 'id_number',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'ID Address',
        prop: 'id_address',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Primary Phone',
        prop: 'phone1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Alternative Phone 1',
        prop: 'phone2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Alternative Phone 2',
        prop: 'phone3',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Email',
        prop: 'email1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Alternative Email',
        prop: 'email2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Created At',
        prop: 'created_at',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'updated At',
        prop: 'updated_at',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
        // {
        //   id: 17,
        //   title: 'Action',
        //   render: EditBtn,
        //   width: '5%',
        //   headerClass: 'mdl-data-table__cell--non-numeric',
        // },
      {
        id: 18,
        title: 'Action',
        render: ChooseCustBtn,
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }

  componentWillMount() {
    const cookieData = cookies.get('ssid');

    if (cookieData !== undefined && cookieData !== '') {
      this.setState({cookies: cookieData});
    }
  }

  componentDidMount() {
    const cookieData = this.state.cookies;
    const json = (response) => response.json();
    fetch('https://source.adlsandbox.com/api/homespassed/sort', {
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

        const dataCityObject = respons[0].city;
        const dataCity = [];
        let i;
        for (i = 0;i < dataCityObject.length;i++) {
          dataCity.push(dataCityObject[i].city);
        }
        this.setState({dataCity: dataCity});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

    fetch('https://source.adlsandbox.com/api/product/all', {
      method: 'GET',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${cookieData}`,
        'Content-Type': 'application/json',
      },
    })
      .then(json)
      .then((respons) => {
        this.setState({
          dataProduct: respons.data,
          productLoaded: true,
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

    fetch('https://source.adlsandbox.com/api/customer/all', {
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
        this.setState({dataCustomer: respons.data, loaded: true});
      }).catch((error) => {
        console.log(`error: ${error}`);
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
        textField: {...this.state.textField, city: dataInput.toUpperCase(), homepassedId: ''}, // homepassedID just for SAMPLE
      });
      this._getClusterDataAPI(dataInput);
    } else {
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
        textField: {...this.state.textField, cluster: dataInput.toUpperCase()}, // homepassedID just for SAMPLE
      });
      this._getStreetDataAPI(dataInput);
    } else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }
  _handleValidationStreet(input, data) {
    let dataInput = input.toLowerCase();
    let dataStreet = data.map((val) => val.toLowerCase());
    this.setState({
      isClusterValid: dataStreet.includes(dataInput),
    });
    if (dataStreet.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, street: dataInput.toUpperCase(), homepassedId: ''}, // homepassedID just for SAMPLE
      });
      this._getFullAddressDataAPI(dataInput);
    } else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }
  _handleValidationFullAddress(input, data) {
    let dataInput = input.toLowerCase();
    let dataFullAddress = data.map((val) => val.toLowerCase());
    this.setState({
      isClusterValid: dataFullAddress.includes(dataInput),
    });
    if (dataFullAddress.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, fullAddress: dataInput, homepassedId: ''}, // homepassedID just for SAMPLE
      });
      this._getHomespassedId(dataInput);
    } else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }

  _getClusterDataAPI(city) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();

      fetch(`https://source.adlsandbox.com/api/homespassed/sort?city=${city}`, {
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

          const dataClusterObject = respons;
          const dataCluster = [];
          let i;
          for (i = 0;i < dataClusterObject.length;i++) {
            dataCluster.push(dataClusterObject[i].cluster);
          }
          this.setState({
            dataCluster: dataCluster,
            textField: {...this.state.textField, cluster: '', street: '', fullAddress: '', olt: '', region: '', fdt: ''},
          });
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }
  _getStreetDataAPI(cluster) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();

      fetch(`https://source.adlsandbox.com/api/homespassed/sort?cluster=${cluster}`, {
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

          const dataStreetObject = respons;
          const dataStreet = [];
          let i;
          for (i = 0;i < dataStreetObject.length;i++) {
            dataStreet.push(dataStreetObject[i].street);
          }
          this.setState({
            dataStreet: dataStreet,
            textField: {...this.state.textField, street: '', fullAddress: '', olt: '', region: '', fdt: ''},
          });
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  _getFullAddressDataAPI(street) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();

      fetch(`https://source.adlsandbox.com/api/homespassed/sort?street=${street}`, {
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

          const dataFullAddressObject = respons;
          const dataFullAddress = [];
          let i;
          for (i = 0;i < dataFullAddressObject.length;i++) {
            dataFullAddress.push(dataFullAddressObject[i].full_address);
          }
          this.setState({
            dataFullAddress: dataFullAddress,
            textField: {...this.state.textField,  fullAddress: '', olt: '', region: '', fdt: ''},
          });
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }
  _getHomespassedId(address) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();

      fetch(`https://source.adlsandbox.com/api/homespassed/sort?full_address=${address}`, {
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
          const dataHomepass = respons[0];
          this.setState({
            textField: {...this.state.textField,  olt: dataHomepass.olt_location, region: dataHomepass.region, fdt: dataHomepass.fdt_code, homepassedId: dataHomepass.homepass_id}});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  render() {
    let _renderCustomerTable = () => {
      return (
        <Row>
          <Card style={style.card}>
            <Col md={12} lg={12} xs={12} sm={12} >
              <MaterialContainer
                keys="id"
                className="mdl-data-table"
                columns={this.columns}
                dataArray={this.state.dataCustomer}
                draggable={false}
                sortable={false}
                sortBy={{prop: 'id', order: 'desc'}}
                pageSizeOptions={[10]}
              />
            </Col>
          </Card>
        </Row>);
    };
    let _renderSelectedCustomerTable = (loadSelectedCustomer) => {
      if (loadSelectedCustomer) {
        return (
          <Row>
            <Card style={style.card}>
              <Col md={12} lg={12} xs={12} sm={12} >
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={this.columns}
                  dataArray={this.state.selectedCustomer}
                  draggable={false}
                  sortable={false}
                  sortBy={{prop: 'id', order: 'desc'}}
                  pageSizeOptions={[10]}
                />
              </Col>
            </Card>
          </Row>);
      }
    };
    let _renderCustomerAddressForm = () => {
      return (
        <Row>
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
                  dataSource={this.state.dataCity}
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
                  dataSource={this.state.dataCluster}
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
                  dataSource={this.state.dataStreet}
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
                  dataSource={this.state.dataFullAddress}
                  onUpdateInput={(input, dataSource) => {
                    this._handleValidationFullAddress(input, dataSource);
                  }}
                  errorText={!this.state.isFullAddressValid}
                />
              </Col>
              <Col xs={12} md={12} lg={12}>
                <TextField
                  disabled={true}
                  value={this.state.textField.olt}
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
                  value={this.state.textField.region}
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
                value={this.state.textField.fdt}
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
                disabled={!this.state.productLoaded}
              />
            </form>
          </Card>
        </Row>
      );
    };
    return (
      <Row className="m-b-15">
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12} >
            {_renderCustomerTable()}
            {_renderSelectedCustomerTable(this.state.loadSelectedCustomer)}
            {_renderCustomerAddressForm()}
          </Col>
        </Paper>
      </Row>
    );
  }
}
