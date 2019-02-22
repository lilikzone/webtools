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
import {grey50, teal300, red400} from 'material-ui/styles/colors';
import Cookies from 'universal-cookie';
import moment from  'moment';


const cookies = new Cookies();
// const dataCity = [
//   'Tangerang',
//   'Tangerang Selatan',
//   'Bogor',
//   'Depok',
//   'Bekasi',
//   'Banjarmasin',
//   'Balikpapan',
//   'Makassar',
//   'Denpasar',
//   'Jakarta Selatan',
// ];
// const dataCluster = [
//   'PALEM GANDA ASRI 1',
//   'PALEM GANDA ASRI 2',

// ];
// const dataStreet = [
//   'JL.BLOCK C5 ',
//   'JL.BLOCK C5 ',
// ];
// const dobPlace = [
//   'KAB BOGOR',
//   'KAB PONOGORO',
//   'KAB LEBAK',
//   'KAB LOMBOK BARAT',
//   'KAB KUPANG',
//   'KAB GORONTALO',
// ];
const dataTypePayment = ['Regular', 'Pay After Installation'];
const idType = ['KTP', 'KITAS', 'SIM'];
// all data with empty array will considered false in type input
// const dataCluster = [];
const dataExample = [
  {
    'id': 1,
    'custom_customer_id': 434579135,
    'customer_name': 'Loretha',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'male',
    'group': 'test',
    'type_id': 'KTP',
    'id_number': 888,
    'id_address': 'Cipinang Besar Selatan',
    'phone1': 812888,
    'phone2': 81288,
    'phone3': 812888,
    'email1': 'billy.haen@gmail.com',
    'email2': '',
    'created_at': '2019-02-20 06:34:28',
    'updated_at': '2019-02-20 06:34:28',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 2,
    'custom_customer_id': 523834817,
    'customer_name': 'Sylvia Saint',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'male',
    'group': 'test',
    'type_id': 'KTP',
    'id_number': 989898,
    'id_address': 'Cipinang Besar UTARA',
    'phone1': 812888,
    'phone2': 81288,
    'phone3': 812888,
    'email1': 'billy.haen@gmail.com',
    'email2': 'billy.haen@gmail.com',
    'created_at': '2019-02-20 07:05:52',
    'updated_at': '2019-02-20 09:59:36',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 5,
    'custom_customer_id': 396839001,
    'customer_name': 'adw2',
    'dob': '1983-06-19',
    'birth_place': 'Jaawakarta',
    'gender': 'male',
    'group': 'test',
    'type_id': 'KTPawdad',
    'id_number': 810000,
    'id_address': 'Cipinang Besar Selatan',
    'phone1': 812888,
    'phone2': 81288,
    'phone3': 812888,
    'email1': 'baden@gmail.com',
    'email2': '',
    'created_at': '2019-02-20 11:28:38',
    'updated_at': '2019-02-20 11:28:38',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 6,
    'custom_customer_id': 255025603,
    'customer_name': 'wawa',
    'dob': '4444-12-31',
    'birth_place': 'ajkan',
    'gender': 'undefined',
    'group': 'undefined',
    'type_id': 'ad',
    'id_number': 1213,
    'id_address': '314',
    'phone1': 911,
    'phone2': 1290,
    'phone3': 318,
    'email1': 'awmldk@gma.com',
    'email2': 'awkldj@ss.com',
    'created_at': '2019-02-20 11:43:25',
    'updated_at': '2019-02-20 11:43:25',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 7,
    'custom_customer_id': 888714405,
    'customer_name': 'wawwwww',
    'dob': '0001-11-21',
    'birth_place': '2z',
    'gender': 'undefined',
    'group': 'undefined',
    'type_id': '12121',
    'id_number': 11,
    'id_address': '111',
    'phone1': 21222,
    'phone2': 222,
    'phone3': 888,
    'email1': '88@satu.com',
    'email2': 'awd@ql.com',
    'created_at': '2019-02-20 11:55:58',
    'updated_at': '2019-02-20 11:55:58',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 8,
    'custom_customer_id': 72787234,
    'customer_name': 'aaaa',
    'dob': '0001-01-01',
    'birth_place': '121121',
    'gender': 'undefined',
    'group': 'undefined',
    'type_id': '21',
    'id_number': 12,
    'id_address': '1121',
    'phone1': 121,
    'phone2': 1211212,
    'phone3': 1212,
    'email1': '121@ma.com',
    'email2': 'awj1@2A.COM',
    'created_at': '2019-02-20 12:16:40',
    'updated_at': '2019-02-20 12:16:40',
    'subs_id': '',
    'homepassed_id': null,
    'balance': 0,
    'sales_name': '',
    'due_date': null,
  },
  {
    'id': 9,
    'custom_customer_id': 71653764,
    'customer_name': 'qazws',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'Pria',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 32324233,
    'id_address': 'Jl. Jalan',
    'phone1': 3243432,
    'phone2': 53452,
    'phone3': 754636,
    'email1': 'qavas@safdw.com',
    'email2': '423443',
    'created_at': '2019-02-21 10:48:08',
    'updated_at': '2019-02-21 10:48:08',
    'subs_id': '323200000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'billy',
    'due_date': null,
  },
  {
    'id': 10,
    'custom_customer_id': 85382213,
    'customer_name': 'qazws',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'Pria',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 1231321321,
    'id_address': 'Jl. Jalan',
    'phone1': 3243432,
    'phone2': 53452,
    'phone3': 754636,
    'email1': 'vas@safdw.com',
    'email2': '423443',
    'created_at': '2019-02-21 10:52:08',
    'updated_at': '2019-02-21 10:52:08',
    'subs_id': '123100000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'vani test',
    'due_date': null,
  },
  {
    'id': 11,
    'custom_customer_id': 49775014,
    'customer_name': 'qazws',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'Pria',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 32324233,
    'id_address': 'Jl. Jalan',
    'phone1': 3243432,
    'phone2': 53452,
    'phone3': 754636,
    'email1': 'qavas@safdw.com',
    'email2': '423443',
    'created_at': '2019-02-21 14:33:02',
    'updated_at': '2019-02-21 14:33:02',
    'subs_id': '323200000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'billy',
    'due_date': null,
  },
  {
    'id': 12,
    'custom_customer_id': 79823765,
    'customer_name': 'qazws',
    'dob': '1983-06-19',
    'birth_place': 'Jakarta',
    'gender': 'Pria',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 1111111111111111,
    'id_address': 'Jl. Jalan',
    'phone1': 3243432,
    'phone2': 53452,
    'phone3': 754636,
    'email1': 'qavas@safdw.com',
    'email2': '423443',
    'created_at': '2019-02-21 14:46:00',
    'updated_at': '2019-02-21 14:46:00',
    'subs_id': '111100000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'billy',
    'due_date': null,
  },
  {
    'id': 13,
    'custom_customer_id': 18988378,
    'customer_name': 'Vani',
    'dob': '2019-01-18',
    'birth_place': 'Bekasi',
    'gender': 'male',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 172371231231231,
    'id_address': 'jaskdaksdnnnaskdakskdaksdkaskdkasd',
    'phone1': 812361263612,
    'phone2': null,
    'phone3': null,
    'email1': 'vani@yuhuu.com',
    'email2': null,
    'created_at': '2019-02-21 14:55:08',
    'updated_at': '2019-02-21 14:55:08',
    'subs_id': '172300000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'vani test',
    'due_date': null,
  },
  {
    'id': 14,
    'custom_customer_id': 37107171,
    'customer_name': 'Vani testatstatsdtatstd',
    'dob': '2018-11-06',
    'birth_place': 'Bekasi',
    'gender': 'male',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 128713123123,
    'id_address': 'asdasdashdbajhsdjha',
    'phone1': 8126312312,
    'phone2': null,
    'phone3': null,
    'email1': 'vani@yuhuuuuu.com',
    'email2': null,
    'created_at': '2019-02-21 15:07:29',
    'updated_at': '2019-02-21 15:07:29',
    'subs_id': '012800000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'vani test',
    'due_date': null,
  },
  {
    'id': 15,
    'custom_customer_id': 14448299,
    'customer_name': 'vani test sembilan sembilan',
    'dob': '2016-02-16',
    'birth_place': 'jakarta',
    'gender': 'male',
    'group': 'VIP',
    'type_id': 'KTP',
    'id_number': 128319823192,
    'id_address': 'dataasdnajsnkdjaksndkjasnkjdnaskjdnas',
    'phone1': 812361263123,
    'phone2': null,
    'phone3': null,
    'email1': 'vani@ajsdkasjdkajsdk.com',
    'email2': null,
    'created_at': '2019-02-21 16:40:00',
    'updated_at': '2019-02-21 16:40:00',
    'subs_id': '012800000',
    'homepassed_id': null,
    'balance': 5000,
    'sales_name': 'vani test',
    'due_date': null,
  },
];
const dataAddress = ['JL.BLOCK C5 - NO. 6 - PALEM GANDA ASRI 1 - TANGERANG', 'JL.BLOCK C5 - NO. 4 - PALEM GANDA ASRI 1 - TANGERANG', 'JL.BLOCK C5 - NO. 2 - PALEM GANDA ASRI 1 - TANGERANG'];
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
    title: 'id',
    prop: 'id',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 2,
    title: 'Subscriber ID',
    prop: 'custom_customer_id',
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
    prop: 'identification_type',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 8,
    title: 'ID Number',
    prop: 'identification_number',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 9,
    title: 'ID Address',
    prop: 'identification_address',
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
  {
    id: 17,
    title: 'Action',
    render: EditBtn,
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 18,
    title: 'Action',
    render: DeleteBtn,
    width: '5%',
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
      loaded: false,
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
      dataCustomer: [],
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
    // const homepassedId = this.state.textField.homepassedId;
    const homepassedId = '1461-01.PGA 1.001.A01.03';
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
    // const group = this.state.group;
    const group = 'VIP';

    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      console.log(`https://ibase.adlsandbox.com:8081/api/order/create?status=${status}&customer_email1=${email1}&customer_email2=${email2}&customer_name=${name}&product_id=${product_id}&dob=${dob}&birth_place=${dobPlace}&gender=${gender}&group=${group}&payment_type=${typePayment}&identification_type=${idType}&identification_number=${idNumber}&identification_address=${address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}`);

      const json = (response) => response.json();
      fetch(`https://ibase.adlsandbox.com:8081/api/order/create?status=${status}&customer_email1=${email1}&customer_email2=${email2}&customer_name=${name}&product_id=${product_id}&dob=${dob}&birth_place=${dobPlace}&gender=${gender}&group=${group}&payment_type=${typePayment}&identification_type=${idType}&identification_number=${idNumber}&identification_address=${address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}`, {
        method: 'POST',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${cookieData}`,
          'Content-Type': 'application/json',
        },
      })
      .then(json)
      .then((respons) => {
        console.log(respons);
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    // });

      // const json = (response) => response.json();
      // const cookieData = cookies.get('ssid');

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

      this.setState({
        currentTab: 1,
        loaded: true,
        isRegistered: true,
        textField: {},
      });
    }
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
        textField: {...this.state.textField, cluster: dataInput, homepassedId: `${dataInput } SAMPLE ONLY`}, // homepassedID just for SAMPLE
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
        textField: {...this.state.textField, street: dataInput, homepassedId: `${dataInput } SAMPLE ONLY`}, // homepassedID just for SAMPLE
      });
      this._getFullAddressDataAPI(dataInput);
    } else {
      this.setState({
        textField: {...this.state.textField, homepassedId: ''}, // homepassedID just for SAMPLE
      });
    }
  }
  _handleValidationTypePayment(input, index, data) {
    let dataInput = data.toLowerCase();

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
    this.setState({selectedProduct: false, isGetProduct: true});
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

          const dataClusterObject = respons.data;
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

          const dataStreetObject = respons.data;
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
                      sortBy={{prop: 'country.name', order: 'asc'}}
                      pageSizeOptions={[5]}
                    />
                    {/* {_renderProduct(true)} */}
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
