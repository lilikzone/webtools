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
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {grey50, teal300, red400} from 'material-ui/styles/colors';
import Cookies from 'universal-cookie';
import moment from  'moment';


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


const EditBtn = () => (
  <div className="text-center">
    <button className="mdl-button mdl-button--raised">Edit</button>
  </div>
);

const ChooseCustBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-button--raised"
      onClick={() => {
        const custChosen = [];
        custChosen.push(data);
        this.setState({
          custChosen: custChosen,
          selectedCustomer: true,
        });
      }
    }

    >
    Choose</button>
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
const idType = ['KTP', 'KITAS', 'SIM'];
const columnsSelected = [
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
    title: 'DOB Place',
    prop: 'birth_place',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 6,
    title: 'Gender',
    prop: 'gender',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 7,
    title: 'Group',
    prop: 'group',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 8,
    title: 'ID Type',
    prop: 'type_id',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 9,
    title: 'ID Number',
    prop: 'id_number',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 10,
    title: 'ID Address',
    prop: 'id_address',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 11,
    title: 'Primary Phone',
    prop: 'phone1',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 12,
    title: 'Alternative Phone 1',
    prop: 'phone2',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 13,
    title: 'Alternative Phone 2',
    prop: 'phone3',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 14,
    title: 'Email',
    prop: 'email1',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 15,
    title: 'Alternative Email',
    prop: 'email2',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 16,
    title: 'Created At',
    prop: 'created_at',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 17,
    title: 'updated At',
    prop: 'updated_at',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
];


