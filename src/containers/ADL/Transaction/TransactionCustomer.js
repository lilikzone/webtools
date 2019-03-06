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
    title: 'Cust ID',
    prop: 'custom_customer_id',
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
    prop: 'email',
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
    title: 'ID Number',
    prop: 'id_number',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 18,
    title: 'Product Name',
    prop: 'product_name',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 19,
    title: 'Install Date',
    prop: 'install_date',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 20,
    title: 'Mobile Phone',
    prop: 'mobile_phone',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 21,
    title: 'Month Install',
    prop: 'month_install',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 22,
    title: 'Purchase Point',
    prop: 'purchase_point',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 23,
    title: 'Product Price',
    prop: 'product_price',
    width: '5%',
    headerClass: 'mdl-data-table__cell--non-numeric',
    cellClass: 'mdl-data-table__cell--non-numeric',
  },
  {
    id: 24,
    title: 'Billing Date',
    prop: 'billing_date',
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
  // {
  //   id: 18,
  //   title: 'Action',
  //   render: DeleteBtn,
  //   width: '5%',
  //   headerClass: 'mdl-data-table__cell--non-numeric',
  // },
];

export default class TransactionCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCustomer: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      keyword: '',
      loaded: false,
    };
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
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
    return (
      <Row className="m-b-15">
        {this.state.loaded ?
          <div className="mdl-layout mdl-layout--no-drawer-button container">
            <h3>Customer Data</h3>
            <Paper style={styles.paper}>
              <Col xs={12} md={12} lg={12} sm={12}>
                <div>
                  <RaisedButton
                    backgroundColor={red400}
                    style={{marginTop: 10, marginBottom: 10}}
                  >
                    <CSVLink
                      data={this.state.dataCustomer.data}
                      filename={`Transaction Customer ${new Date(moment())}.xls`}
                      style={{color: 'white'}}
                      target="_blank"
                    >
                      EXPORT
                    </CSVLink>
                  </RaisedButton>
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
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={columns}
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
