import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {red400} from 'material-ui/styles/colors';
import {CSVLink} from 'react-csv';
import moment from  'moment';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/customer/';
const sourceLink = 'https://source.adlsandbox.com/storage/';


export default class TransactionCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadAllCustomer: true,
      role: '',
      allCustomerExport: [],
      dataCustomer: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      keyword: '',
      loaded: false,
    };
    const ActiveDate = (data) => (
      data.status == 'Active' && data.updated_at
    );
    const KTPRender = (data) => (
      data.ktp && data.ktp.length > 0 &&
      <div className="text-center">
        <a href={sourceLink + data.ktp} target="_blank"> VIEW KTP </a>
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
        title: 'Subs ID',
        prop: 'subs_id',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Date of SO',
        prop: 'date_so',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'SO Status',
        prop: 'so_status',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Date of wO',
        prop: 'date_wo',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Status WO',
        prop: 'status_wo',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'City',
        prop: 'city',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Registration Date',
        prop: 'created_at',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Group',
        prop: 'group',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Customer Status',
        prop: 'customer_status',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Install Address',
        prop: 'install_address',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Cluster Name',
        prop: 'cluster_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'E-mail',
        prop: 'email1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Cluster Code',
        prop: 'cluster_code',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'SN STB',
        prop: 'sn_stb',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 17,
        title: 'SN ONT',
        prop: 'sn_ont',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 18,
        title: 'Active Date',
        prop: 'updated_at', // will considered as active date while status == 'active', [waiting for api 'status' returns]
        render: ActiveDate,
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 19,
        title: 'ID Number',
        prop: 'id_number',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 20,
        title: 'Product Name',
        prop: 'product_name',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 21,
        title: 'Install Date',
        prop: 'install_date',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 22,
        title: 'Mobile Phone',
        prop: 'phone1',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 23,
        title: 'Month Install',
        prop: 'month_install',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 24,
        title: 'Purchase Point',
        prop: 'purchase_point',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 25,
        title: 'Product Price',
        prop: 'product_price',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 26,
        title: 'Billing Date',
        prop: 'billing_date',
        width: '5%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 27,
        title: 'KTP',
        prop: 'ktp',
        width: '9%',
        render: KTPRender,
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
      // {
      //   id: 18,
      //   title: 'Action',
      //   render: DeleteBtn,
      //   width: '5%',
      //   headerClass: 'mdl-data-table__cell--non-numeric',
      // },
    ];
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      const userData = cookies.get('rdata');
      const role =  userData.split('+');
      if (role === 'sales') {
        this.setState({
          cookies: cookies.get('ssid'),
          role: role[1],
        });
      } else {
        this.setState({
          cookies: cookies.get('ssid'),
          role: role[1],
        });
      }
    }
  }

  componentDidMount() {
    this._getAPI(`${HOSTNAME}all`);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dataCustomer.current_page != this.state.dataCustomer.current_page) {
      this.setState({
        loaded: false,
      });
      this._getAPI(`${HOSTNAME}all?page=${this.state.dataCustomer.current_page}`);
    }
  }

  _onUpdate() {
    this.setState({
      updateAlert: false,
    });
  }

  _getCustomerAll() {
    const cookieData = this.state.cookies;
    if (cookieData !== undefined && cookieData !== '') {
      this.setState({
        loadAllCustomer: false,
      });
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();

      console.log('https://source.adlsandbox.com/api/customer/all?export=1');
      fetch('https://source.adlsandbox.com/api/customer/all?export=1',
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
        this.setState({allCustomerExport: respons, loadAllCustomer: true});
        this.csv.link.click();
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
            dataCustomer: {
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

  _getAPI(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataCustomer: responseJson,
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let _renderExportSearch = () => {
      return (
        <p>
          <CSVLink
            data={this.state.dataCustomer.data}
            filename={`Transaction Customer ${new Date(moment())}.xls`}
            style={{color: 'white'}}
            target="_blank"
          >
            <RaisedButton
              backgroundColor={red400}
              style={{marginTop: 10}}
              label={'EXPORT DATA'}
              labelStyle={{color: 'white'}}
            />
          </CSVLink>
          { (['admin', 'operation'].includes(this.state.role)) &&
          <span>
            <RaisedButton
              backgroundColor={red400}
              style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
              labelStyle={{color: 'white'}}
              label={'EXPORT ALL DATA'}
              disabled={!this.state.loadAllCustomer}
              onMouseDown={(() => {
                this._getCustomerAll();
              })}
            />
            <CSVLink
              data={this.state.allCustomerExport && this.state.allCustomerExport.length > 0 ? this.state.allCustomerExport : []}
              ref={(pb) => this.csv = pb}
              filename={`ALL TRANSACTION CUSTOMER ${new Date(moment())}.xls`}
              style={{color: 'white'}}
              target="_blank"
            />
            { !this.state.loadAllCustomer && <CircularProgress size={20} style={{marginLeft: 10, top: 10}} />}</span> }
        </p>);
    };
    return (
      <Row className="m-b-15">
        {this.state.loaded ?
          <div>
            <h3>Customer Data</h3>
            <Paper style={styles.paper}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <div>
                  {_renderExportSearch()}
                  <div>
                    <TextField
                      required={true}
                      value={this.state.keyword}
                      hintText={'Search'}
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
                </div>
                <Row>
                  <Col xs={12} md={12} lg={12}>
                    <div className="mdl-layout mdl-layout--no-drawer-button container">
                      <div className="mdl-layout--fixed-drawer" id="asa">
                        <MaterialContainer
                          keys="id"
                          className="mdl-data-table"
                          columns={this.columns}
                          onChangePage={((page) => this.setState({
                            dataCustomer: {...this.state.dataCustomer, current_page: page + 1},
                          }))}
                          dataArrayCustom={this.state.dataCustomer.data}
                          draggable={true}
                          sortable={false}
                          currentPage={this.state.dataCustomer.current_page - 1}
                          total={this.state.dataCustomer.total}
                          sortBy={{prop: 'id', order: 'asc'}}
                          pageSizeOptions={[10]}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Paper>
          </div> :

          <Paper style={styles.paper}>
            <div style={{minWidth: 700}}>
              <div
                style={{margin: '0 auto',
                  width: '20%',
                  textAlign: 'center'}}
              >
                <CircularProgress />
              </div>
            </div>
          </Paper>
       }

        {/* </div> */}
      </Row>);
  }
}