export default class SalesOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      isGetProduct: false,
      isGetAllProduct: true,
      isGetSelectedAllProduct: false,
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
        gender: '',
        dob: {},
        installationDate: {},
      },
      dataProduct: [],
      productId: '',
      selectedProduct: false,
      dataCity: [],
      dataCluster: [],
      dataStreet: [],
      dataFullAddress: [],
      custDataArray: [],
      custChosen: [],
      dataCustomer: {},
      selectedCustomer: false,
      notifMessage: '',
    };
    const ChooseBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() => {
            const dataArray = [];
            dataArray.push(data);
            this.setState({
              dataSelectedProduct: dataArray,
              isGetProduct: false,
              selectedProduct: true,
              isGetAllProduct: false,
              isGetSelectedAllProduct: true,
              productId: data.id,
            });
          }
        }

        >
        Choose</button>
      </div>
    );

    const ChooseBtnExist = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() => {
            const dataArray = [];
            dataArray.push(data);
            this.setState({
              dataSelectedProduct: dataArray,
              isGetAllProduct: false,
              isGetSelectedAllProduct: true,
              productId: data.id,
            });
          }
        }

        >
        Choose</button>
      </div>
    );
    this.Productcolumns = [
      {id: 1, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 2, title: 'name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 3, title: 'promo type', prop: 'promo_type', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 4, title: 'price', prop: 'price', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 5, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
    ];
    this.SelectedProductcolumns = [
      {id: 1, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 2, title: 'name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 3, title: 'promo type', prop: 'promo_type', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
      {id: 4, title: 'price', prop: 'price', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    ];
  }


  _handleTouchTap() {
    const name = this.state.textField.name;
    const olt = this.state.textField.olt;
    const city = this.state.textField.city;
    const region = this.state.textField.region;
    const fdt = this.state.textField.fdt;
    const cluster = this.state.textField.cluster;
    const street = this.state.textField.street;
    const fullAddress = this.state.textField.fullAddress;
    const homepassedId = this.state.textField.homepassedId;
    const typePayment = this.state.textField.typePayment;
    const idType = this.state.textField.idType;
    const dobPlace = this.state.textField.dobPlace;
    const idNumber = this.state.textField.idNumber;
    const address = this.state.textField.address;
    const phone1 = this.state.textField.phone1;
    const phone2 = this.state.textField.phone2;
    const phone3 = this.state.textField.phone3;
    const email1 = this.state.textField.email1;
    const email2 = this.state.textField.email2;
    const dob = moment(this.state.textField.dob).format('YYYY-MM-DD');
    const installationDate = this.state.textField.installationDate;
    const gender = this.state.textField.gender;
    const status = 'new';
    const product_id = this.state.productId;
    const group = 'VIP';

    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const accessData = cookies.get('npaccess');
      const username = accessData.split('+');
      console.log(`https://ibase.adlsandbox.com:8081/api/order/create?status=${status}&customer_email1=${email1}&customer_email2=${email2}&customer_name=${name}&product_id=${product_id}&dob=${dob}&birth_place=${dobPlace}&gender=${gender}&group=${group}&payment_type=${typePayment}&type_id=${idType}&id_number=${idNumber}&id_address=${address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&sales_name=${username[0]}&homepassed_id=${homepassedId}`);

      const json = (response) => response.json();
      fetch(`https://ibase.adlsandbox.com:8081/api/order/create?status=${status}&customer_email1=${email1}&customer_email2=${email2}&customer_name=${name}&product_id=${product_id}&dob=${dob}&birth_place=${dobPlace}&gender=${gender}&group=${group}&payment_type=${typePayment}&type_id=${idType}&id_number=${idNumber}&id_address=${address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&sales_name=${username[0]}&homepassed_id=${homepassedId}`, {
        method: 'POST',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookieData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        // console.log(respons);
        if (respons.status === 200) {
          this.setState({
            isRegistered: true,
            notifMessage: respons.message,
          });
        }
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      fetch('https://ibase.adlsandbox.com:8081/api/customer/all', {
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
        this.setState({dataCustomer: respons});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }


  _handleValidationEmail(e, input, email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      isEmailValid: re.test(String(input).toLowerCase()),
      textField: {...this.state.textField, [email]: input},
    });
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
  _handleValidationTypePayment(input, index, data) {
    let dataInput = data;

    this.setState({
      textField: {...this.state.textField, typePayment: dataInput},
    });
  }
  _handleValidationGender(input, index, data) {
    let dataInput = data.toLowerCase();

    this.setState({
      textField: {...this.state.textField, gender: dataInput},
    });
  }
  _handleValidationFullAddress(input, data) {
    let dataInput = input.toLowerCase();
    let dataFullAddress = data.map((val) => val.toLowerCase());
    this.setState({
      isClusterValid: dataFullAddress.includes(dataInput),
    });
    if (dataFullAddress.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, fullAddress: dataInput, homepassedId: `${dataInput } SAMPLE ONLY`}, // homepassedID just for SAMPLE
      });
      this._getHomespassedId(dataInput);
    } else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }

  _reselectProduct = () => {
    this.setState({selectedProduct: false, isGetProduct: true, isGetSelectedAllProduct: false, isGetAllProduct: true});
  }

  componentDidMount() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();
      fetch('https://ibase.adlsandbox.com:8081/api/homespassed/sort', {
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

      fetch('https://ibase.adlsandbox.com:8081/api/product/all', {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookieData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        this.setState({dataProduct: respons});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      fetch('https://ibase.adlsandbox.com:8081/api/customer/all', {
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
        this.setState({dataCustomer: respons, loaded: true});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }

  _getClusterDataAPI(city) {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const json = (response) => response.json();

      fetch(`https://ibase.adlsandbox.com:8081/api/homespassed/sort?city=${city}`, {
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

      fetch(`https://ibase.adlsandbox.com:8081/api/homespassed/sort?cluster=${cluster}`, {
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

      fetch(`https://ibase.adlsandbox.com:8081/api/homespassed/sort?street=${street}`, {
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

      fetch(`https://ibase.adlsandbox.com:8081/api/homespassed/sort?full_address=${address}`, {
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
    let _renderProduct = (data) => {
      if (data) {
        return (
          <div>
            <h1 style={{marginTop: 30, textAlign: 'center'}}>Product</h1>
            <Card style={style.card}>
              <MaterialContainer
                keys="id"
                className="mdl-data-table"
                columns={this.Productcolumns}
                dataArray={this.state.dataProduct}
                draggable={false}
                sortable={false}
                sortBy={{prop: 'id', order: 'desc'}}
                pageSizeOptions={[10]}
              />
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
            />
          </form>
        </Card>
      );
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
                <SelectField
                  fullWidth={true}
                  required={true}
                  floatingLabelText="Type Payment"
                  name="type_payment"
                  value={this.state.textField.typePayment}
                  onChange={(input, index, dataSource) => {
                    this._handleValidationTypePayment(input, index, dataSource);
                  }}
                >
                  <MenuItem  value="pbi" primaryText="Regular" />
                  <MenuItem  value="pai" primaryText="Pay after Installation" />
                </SelectField>
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
                <TextField
                  floatingLabelText="DoB Place"
                  value={this.state.textField.dobPlace}
                  fullWidth={true}
                  onChange={(e, value) => {
                    this.setState({
                      textField: {
                        ...this.state.textField,
                        dobPlace: value,
                      },
                    });
                  }}
                />
                <SelectField
                  fullWidth={true}
                  required={true}
                  floatingLabelText="Gender"
                  name="gender"
                  value={this.state.textField.gender}
                  onChange={(input, index, dataSource) => {
                    this._handleValidationGender(input, index, dataSource);
                  }}
                >
                  <MenuItem  value="male" primaryText="Male" />
                  <MenuItem  value="female" primaryText="Female" />
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
                  <MenuItem  value="KTP" primaryText="KTP" />
                  <MenuItem  value="KITAS" primaryText="KITAS" />
                  <MenuItem  value="SIM" primaryText="SIM" />
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

              </Col>
            </form>
          </Card>
        </div>
      );
    };
    let _renderButton = (isCoverage) => {
      if (isCoverage !== '') {
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
    let _renderSelectedProduct = (selectedProduct) => {
      if (selectedProduct) {
        return (<div>
          <h1 style={{marginTop: 30, textAlign: 'center'}}>Product</h1>
          <Card style={style.card}>
            <RaisedButton
              backgroundColor={teal300}
              style={{marginTop: 10}}
              labelColor={grey50}
              containerElement="label"
              label="Change Product"
              onClick={this._reselectProduct}
            />
            <MaterialContainer
              keys="id"
              className="mdl-data-table"
              columns={this.SelectedProductcolumns}
              dataArray={this.state.dataSelectedProduct}
              draggable={false}
              sortable={false}
              sortBy={{prop: 'id', order: 'desc'}}
              pageSizeOptions={[10]}
            />
          </Card>
        </div>);
      }
    };
    let _selectedCustomer = (selectedCustomer) => {
      if (selectedCustomer) {
        return (<div>
          <h1 style={{marginTop: 30, textAlign: 'center'}}>Customer</h1>
          <Card style={style.card}>
            <RaisedButton
              backgroundColor={teal300}
              style={{marginTop: 10}}
              labelColor={grey50}
              containerElement="label"
              label="Change Customer"
              // onClick={this._reselectProduct}
            />
            <MaterialContainer
              keys="id"
              className="mdl-data-table"
              columns={columnsSelected}
              dataArray={this.state.custChosen}
              draggable={false}
              sortable={false}
              sortBy={{prop: 'id', order: 'desc'}}
            />
          </Card>
        </div>);
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
              {_renderSelectedProduct(this.state.selectedProduct)}
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
                      dataArray={this.state.dataCustomer}
                      draggable={false}
                      sortable={false}
                      sortBy={{prop: 'id', order: 'asc'}}
                      pageSizeOptions={[5]}
                    />
                    {_selectedCustomer(this.state.selectedCustomer)}
                    {_renderProduct(this.state.isGetAllProduct)}
                    {_renderSelectedProduct(this.state.isGetSelectedAllProduct)}
                    {_renderButton(this.state.textField.homepassedId)}
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
                {this.state.loaded && this.state.currentTab == 1 && _renderManageUser()}
              </Tab>
            </Tabs>
            <Snackbar
              open={this.state.isRegistered}
              message={this.state.notifMessage}
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            />
          </Col>
        </Paper>
      </Row>
    );
  }
}
