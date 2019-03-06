import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Card} from 'material-ui/Card';
import 'react-table-components/styles/styles.css';
import '../../table/datatable.scss';
import {Tabs, Tab} from 'material-ui/Tabs';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Subheader, DatePicker} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Cookies from 'universal-cookie';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import moment from  'moment';


const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/customer/';
const dataGender = ['Male', 'Female'];
const dataRole = [
  'Admin',
  'Homepassed',
  'Operation',
  'Product',
  'Finance',
  'Internal Sales',
  'Sales Admin',
  'Sales',
  'Manage Service',
  'Dispacher',
  'Installer',
  'CS',
  'CS External',
];
const dataVendor = ['Vendor1', 'Vendor2', 'Vendor3'];
const dataAgency = ['Agency1', 'Agency2'];
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

export default class ManageCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      updateAlert: false,
      cookies: '',
      keyword: '',
      onEdit: false,
      nameTemp: '',
      emailTemp: '',
      phoneNumberTemp: '',
      deleteAlert: false,
      deleteId: '',
      isGenderValid: true,
      isEmailValid1: true,
      isEmailValid2: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      isClusterValid: true,
      isStreetValid: true,
      isFullAddressValid: true,
      isCityValid: true,
      currentTab: 0,
      textField: {
        customerName: '',
        subscriberId: '',
        dobPlace: '',
        dob: '',
        typeId: '',
        idNumber: '',
        idAddress: '',
        phone1: '',
        phone2: '',
        phone3: '',
        email1: '',
        email2: '',
        olt: '',
        city: '',
        region: '',
        fdt: '',
        cluster: '',
        street: '',
        fullAddress: '',
        homepassedId: '',
      },
      allCustomer: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      dataTemp: [],
      dataCity: [],
      dataCluster: [],
      dataStreet: [],
      dataFullAddress: [],
      custDataArray: [],
      notifMessage: '',
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() =>
            this.setState({
              onEdit: true,
              dataTemp: data,
              editedId: data.id,
            })
          }
        >
          Edit
        </button>
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
        id: 3,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'DOB',
        prop: 'dob',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Homepassed ID',
        prop: 'homepassed_id',
        width: '5.5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'DOB Place',
        prop: 'birth_place',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Gender',
        prop: 'gender',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Group',
        prop: 'group',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'ID Type',
        prop: 'type_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'ID Number',
        prop: 'id_number',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'ID Address',
        prop: 'id_address',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Primary Phone',
        prop: 'phone1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Alternative Phone 1',
        prop: 'phone2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Alternative Phone 2',
        prop: 'phone3',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Email',
        prop: 'email1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Alternative Email',
        prop: 'email2',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 17,
        title: 'Sales Name',
        prop: 'sales_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 18,
        title: 'Balance',
        prop: 'balance',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 19,
        title: 'Created At',
        prop: 'created_at',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 19,
        title: 'updated At',
        prop: 'updated_at',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 20,
        title: 'Edit Action',
        render: EditBtn,
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 21,
        title: 'Delete Action',
        render: DeleteBtn,
        width: '5%',
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.allCustomer.current_page != this.state.allCustomer.current_page) {
      this.setState({
        loaded: false,
      });
      this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
    }
  }

  _getAPICity() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
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
        // console.log(respons);

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
    }
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
            allCustomer: {
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
    this._getUpdate(`${HOSTNAME}search?keyword=${this.state.keyword}`);
  }


  componentDidMount() {
    this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
    this._getAPICity();
  }

  _onUpdate() {
    this.setState({
      updateAlert: false,
    });
  }

  _putAPI(
    apiUrl,
    id) {
    const dob = moment(this.state.dataTemp.dob).format('YYYY-MM-DD');
    const birth_place = this.state.dataTemp.birth_place;
    const gender = this.state.dataTemp.gender;
    const identification_type = this.state.dataTemp.type_id;
    const identification_number = this.state.dataTemp.id_number;
    const identification_address = this.state.dataTemp.id_address;
    const phone1 = this.state.dataTemp.phone1;
    const phone2 = this.state.dataTemp.phone2;
    const phone3 = this.state.dataTemp.phone3;
    const email1 = this.state.dataTemp.email1;
    const email2 = this.state.dataTemp.email2;
    const name = this.state.dataTemp.customer_name;


    fetch(`${apiUrl}${id}?dob=${dob}&birth_place=${birth_place}&gender=${gender}&type_id=${identification_type}&id_number=${identification_number}&id_address=${identification_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&name=${name}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        if (responseJson.status === 200) {
          this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getAPI(apiUrl, stateName) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        this.setState({
          allCustomer: responseJson,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _postAPI(apiUrl) {
    const dob = moment(this.state.textField.dob).format('YYYY-MM-DD');
    const birth_place = this.state.textField.birth_place;
    const gender = this.state.textField.gender;
    const identification_type = this.state.textField.identification_type;
    const identification_number = this.state.textField.identification_number;
    const identification_address = this.state.textField.identification_address;
    const phone1 = this.state.textField.phone1;
    const phone2 = this.state.textField.phone2;
    const phone3 = this.state.textField.phone3;
    const email1 = this.state.textField.email1;
    const email2 = this.state.textField.email2;
    const name = this.state.textField.name;
    const homepass_id = this.state.textField.homepassedId;

    // console.log(`${apiUrl}dob=${dob}&birth_place=${birth_place}&gender=${gender}&type_id=${identification_type}&id_number=${identification_number}&id_address=${identification_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&name=${name}&homepassed_id=${homepass_id}`);
    fetch(
      `${apiUrl}dob=${dob}&birth_place=${birth_place}&gender=${gender}&type_id=${identification_type}&id_number=${identification_number}&id_address=${identification_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&name=${name}&homepassed_id=${homepass_id}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // this._getAPI(`${HOSTNAME}all`, 'textField');
        if (responseJson.status === 200) {
          this.setState({
            // currentTab: 1,
            isRegistered: true,
            notifMessage: responseJson.message,
          });
        } else {
          this.setState({
            isRegistered: true,
            notifMessage: 'Something happen',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _deleteAPI(apiUrl, ids) {
    fetch(`${apiUrl}ids=${ids}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('responseJSON', responseJson);
        this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
        // this.setState({
        //   currentTab: 0,
        // });
      })
      .catch((error) => {
        console.error(error);
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
    }    else {
      this.setState({
        onEdit: false,
      });
    }
  }
  _onTouchDelete(data) {
    this._deleteAPI(`${HOSTNAME}delete?`, data);
    this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'allData');
    this._handleClose('delete');
  }

  _onDelete(data) {
    this.setState({
      deleteId: data.id,
      deleteAlert: true,
    });
  }

  _handleTouchTap() {
    this._postAPI(
      `${HOSTNAME}register?`
    );
    this._getAPI(`${HOSTNAME}all?page=${this.state.allCustomer.current_page}`, 'textField');
    this.setState({
      textField: {
        name: '',
        customerName: '',
        subscriberId: '',
        dobPlace: '',
        dob: '',
        typeId: '',
        idNumber: '',
        idAddress: '',
        phone1: '',
        phone2: '',
        phone3: '',
        email1: '',
        email2: '',
        olt: '',
        city: '',
        region: '',
        fdt: '',
        cluster: '',
        street: '',
        fullAddress: '',
        homepassedId: '',
        birth_place: '',
        identification_number: '',
        identification_address: '',
      },
    });
  }

  _handleValidationName(input, data) {
    this.setState({
      textField: {...this.state.textField, name: data},
    });
  }

  _handleValidationCustomerName(input, data) {
    this.setState({
      textField: {...this.state.textField, name: data},
    });
  }

  _handleValidationRole(input, data) {
    let dataInput = input.toLowerCase();
    let dataRole = data.map((val) => val.toLowerCase());
    this.setState({
      isRoleValid: dataRole.includes(dataInput),
    });
    if (dataRole.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, role: dataInput},
      });
    }
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
    let dataInput = input.toLowerCase();
    let dataVendor = data.map((val) => val.toLowerCase());
    this.setState({
      isVendorValid: dataVendor.includes(dataInput),
    });
    if (dataVendor.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, vendor: dataInput},
      });
    }
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

  _handleValidationEmail(e, input, state, email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      [state]: re.test(String(input).toLowerCase()),
      textField: {...this.state.textField, [email]: input},
    });
    // this.data.push({'email': this.state.textField.email});
  }
  _handleSubmit() {
    this.setState({
      loaded: false,
      updateAlert: true,
    });
    this._putAPI(HOSTNAME,
    this.state.editedId);
    this._handleClose();
  }
  _onRequestClose=(data) => {
    this.setState({isRegistered: false});
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
          // console.log(respons);

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
          // console.log(respons);

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
          // console.log(respons);

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
          // console.log(respons);
          const dataHomepass = respons[0];
          this.setState({
            textField: {...this.state.textField,  olt: dataHomepass.olt_location, region: dataHomepass.region, fdt: dataHomepass.fdt_code, homepassedId: dataHomepass.homepass_id}});
        }).catch((error) => {
          console.log(`error: ${error}`);
        });
    }
  }

  _handleValidationCity(input, data) {
    let dataInput = input.toLowerCase();
    let dataCity = data.map((val) => val.toLowerCase());
    this.setState({
      isCityValid: dataCity.includes(dataInput),
    });
    if (dataCity.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, city: dataInput, homepassedId: ''}, // homepassedID just for SAMPLE
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
        textField: {...this.state.textField, cluster: dataInput}, // homepassedID just for SAMPLE
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
        textField: {...this.state.textField, street: dataInput, homepassedId: ''}, // homepassedID just for SAMPLE
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
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleSubmit()}
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
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            floatingLabelFixed={true}
            value={this.state.dataTemp.customer_name}
            floatingLabelText="Customer Name"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, customer_name: input},
              });
            }}
          />
          {/* no param to post for subscriberId */}
          <TextField
            required={true}
            type={'number'}
                    // hintText="Subscriber ID"
            floatingLabelFixed={true}
            value={this.state.dataTemp.subs_id}
            floatingLabelText="Subscriber ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, subs_id: input},
              });
            }}
          />
          <DatePicker
            value={new Date(this.state.dataTemp.dob)}
            floatingLabelFixed={true}
            floatingLabelText="Date of Birth"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, dob: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.birth_place}
            floatingLabelText="DOB Place"
            floatingLabelFixed={true}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, birth_place: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.type_id}
            floatingLabelFixed={true}
            floatingLabelText="Type ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, type_id: input},
              });
            }}
            disabled={true}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.id_number}
            floatingLabelFixed={true}
            floatingLabelText="ID Number"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, id_number: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.id_address}
            floatingLabelFixed={true}
            floatingLabelText="ID Address"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, id_address: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.phone1}
            floatingLabelFixed={true}
            floatingLabelText="Primary Phone"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, phone1: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.phone2}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Phone 1"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, phone2: input},
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.dataTemp.phone3}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Phone 2"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, phone3: input},
              });
            }}
          />

          <TextField
            fullWidth={true}
            required={true}
            value={this.state.dataTemp.email1}
            floatingLabelFixed={true}
            floatingLabelText="Email"
            // errorText={!this.state.isEmailValid1}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, email1: input},
              });
            }}
          />

          <TextField
            fullWidth={true}
            required={true}
            value={this.state.dataTemp.email2}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Email"
          // errorText={!this.state.isEmailValid2}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, email2: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.dataTemp.sales_name}
            floatingLabelFixed={true}
            floatingLabelText="Sales Name"
          // errorText={!this.state.isEmailValid2}
            onChange={(e, input) => {
              this.setState({
                dataTemp: {...this.state.dataTemp, sales_name: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.dataTemp.created_at}
            floatingLabelFixed={true}
            floatingLabelText="Created At"
          // errorText={!this.state.isEmailValid2}
            disabled={true}
          />
        </div>
      );
    };
    let _renderCreateUser = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Create User</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    // hintText="Customer Name"
                    floatingLabelFixed={true}
                    value={this.state.textField.name}
                    floatingLabelText="Customer Name"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this._handleValidationCustomerName(e, input);
                    }}
                  />

                  <DatePicker
                    value={this.state.textField.dob}
                    floatingLabelFixed={true}
                    floatingLabelText="Date of Birth"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          dob: input,
                        },
                      });
                    }}
                  />

                  <TextField
                    required={true}
                    value={this.state.textField.birth_place}
                    floatingLabelText="DOB Place"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          birth_place: input,
                        },
                      });
                    }}
                  />

                  <SelectField
                    floatingLabelFixed={true}
                    required={true}
                    floatingLabelText="Gender"
                    fullWidth={true}
                    value={this.state.textField.gender}
                    onChange={(e, index, value) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          gender: value,
                        },
                      });
                    }}
                  >
                    <MenuItem  value="male" primaryText="Male" />
                    <MenuItem  value="female" primaryText="Female" />
                  </SelectField>

                  <SelectField
                    floatingLabelFixed={true}
                    required={true}
                    floatingLabelText="ID Type"
                    fullWidth={true}
                    value={this.state.textField.identification_type}
                    onChange={(e, index, value) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          identification_type: value,
                        },
                      });
                    }}
                  >
                    <MenuItem  value="KTP" primaryText="KTP" />
                    <MenuItem  value="KITAS" primaryText="KITAS" />
                    <MenuItem  value="SIM" primaryText="SIM" />
                  </SelectField>

                  <TextField
                    required={true}
                    value={this.state.textField.identification_number}
                    floatingLabelFixed={true}
                    floatingLabelText="ID Number"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          identification_number: input,
                        },
                      });
                    }}
                  />

                  <TextField
                    required={true}
                    value={this.state.textField.phone1}
                    floatingLabelFixed={true}
                    floatingLabelText="Primary Phone"
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
                    floatingLabelFixed={true}
                    floatingLabelText="Alternative Phone 1"
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
                    floatingLabelFixed={true}
                    floatingLabelText="Alternative Phone 2"
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
                    fullWidth={true}
                    required={true}
                    value={this.state.textField.email1}
                    floatingLabelFixed={true}
                    floatingLabelText="Email"
                    errorText={!this.state.isEmailValid1}
                    onChange={(e, input) => {
                      this._handleValidationEmail(
                        e,
                        input,
                        'isEmailValid1',
                        'email1'
                      );
                    }}
                  />

                  <TextField
                    fullWidth={true}
                    required={true}
                    value={this.state.textField.email2}
                    floatingLabelFixed={true}
                    floatingLabelText="Alternative Email"
                    errorText={!this.state.isEmailValid2}
                    onChange={(e, input) => {
                      this._handleValidationEmail(
                        e,
                        input,
                        'isEmailValid2',
                        'email2'
                      );
                    }}
                  />

                  <TextField
                    required={true}
                    value={this.state.textField.identification_address}
                    floatingLabelFixed={true}
                    floatingLabelText="ID Address"
                    multiLine={true}
                    rowsMax={4}
                    rows={2}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          identification_address: input,
                        },
                      });
                    }}
                  />

                  <AutoComplete
                    fullWidth={true}
                    required={true}
                    floatingLabelFixed={true}
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
                    floatingLabelFixed={true}
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
                    floatingLabelFixed={true}
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
                  <TextField
                    disabled={true}
                    floatingLabelFixed={true}
                    value={this.state.textField.fdt}
                    hintText="FDT"
                    floatingLabelText="FDT"
                    fullWidth={false}
                    style={{marginRight: 20}}
                  />
                  <TextField
                    disabled={true}
                    floatingLabelFixed={true}
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
                    floatingLabelFixed={true}
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
                  <TextField
                    disabled={true}
                    floatingLabelFixed={true}
                    value={this.state.textField.homepassedId}
                    hintText="Homepassed ID"
                    floatingLabelText="Homepassed ID"
                    fullWidth={true}
                  />
                </Col>
                <RaisedButton
                  label="Register"
                  secondary={true}
                  style={styles.raisedButton}
                  onTouchTap={() => this._handleTouchTap()}
                />

              </form>
            </Col>
          </Row>
        </div>
      );
    };
    let _renderManageUser = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage User</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              {/* <Card style={style.card}> */}

              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="Customer Updated"
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
                    autoScrollBodyContent={true}
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
                  Are you sure want to delete this #{this.state.deleteId} product?
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
                    onChangePage={((page) => this.setState({
                      allCustomer: {...this.state.allCustomer, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.allCustomer.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.allCustomer.current_page - 1}
                    total={this.state.allCustomer.total}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[10]}
                  />
                </div>
              </div>
              {/* </Card> */}
            </Col>
          </Row>
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
                label="Create Customer"
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
                label="Manage Customer"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.loaded &&
                  this.state.currentTab == 1 ?
                  _renderManageUser() : _renderLoading()}
              </Tab>
            </Tabs>
            <Snackbar
              open={this.state.isRegistered}
              message={this.state.notifMessage}
              onRequestClose={(e) => {
                this._onRequestClose(e);
              }}
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            />
          </Col>
        </Paper>
      </Row>
    );
  }
}
