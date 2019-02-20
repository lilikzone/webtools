import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Card} from 'material-ui/Card';
import 'react-table-components/styles/styles.css';
import '../../table/datatable.scss';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import {Subheader} from 'material-ui';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
const HOSTNAME = 'https://ibase.adlsandbox.com:8081/api/customer/';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// const HOSTNAME = 'http://13.229.149.228:8081/api/customer/';
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
    this.data = [
      {
        id: '6584278700',
        name: 'Anna',
        last_name: 'Jackson',
        email: 'ajackson0@forbes.com',
        gender: 'Female',
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
        gender: 'Male',
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
        gender: 'Male',
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
        gender: 'Female',
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
        gender: 'Female',
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
        gender: 'Female',
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
        gender: 'Male',
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
        gender: 'Male',
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
        gender: 'Female',
        ip_address: '71.186.189.185',
        country: {id: 9, name: 'China', code: 'CN'},
        city: {id: 9, name: 'Diaoling'},
        pic:
          'https://robohash.org/omnisnecessitatibusaut.bmp?size=50x50&set=set1',
      },
      {
        id: '0504737112',
        name: 'Rose',
        last_name: 'Crawford',
        email: 'rcrawford9@t-online.de',
        gender: 'Female',
        ip_address: '59.101.26.30',
        country: {id: 10, name: 'Russia', code: 'RU'},
        city: {id: 10, name: 'Aban'},
        pic: 'https://robohash.org/omnisdoloremqueminus.png?size=50x50&set=set1',
      },
      {
        id: '1618943243',
        name: 'Jason',
        last_name: 'Hernandez',
        email: 'jhernandeza@google.com',
        gender: 'Male',
        ip_address: '39.35.10.53',
        country: {id: 11, name: 'Panama', code: 'PA'},
        city: {id: 11, name: 'Río Alejandro'},
        pic: 'https://robohash.org/estnonvelit.png?size=50x50&set=set1',
      },
      {
        id: '3734693152',
        name: 'Andrew',
        last_name: 'Fernandez',
        email: 'afernandezb@harvard.edu',
        gender: 'Male',
        ip_address: '205.156.32.93',
        country: {id: 12, name: 'Mexico', code: 'MX'},
        city: {id: 12, name: 'Plan de Ayala'},
        pic: 'https://robohash.org/facilisestoptio.png?size=50x50&set=set1',
      },
      {
        id: '6443402049',
        name: 'Dennis',
        last_name: 'White',
        email: 'dwhitec@wikia.com',
        gender: 'Male',
        ip_address: '189.197.133.61',
        country: {id: 13, name: 'Russia', code: 'RU'},
        city: {id: 13, name: 'Chagoda'},
        pic: 'https://robohash.org/quaeetimpedit.jpg?size=50x50&set=set1',
      },
      {
        id: '4074036347',
        name: 'Beverly',
        last_name: 'Dean',
        email: 'bdeand@sina.com.cn',
        gender: 'Female',
        ip_address: '130.170.10.51',
        country: {id: 14, name: 'China', code: 'CN'},
        city: {id: 14, name: 'Tuanzhou'},
        pic: 'https://robohash.org/sedeteum.bmp?size=50x50&set=set1',
      },
      {
        id: '6609130191',
        name: 'Sharon',
        last_name: 'Grant',
        email: 'sgrante@angelfire.com',
        gender: 'Female',
        ip_address: '64.97.49.207',
        country: {id: 15, name: 'Indonesia', code: 'ID'},
        city: {id: 15, name: 'Gaplek'},
        pic: 'https://robohash.org/temporibusquodvitae.bmp?size=50x50&set=set1',
      },
      {
        id: '7504409898',
        name: 'Carl',
        last_name: 'Ward',
        email: 'cwardf@sakura.ne.jp',
        gender: 'Male',
        ip_address: '49.88.244.185',
        country: {id: 16, name: 'Russia', code: 'RU'},
        city: {id: 16, name: 'Podgornoye'},
        pic:
          'https://robohash.org/sitmolestiaevoluptatum.jpg?size=50x50&set=set1',
      },
      {
        id: '8090530117',
        name: 'Earl',
        last_name: 'Little',
        email: 'elittleg@umich.edu',
        gender: 'Male',
        ip_address: '27.116.71.90',
        country: {id: 17, name: 'Canada', code: 'CA'},
        city: {id: 17, name: 'Coaticook'},
        pic: 'https://robohash.org/totamnatusaut.jpg?size=50x50&set=set1',
      },
      {
        id: '9738804604',
        name: 'Robin',
        last_name: 'Carroll',
        email: 'rcarrollh@webeden.co.uk',
        gender: 'Female',
        ip_address: '127.144.245.105',
        country: {id: 18, name: 'Indonesia', code: 'ID'},
        city: {id: 18, name: 'Pasirhaur'},
        pic: 'https://robohash.org/impeditearumea.bmp?size=50x50&set=set1',
      },
      {
        id: '4885935857',
        name: 'Virginia',
        last_name: 'Austin',
        email: 'vaustini@acquirethisname.com',
        gender: 'Female',
        ip_address: '144.241.233.248',
        country: {id: 19, name: 'United States', code: 'US'},
        city: {id: 19, name: 'Buffalo'},
        pic: 'https://robohash.org/recusandaeutqui.png?size=50x50&set=set1',
      },
      {
        id: '5602909990',
        name: 'Jeffrey',
        last_name: 'Stevens',
        email: 'jstevensj@blinklist.com',
        gender: 'Male',
        ip_address: '8.248.12.250',
        country: {id: 20, name: 'Czech Republic', code: 'CZ'},
        city: {id: 20, name: 'Žiželice'},
        pic: 'https://robohash.org/architectosithic.jpg?size=50x50&set=set1',
      },
      {
        id: '0294605894',
        name: 'Nicholas',
        last_name: 'Ellis',
        email: 'nellisk@histats.com',
        gender: 'Male',
        ip_address: '94.94.182.227',
        country: {id: 21, name: 'Yemen', code: 'YE'},
        city: {id: 21, name: 'Ad Dimnah'},
        pic: 'https://robohash.org/etquisaccusamus.bmp?size=50x50&set=set1',
      },
      {
        id: '59825105310',
        name: 'Harold',
        last_name: 'Cruz',
        email: 'hcruzl@springer.com',
        gender: 'Male',
        ip_address: '46.234.25.215',
        country: {id: 22, name: 'Philippines', code: 'PH'},
        city: {id: 22, name: 'San Nicolas'},
        pic:
          'https://robohash.org/impeditconsequunturratione.bmp?size=50x50&set=set1',
      },
      {
        id: '9935737152',
        name: 'Henry',
        last_name: 'Cook',
        email: 'hcookm@cisco.com',
        gender: 'Male',
        ip_address: '181.1.150.133',
        country: {id: 23, name: 'China', code: 'CN'},
        city: {id: 23, name: 'Jixiang'},
        pic: 'https://robohash.org/nostrumdeseruntomnis.png?size=50x50&set=set1',
      },
      {
        id: '2688100009',
        name: 'Dennis',
        last_name: 'Torres',
        email: 'dtorresn@netvibes.com',
        gender: 'Male',
        ip_address: '101.179.153.105',
        country: {id: 24, name: 'Lebanon', code: 'LB'},
        city: {id: 24, name: 'Marjayoûn'},
        pic:
          'https://robohash.org/inventoreperferendisunde.png?size=50x50&set=set1',
      },
      {
        id: '0875701078',
        name: 'Gary',
        last_name: 'Ryan',
        email: 'gryano@theglobeandmail.com',
        gender: 'Male',
        ip_address: '148.222.194.89',
        country: {id: 25, name: 'Indonesia', code: 'ID'},
        city: {id: 25, name: 'Sinarwangi'},
        pic: 'https://robohash.org/aliquidearummagni.jpg?size=50x50&set=set1',
      },
      {
        id: '1270552058',
        name: 'Doris',
        last_name: 'Fowler',
        email: 'dfowlerp@youtu.be',
        gender: 'Female',
        ip_address: '67.38.224.254',
        country: {id: 26, name: 'Poland', code: 'PL'},
        city: {id: 26, name: 'Zielonki'},
        pic:
          'https://robohash.org/eligendiofficiadolorem.png?size=50x50&set=set1',
      },
      {
        id: '2613161876',
        name: 'Carlos',
        last_name: 'Burton',
        email: 'cburtonq@wordpress.org',
        gender: 'Male',
        ip_address: '242.27.189.57',
        country: {id: 27, name: 'Indonesia', code: 'ID'},
        city: {id: 27, name: 'Cilebang Satu'},
        pic: 'https://robohash.org/autemadipiscicommodi.png?size=50x50&set=set1',
      },
      {
        id: '0112362567',
        name: 'Mildred',
        last_name: 'Greene',
        email: 'mgreener@msn.com',
        gender: 'Female',
        ip_address: '240.162.10.80',
        country: {id: 28, name: 'Indonesia', code: 'ID'},
        city: {id: 28, name: 'Cimanglid'},
        pic: 'https://robohash.org/modiquidemet.jpg?size=50x50&set=set1',
      },
      {
        id: '8119077342',
        name: 'Paula',
        last_name: 'Boyd',
        email: 'pboyds@canalblog.com',
        gender: 'Female',
        ip_address: '106.242.198.112',
        country: {
          id: 29,
          name: 'Democratic Republic of the Congo',
          code: 'CD',
        },
        city: {id: 29, name: 'Tshikapa'},
        pic: 'https://robohash.org/noncorporisquaerat.png?size=50x50&set=set1',
      },
      {
        id: '0742199142',
        name: 'Mildred',
        last_name: 'Rogers',
        email: 'mrogerst@gravatar.com',
        gender: 'Female',
        ip_address: '223.250.97.241',
        country: {id: 30, name: 'Indonesia', code: 'ID'},
        city: {id: 30, name: 'Jatiklampok'},
        pic:
          'https://robohash.org/consequaturearumnumquam.png?size=50x50&set=set1',
      },
      {
        id: '4173163312',
        name: 'Juan',
        last_name: 'Cox',
        email: 'jcoxu@fda.gov',
        gender: 'Male',
        ip_address: '237.119.160.231',
        country: {id: 31, name: 'Russia', code: 'RU'},
        city: {id: 31, name: 'Staryy Oskol'},
        pic: 'https://robohash.org/quamutsoluta.png?size=50x50&set=set1',
      },
      {
        id: '5754329954',
        name: 'Johnny',
        last_name: 'Cooper',
        email: 'jcooperv@edublogs.org',
        gender: 'Male',
        ip_address: '31.73.23.20',
        country: {id: 32, name: 'China', code: 'CN'},
        city: {id: 32, name: 'Duobao'},
        pic:
          'https://robohash.org/perferendisexplicabooccaecati.jpg?size=50x50&set=set1',
      },
      {
        id: '4080628390',
        name: 'Annie',
        last_name: 'Reid',
        email: 'areidw@msu.edu',
        gender: 'Female',
        ip_address: '38.208.34.113',
        country: {id: 33, name: 'Canada', code: 'CA'},
        city: {id: 33, name: 'Lacombe'},
        pic:
          'https://robohash.org/consequaturcupiditateat.png?size=50x50&set=set1',
      },
      {
        id: '88742579710',
        name: 'Kathy',
        last_name: 'Stephens',
        email: 'kstephensx@delicious.com',
        gender: 'Female',
        ip_address: '196.112.173.84',
        country: {id: 34, name: 'Chile', code: 'CL'},
        city: {id: 34, name: 'Talagante'},
        pic: 'https://robohash.org/etetut.bmp?size=50x50&set=set1',
      },
      {
        id: '8919540616',
        name: 'Roger',
        last_name: 'Chavez',
        email: 'rchavezy@wunderground.com',
        gender: 'Male',
        ip_address: '90.231.234.129',
        country: {id: 35, name: 'France', code: 'FR'},
        city: {id: 35, name: 'Lomme'},
        pic: 'https://robohash.org/commodietest.png?size=50x50&set=set1',
      },
      {
        id: '2941852360',
        name: 'Steve',
        last_name: 'Baker',
        email: 'sbakerz@xinhuanet.com',
        gender: 'Male',
        ip_address: '149.100.241.171',
        country: {id: 36, name: 'Indonesia', code: 'ID'},
        city: {id: 36, name: 'Maredakalada'},
        pic:
          'https://robohash.org/omnisarchitectomagnam.png?size=50x50&set=set1',
      },
      {
        id: '5648844476',
        name: 'Margaret',
        last_name: 'Hawkins',
        email: 'mhawkins10@pbs.org',
        gender: 'Female',
        ip_address: '50.214.65.78',
        country: {id: 37, name: 'Sweden', code: 'SE'},
        city: {id: 37, name: 'Sundsvall'},
        pic: 'https://robohash.org/facerevelitquas.jpg?size=50x50&set=set1',
      },
      {
        id: '0861695291',
        name: 'Jacqueline',
        last_name: 'Stevens',
        email: 'jstevens11@nbcnews.com',
        gender: 'Female',
        ip_address: '178.50.221.186',
        country: {id: 38, name: 'Chile', code: 'CL'},
        city: {id: 38, name: 'Río Bueno'},
        pic: 'https://robohash.org/eumvelet.bmp?size=50x50&set=set1',
      },
      {
        id: '7813055055',
        name: 'Brandon',
        last_name: 'Fernandez',
        email: 'bfernandez12@theguardian.com',
        gender: 'Male',
        ip_address: '202.105.189.244',
        country: {id: 39, name: 'Poland', code: 'PL'},
        city: {id: 39, name: 'Glinojeck'},
        pic: 'https://robohash.org/idquasbeatae.jpg?size=50x50&set=set1',
      },
      {
        id: '3886955052',
        name: 'Ashley',
        last_name: 'Gilbert',
        email: 'agilbert13@lycos.com',
        gender: 'Female',
        ip_address: '47.152.82.48',
        country: {id: 40, name: 'China', code: 'CN'},
        city: {id: 40, name: 'Sujiatuo'},
        pic: 'https://robohash.org/necessitatibusautquo.png?size=50x50&set=set1',
      },
      {
        id: '0176299440',
        name: 'Samuel',
        last_name: 'Long',
        email: 'slong14@ebay.co.uk',
        gender: 'Male',
        ip_address: '8.4.54.35',
        country: {id: 41, name: 'Turkmenistan', code: 'TM'},
        city: {id: 41, name: 'Serhetabat'},
      },
    ];
    this.state = {
      loaded: false,
      cookies: '',
      onEdit: false,
      nameTemp: '',
      emailTemp: '',
      phoneNumberTemp: '',
      isGenderValid: true,
      isEmailValid1: true,
      isEmailValid2: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      currentTab: 0,
      textField: {
        customerName: '',
        subscriberId: '',
        dobPlace: '',
        dob: '',
        typeId: '',
        idNumber: '',
        idAddress: '',
        primaryPhone: '',
        alternativePhone1: '',
        alternativePhone2: '',
        email: '',
        alternativeEmail: '',
      },
    };
    const EditBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-button--raised"
          onClick={() =>
            this.setState({
              onEdit: true,
              //
              dob: data.dob,
              birth_place: data.birth_place,
              gender: data.gender,
              identification_type: data.identification_type,
              identification_number: data.identification_number,
              identification_address: data.identification_address,
              phone1: data.phone1,
              phone2: data.phone2,
              phone3: data.phone3,
              email1: data.email1,
              email2: data.email2,
              group: data.group,
              name: data.name,
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
          onClick={() => this._deleteAPI(`${HOSTNAME}delete?`, data.id)}
        >
          Delete
        </button>
      </div>
    );
    this.columns = [
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
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
    }
  }


  componentDidMount() {
    this._getAPI(`${HOSTNAME}all`, 'textField');
  }

  _putAPI(
    apiUrl,
    dob,
    birth_place,
    gender,
    identification_type,
    identification_number,
    identification_address,
    phone1,
    phone2,
    phone3,
    email1,
    email2,
    group,
    name) {
    fetch( `${apiUrl}dob=${dob}&birth_place=${birth_place}&gender=${gender}&identification_type=${identification_type}&identification_number=${identification_number}&identification_address=${identification_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&group=${group}&name=${name}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          this._getAPI(`${HOSTNAME}all`, 'textField');
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

  _postAPI(
    apiUrl,
    stateName,
    dob,
    birth_place,
    gender,
    identification_type,
    identification_number,
    identification_address,
    phone1,
    phone2,
    phone3,
    email1,
    email2,
    group,
    name
  ) {
    fetch(
      `${apiUrl}dob=${dob}&birth_place=${birth_place}&gender=${gender}&identification_type=${identification_type}&identification_number=${identification_number}&identification_address=${identification_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&group=${group}&name=${name}`,
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
        console.log('res', responseJson);
        this._getAPI(`${HOSTNAME}all`, 'textField');
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
        console.log('responseJSON', responseJson);
        this._getAPI(`${HOSTNAME}all`, 'textField');
        this.setState({
          currentTab: 0,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handleClose() {
    this.setState({
      onEdit: false,
    });
  }

  _handleTouchTap() {
    this.data.push({
      customerName: this.state.textField.customerName,
      subscriberId: this.state.textField.subscriberId,
      dob: this.state.textField.dob,
      dobPlace: this.state.textField.dobPlace,
      typeId: this.state.textField.typeId,
      idNumber: this.state.textField.idNumber,
      idAddress: this.state.textField.idAddress,
      primaryPhone: this.state.textField.primaryPhone,
      alternativePhone1: this.state.textField.alternativePhone1,
      alternativePhone2: this.state.textField.alternativePhone2,
      email: this.state.textField.email,
      alternativeEmail: this.state.textField.alternativeEmail,
    });

    this._postAPI(
      `${HOSTNAME}register?`,
      'test',
      this.state.textField.dob,
      this.state.textField.birth_place,
      this.state.textField.gender,
      this.state.textField.identification_type,
      this.state.textField.identification_number,
      this.state.textField.identification_address,
      this.state.textField.phone1,
      this.state.textField.phone2,
      this.state.textField.phone3,
      this.state.textField.email1,
      this.state.textField.email2,
      this.state.textField.group,
      this.state.textField.name,
    );
    this._getAPI(`${HOSTNAME}all`, 'textField');
    this.setState({
      // currentTab: 1,
      isRegistered: true,
      textField: {},
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
    this._putAPI(apiUrl,
    this.state.dobTemp,
    this.state.birth_placeTemp,
    this.state.genderTemp,
    this.state.identification_typeTemp,
    this.state.identification_numberTemp,
    this.state.identification_addressTemp,
    this.state.phone1Temp,
    this.state.phone2Temp,
    this.state.phone3Temp,
    this.state.email1Temp,
    this.state.email2Temp,
    this.state.groupTemp,
    this.state.nameTemp);
  }
  render() {
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
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            floatingLabelFixed={true}
            value={this.state.nameTemp}
            floatingLabelText="Customer Name"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                nameTemp: input,
              });
            }}
          />
          {/* no param to post for subscriberId */}
          <TextField
            required={true}
            type={'number'}
                    // hintText="Subscriber ID"
            floatingLabelFixed={true}
            value={this.state.subscriberIdTemp}
            floatingLabelText="Subscriber ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                subscriberIdTemp: input,
              });
            }}
          />

          <TextField
            required={true}
            type={'date'}
            value={this.state.dobTemp}
            floatingLabelFixed={true}
            floatingLabelText="DOB"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                dobTemp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.birth_placeTemp}
            floatingLabelText="DOB Place"
            floatingLabelFixed={true}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                birth_placeTemp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.identification_typeTemp}
            floatingLabelFixed={true}
            floatingLabelText="Type ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                textField: {
                  ...this.state.textField,
                  identification_type: input,
                },
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.identification_numberTemp}
            floatingLabelFixed={true}
            floatingLabelText="ID Number"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                identification_numberTemp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.identification_addressTemp}
            floatingLabelFixed={true}
            floatingLabelText="ID Address"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                identification_addressTemp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.phone1Temp}
            floatingLabelFixed={true}
            floatingLabelText="Primary Phone"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                phone1Temp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.textField.phone2Temp}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Phone 1"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                phone2Temp: input,
              });
            }}
          />

          <TextField
            required={true}
            value={this.state.phone3Temp}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Phone 2"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                phone3Temp: input,
              });
            }}
          />

          <TextField
            fullWidth={true}
            required={true}
            value={this.state.email1Temp}
            floatingLabelFixed={true}
            floatingLabelText="Email"
            // errorText={!this.state.isEmailValid1}
            onChange={(e, input) => {
              this.setState({
                email1Temp: input,
              });
            }}
          />

          <TextField
            fullWidth={true}
            required={true}
            value={this.state.email2Temp}
            floatingLabelFixed={true}
            floatingLabelText="Alternative Email"
            // errorText={!this.state.isEmailValid2}
            onChange={(e, input) => {
              this.setState({
                email2Temp: input,
              });
            }}
          />        </div>
      );
    };
    let _renderCreateUser = () => {
        // apiUrl,
    // stateName,
    // dob,
    // birth_place,
    // gender,
    // identification_type,
    // identification_number,
    // identification_address,
    // phone1,
    // phone2,
    // phone3,
    // email1,
    // email2,
    // group,
    // name
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
                  {/* no param to post for subscriberId */}
                  <TextField
                    required={true}
                    type={'number'}
                    // hintText="Subscriber ID"
                    floatingLabelFixed={true}
                    value={this.state.textField.subscriberId}
                    floatingLabelText="Subscriber ID"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          subscriberId: input,
                        },
                      });
                    }}
                  />

                  <TextField
                    required={true}
                    type={'date'}
                    value={this.state.textField.dob}
                    floatingLabelFixed={true}
                    floatingLabelText="DOB"
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

                  <TextField
                    required={true}
                    value={this.state.textField.identification_type}
                    floatingLabelFixed={true}
                    floatingLabelText="Type ID"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          identification_type: input,
                        },
                      });
                    }}
                  />

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
                    value={this.state.textField.identification_address}
                    floatingLabelFixed={true}
                    floatingLabelText="ID Address"
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
                    title="Edit User"
                    actions={actions}
                    modal={false}
                    open={this.state.onEdit}
                    onRequestClose={() => this._handleClose()}
                  >
                    {_renderModalComponent()}
                  </Dialog>
                  <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={this.columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.state.textField}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'country.name', order: 'asc'}}
                    pageSizeOptions={[5]}
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
                  this.state.currentTab == 1 &&
                  _renderManageUser()}
              </Tab>
            </Tabs>
            <Snackbar
              open={this.state.isRegistered}
              message="Customer Added"
              autoHideDuration={4000}
              bodyStyle={{backgroundColor: 'teal'}}
            />
          </Col>
        </Paper>
      </Row>
    );
  }
}
