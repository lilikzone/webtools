import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import Card from 'material-ui/Card';

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
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Delete</button>
  </div>
);

const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);
const columns = [
  {id: 1, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 2, title: 'Code', prop: 'code', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 3, title: 'Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 4, title: '', render: EditBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
  {id: 5, title: '', render: DeleteBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];


export default class ManageVendor extends React.Component {
  constructor(props) {
    super(props);
    this.data = [{'id': '6584278700', 'name': 'Anna', 'last_name': 'Jackson', 'email': 'ajackson0@forbes.com', 'gender': 'Female', 'ip_address': '51.46.225.94', 'country': {'id': 1, 'name': 'China', 'code': 'CN'}, 'city': {'id': 1, 'name': 'Xiaoruo'}, 'pic': 'https://robohash.org/inquiaearum.bmp?size=50x50&set=set1'},
    {'id': '5918167633', 'name': 'Douglas', 'last_name': 'Morales', 'email': 'dmorales1@noaa.gov', 'gender': 'Male', 'ip_address': '238.135.116.252', 'country': {'id': 2, 'name': 'China', 'code': 'CN'}, 'city': {'id': 2, 'name': 'Daqiao'}, 'pic': 'https://robohash.org/perferendisminimaautem.bmp?size=50x50&set=set1'},
    {'id': '0907148174', 'name': 'Adam', 'last_name': 'Walker', 'email': 'awalker2@cmu.edu', 'gender': 'Male', 'ip_address': '228.254.30.193', 'country': {'id': 3, 'name': 'Vietnam', 'code': 'VN'}, 'city': {'id': 3, 'name': 'Phú Thái'}, 'pic': 'https://robohash.org/possimuscumesse.jpg?size=50x50&set=set1'},
    {'id': '42346855010', 'name': 'Jennifer', 'last_name': 'Pierce', 'email': 'jpierce3@wired.com', 'gender': 'Female', 'ip_address': '73.208.24.215', 'country': {'id': 4, 'name': 'Philippines', 'code': 'PH'}, 'city': {'id': 4, 'name': 'Nalsian Norte'}, 'pic': 'https://robohash.org/architectoofficianeque.bmp?size=50x50&set=set1'},
    {'id': '9010284751', 'name': 'Sarah', 'last_name': 'Williamson', 'email': 'swilliamson4@auda.org.au', 'gender': 'Female', 'ip_address': '54.52.225.20', 'country': {'id': 5, 'name': 'Colombia', 'code': 'CO'}, 'city': {'id': 5, 'name': 'La Estrella'}, 'pic': 'https://robohash.org/quiteneturdistinctio.jpg?size=50x50&set=set1'},
    {'id': '2208992458', 'name': 'Carolyn', 'last_name': 'Snyder', 'email': 'csnyder5@reverbnation.com', 'gender': 'Female', 'ip_address': '104.79.186.2', 'country': {'id': 6, 'name': 'Dominican Republic', 'code': 'DO'}, 'city': {'id': 6, 'name': 'La Caya'}, 'pic': 'https://robohash.org/vitaeomnisprovident.png?size=50x50&set=set1'},
    {'id': '8697834236', 'name': 'Johnny', 'last_name': 'Bryant', 'email': 'jbryant6@wired.com', 'gender': 'Male', 'ip_address': '159.105.102.24', 'country': {'id': 7, 'name': 'China', 'code': 'CN'}, 'city': {'id': 7, 'name': 'Baisha'}, 'pic': 'https://robohash.org/sitminimacum.bmp?size=50x50&set=set1'},
    {'id': '4396016603', 'name': 'Jack', 'last_name': 'Hayes', 'email': 'jhayes7@furl.net', 'gender': 'Male', 'ip_address': '207.125.56.19', 'country': {'id': 8, 'name': 'Spain', 'code': 'ES'}, 'city': {'id': 8, 'name': 'Valladolid'}, 'pic': 'https://robohash.org/consequaturharumnon.bmp?size=50x50&set=set1'},
    {'id': '0775707031', 'name': 'Nancy', 'last_name': 'Lane', 'email': 'nlane8@wsj.com', 'gender': 'Female', 'ip_address': '71.186.189.185', 'country': {'id': 9, 'name': 'China', 'code': 'CN'}, 'city': {'id': 9, 'name': 'Diaoling'}, 'pic': 'https://robohash.org/omnisnecessitatibusaut.bmp?size=50x50&set=set1'},
    {'id': '0504737112', 'name': 'Rose', 'last_name': 'Crawford', 'email': 'rcrawford9@t-online.de', 'gender': 'Female', 'ip_address': '59.101.26.30', 'country': {'id': 10, 'name': 'Russia', 'code': 'RU'}, 'city': {'id': 10, 'name': 'Aban'}, 'pic': 'https://robohash.org/omnisdoloremqueminus.png?size=50x50&set=set1'},
    {'id': '1618943243', 'name': 'Jason', 'last_name': 'Hernandez', 'email': 'jhernandeza@google.com', 'gender': 'Male', 'ip_address': '39.35.10.53', 'country': {'id': 11, 'name': 'Panama', 'code': 'PA'}, 'city': {'id': 11, 'name': 'Río Alejandro'}, 'pic': 'https://robohash.org/estnonvelit.png?size=50x50&set=set1'},
    {'id': '3734693152', 'name': 'Andrew', 'last_name': 'Fernandez', 'email': 'afernandezb@harvard.edu', 'gender': 'Male', 'ip_address': '205.156.32.93', 'country': {'id': 12, 'name': 'Mexico', 'code': 'MX'}, 'city': {'id': 12, 'name': 'Plan de Ayala'}, 'pic': 'https://robohash.org/facilisestoptio.png?size=50x50&set=set1'},
    {'id': '6443402049', 'name': 'Dennis', 'last_name': 'White', 'email': 'dwhitec@wikia.com', 'gender': 'Male', 'ip_address': '189.197.133.61', 'country': {'id': 13, 'name': 'Russia', 'code': 'RU'}, 'city': {'id': 13, 'name': 'Chagoda'}, 'pic': 'https://robohash.org/quaeetimpedit.jpg?size=50x50&set=set1'},
    {'id': '4074036347', 'name': 'Beverly', 'last_name': 'Dean', 'email': 'bdeand@sina.com.cn', 'gender': 'Female', 'ip_address': '130.170.10.51', 'country': {'id': 14, 'name': 'China', 'code': 'CN'}, 'city': {'id': 14, 'name': 'Tuanzhou'}, 'pic': 'https://robohash.org/sedeteum.bmp?size=50x50&set=set1'},
    {'id': '6609130191', 'name': 'Sharon', 'last_name': 'Grant', 'email': 'sgrante@angelfire.com', 'gender': 'Female', 'ip_address': '64.97.49.207', 'country': {'id': 15, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 15, 'name': 'Gaplek'}, 'pic': 'https://robohash.org/temporibusquodvitae.bmp?size=50x50&set=set1'},
    {'id': '7504409898', 'name': 'Carl', 'last_name': 'Ward', 'email': 'cwardf@sakura.ne.jp', 'gender': 'Male', 'ip_address': '49.88.244.185', 'country': {'id': 16, 'name': 'Russia', 'code': 'RU'}, 'city': {'id': 16, 'name': 'Podgornoye'}, 'pic': 'https://robohash.org/sitmolestiaevoluptatum.jpg?size=50x50&set=set1'},
    {'id': '8090530117', 'name': 'Earl', 'last_name': 'Little', 'email': 'elittleg@umich.edu', 'gender': 'Male', 'ip_address': '27.116.71.90', 'country': {'id': 17, 'name': 'Canada', 'code': 'CA'}, 'city': {'id': 17, 'name': 'Coaticook'}, 'pic': 'https://robohash.org/totamnatusaut.jpg?size=50x50&set=set1'},
    {'id': '9738804604', 'name': 'Robin', 'last_name': 'Carroll', 'email': 'rcarrollh@webeden.co.uk', 'gender': 'Female', 'ip_address': '127.144.245.105', 'country': {'id': 18, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 18, 'name': 'Pasirhaur'}, 'pic': 'https://robohash.org/impeditearumea.bmp?size=50x50&set=set1'},
    {'id': '4885935857', 'name': 'Virginia', 'last_name': 'Austin', 'email': 'vaustini@acquirethisname.com', 'gender': 'Female', 'ip_address': '144.241.233.248', 'country': {'id': 19, 'name': 'United States', 'code': 'US'}, 'city': {'id': 19, 'name': 'Buffalo'}, 'pic': 'https://robohash.org/recusandaeutqui.png?size=50x50&set=set1'},
    {'id': '5602909990', 'name': 'Jeffrey', 'last_name': 'Stevens', 'email': 'jstevensj@blinklist.com', 'gender': 'Male', 'ip_address': '8.248.12.250', 'country': {'id': 20, 'name': 'Czech Republic', 'code': 'CZ'}, 'city': {'id': 20, 'name': 'Žiželice'}, 'pic': 'https://robohash.org/architectosithic.jpg?size=50x50&set=set1'},
    {'id': '0294605894', 'name': 'Nicholas', 'last_name': 'Ellis', 'email': 'nellisk@histats.com', 'gender': 'Male', 'ip_address': '94.94.182.227', 'country': {'id': 21, 'name': 'Yemen', 'code': 'YE'}, 'city': {'id': 21, 'name': 'Ad Dimnah'}, 'pic': 'https://robohash.org/etquisaccusamus.bmp?size=50x50&set=set1'},
    {'id': '59825105310', 'name': 'Harold', 'last_name': 'Cruz', 'email': 'hcruzl@springer.com', 'gender': 'Male', 'ip_address': '46.234.25.215', 'country': {'id': 22, 'name': 'Philippines', 'code': 'PH'}, 'city': {'id': 22, 'name': 'San Nicolas'}, 'pic': 'https://robohash.org/impeditconsequunturratione.bmp?size=50x50&set=set1'},
    {'id': '9935737152', 'name': 'Henry', 'last_name': 'Cook', 'email': 'hcookm@cisco.com', 'gender': 'Male', 'ip_address': '181.1.150.133', 'country': {'id': 23, 'name': 'China', 'code': 'CN'}, 'city': {'id': 23, 'name': 'Jixiang'}, 'pic': 'https://robohash.org/nostrumdeseruntomnis.png?size=50x50&set=set1'},
    {'id': '2688100009', 'name': 'Dennis', 'last_name': 'Torres', 'email': 'dtorresn@netvibes.com', 'gender': 'Male', 'ip_address': '101.179.153.105', 'country': {'id': 24, 'name': 'Lebanon', 'code': 'LB'}, 'city': {'id': 24, 'name': 'Marjayoûn'}, 'pic': 'https://robohash.org/inventoreperferendisunde.png?size=50x50&set=set1'},
    {'id': '0875701078', 'name': 'Gary', 'last_name': 'Ryan', 'email': 'gryano@theglobeandmail.com', 'gender': 'Male', 'ip_address': '148.222.194.89', 'country': {'id': 25, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 25, 'name': 'Sinarwangi'}, 'pic': 'https://robohash.org/aliquidearummagni.jpg?size=50x50&set=set1'},
    {'id': '1270552058', 'name': 'Doris', 'last_name': 'Fowler', 'email': 'dfowlerp@youtu.be', 'gender': 'Female', 'ip_address': '67.38.224.254', 'country': {'id': 26, 'name': 'Poland', 'code': 'PL'}, 'city': {'id': 26, 'name': 'Zielonki'}, 'pic': 'https://robohash.org/eligendiofficiadolorem.png?size=50x50&set=set1'},
    {'id': '2613161876', 'name': 'Carlos', 'last_name': 'Burton', 'email': 'cburtonq@wordpress.org', 'gender': 'Male', 'ip_address': '242.27.189.57', 'country': {'id': 27, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 27, 'name': 'Cilebang Satu'}, 'pic': 'https://robohash.org/autemadipiscicommodi.png?size=50x50&set=set1'},
    {'id': '0112362567', 'name': 'Mildred', 'last_name': 'Greene', 'email': 'mgreener@msn.com', 'gender': 'Female', 'ip_address': '240.162.10.80', 'country': {'id': 28, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 28, 'name': 'Cimanglid'}, 'pic': 'https://robohash.org/modiquidemet.jpg?size=50x50&set=set1'},
    {'id': '8119077342', 'name': 'Paula', 'last_name': 'Boyd', 'email': 'pboyds@canalblog.com', 'gender': 'Female', 'ip_address': '106.242.198.112', 'country': {'id': 29, 'name': 'Democratic Republic of the Congo', 'code': 'CD'}, 'city': {'id': 29, 'name': 'Tshikapa'}, 'pic': 'https://robohash.org/noncorporisquaerat.png?size=50x50&set=set1'},
    {'id': '0742199142', 'name': 'Mildred', 'last_name': 'Rogers', 'email': 'mrogerst@gravatar.com', 'gender': 'Female', 'ip_address': '223.250.97.241', 'country': {'id': 30, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 30, 'name': 'Jatiklampok'}, 'pic': 'https://robohash.org/consequaturearumnumquam.png?size=50x50&set=set1'},
    {'id': '4173163312', 'name': 'Juan', 'last_name': 'Cox', 'email': 'jcoxu@fda.gov', 'gender': 'Male', 'ip_address': '237.119.160.231', 'country': {'id': 31, 'name': 'Russia', 'code': 'RU'}, 'city': {'id': 31, 'name': 'Staryy Oskol'}, 'pic': 'https://robohash.org/quamutsoluta.png?size=50x50&set=set1'},
    {'id': '5754329954', 'name': 'Johnny', 'last_name': 'Cooper', 'email': 'jcooperv@edublogs.org', 'gender': 'Male', 'ip_address': '31.73.23.20', 'country': {'id': 32, 'name': 'China', 'code': 'CN'}, 'city': {'id': 32, 'name': 'Duobao'}, 'pic': 'https://robohash.org/perferendisexplicabooccaecati.jpg?size=50x50&set=set1'},
    {'id': '4080628390', 'name': 'Annie', 'last_name': 'Reid', 'email': 'areidw@msu.edu', 'gender': 'Female', 'ip_address': '38.208.34.113', 'country': {'id': 33, 'name': 'Canada', 'code': 'CA'}, 'city': {'id': 33, 'name': 'Lacombe'}, 'pic': 'https://robohash.org/consequaturcupiditateat.png?size=50x50&set=set1'},
    {'id': '88742579710', 'name': 'Kathy', 'last_name': 'Stephens', 'email': 'kstephensx@delicious.com', 'gender': 'Female', 'ip_address': '196.112.173.84', 'country': {'id': 34, 'name': 'Chile', 'code': 'CL'}, 'city': {'id': 34, 'name': 'Talagante'}, 'pic': 'https://robohash.org/etetut.bmp?size=50x50&set=set1'},
    {'id': '8919540616', 'name': 'Roger', 'last_name': 'Chavez', 'email': 'rchavezy@wunderground.com', 'gender': 'Male', 'ip_address': '90.231.234.129', 'country': {'id': 35, 'name': 'France', 'code': 'FR'}, 'city': {'id': 35, 'name': 'Lomme'}, 'pic': 'https://robohash.org/commodietest.png?size=50x50&set=set1'},
    {'id': '2941852360', 'name': 'Steve', 'last_name': 'Baker', 'email': 'sbakerz@xinhuanet.com', 'gender': 'Male', 'ip_address': '149.100.241.171', 'country': {'id': 36, 'name': 'Indonesia', 'code': 'ID'}, 'city': {'id': 36, 'name': 'Maredakalada'}, 'pic': 'https://robohash.org/omnisarchitectomagnam.png?size=50x50&set=set1'},
    {'id': '5648844476', 'name': 'Margaret', 'last_name': 'Hawkins', 'email': 'mhawkins10@pbs.org', 'gender': 'Female', 'ip_address': '50.214.65.78', 'country': {'id': 37, 'name': 'Sweden', 'code': 'SE'}, 'city': {'id': 37, 'name': 'Sundsvall'}, 'pic': 'https://robohash.org/facerevelitquas.jpg?size=50x50&set=set1'},
    {'id': '0861695291', 'name': 'Jacqueline', 'last_name': 'Stevens', 'email': 'jstevens11@nbcnews.com', 'gender': 'Female', 'ip_address': '178.50.221.186', 'country': {'id': 38, 'name': 'Chile', 'code': 'CL'}, 'city': {'id': 38, 'name': 'Río Bueno'}, 'pic': 'https://robohash.org/eumvelet.bmp?size=50x50&set=set1'},
    {'id': '7813055055', 'name': 'Brandon', 'last_name': 'Fernandez', 'email': 'bfernandez12@theguardian.com', 'gender': 'Male', 'ip_address': '202.105.189.244', 'country': {'id': 39, 'name': 'Poland', 'code': 'PL'}, 'city': {'id': 39, 'name': 'Glinojeck'}, 'pic': 'https://robohash.org/idquasbeatae.jpg?size=50x50&set=set1'},
    {'id': '3886955052', 'name': 'Ashley', 'last_name': 'Gilbert', 'email': 'agilbert13@lycos.com', 'gender': 'Female', 'ip_address': '47.152.82.48', 'country': {'id': 40, 'name': 'China', 'code': 'CN'}, 'city': {'id': 40, 'name': 'Sujiatuo'}, 'pic': 'https://robohash.org/necessitatibusautquo.png?size=50x50&set=set1'},
    {'id': '0176299440', 'name': 'Samuel', 'last_name': 'Long', 'email': 'slong14@ebay.co.uk', 'gender': 'Male', 'ip_address': '8.4.54.35', 'country': {'id': 41, 'name': 'Turkmenistan', 'code': 'TM'}, 'city': {'id': 41, 'name': 'Serhetabat'}}];
    this.state = {
      isGenderValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      textField: {
        code: '',
        vendor: '',
      },
      dataTable: this.data,
    };
  }

  _handleTouchTap() {
    this.data.push({
      'code': this.state.textField.code,
      'vendor': this.state.textField.vendor,
    });
    this.setState({
      dataTable: this.data,
      isRegistered: true,
      textField: {},
    });
  }

  _handleValidationName(input, data) {
    this.setState({
      textField: {...this.state.textField, name: data},
    });
  }

  _handleValidationCode(input, data) {
    this.setState({
      textField: {...this.state.textField, code: data},
    });
  }

  render() {
    let _renderCreateVendor = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Create Vendor</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    hintText="Code"
                    value={this.state.textField.code}
                    floatingLabelText="Code"
                    fullWidth={true}
                    onChange={( e, input) => {
                      this._handleValidationCode( e, input );
                    }}
                  />

                  <TextField
                    required={true}
                    hintText="Vendor"
                    floatingLabelText="Vendor"
                    fullWidth={true}
                    value={this.state.textField.vendor}
                    onChange={( e, input) => {
                      this.setState({
                        textField: {...this.state.textField, vendor: input},
                      });
                    }}
                  />
                  <RaisedButton
                    label="Create"
                    secondary={true}
                    style={styles.raisedButton}
                    onTouchTap={() => this._handleTouchTap()}
                  />
                  <Snackbar
                    open={this.state.isRegistered}
                    message="Vendor Added"
                    autoHideDuration={4000}
                    bodyStyle={{backgroundColor: 'teal'}}
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
          <h3 style={styles.navigation}>Manage Vendor</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <MaterialContainer
                    keys="name"
                    className="mdl-data-table"
                    columns={columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.data}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'country.name', order: 'asc'}}
                    pageSizeOptions={[5]}
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
        <Grid item={true} xs={10} md={12} lg={12}>
          <Paper style={styles.paper}>
            <Col xs={12} md={12} lg={12}>
              <Tabs initialSelectedIndex={0}>
                <Tab key={1}label="Create Vendor">
                  {_renderCreateVendor()}
                </Tab>
                <Tab key={2}label="Manage Vendor">
                  {_renderManageUser()}
                </Tab>
              </Tabs>
            </Col>
          </Paper>
        </Grid>
      </Row>
    );
  }
}
