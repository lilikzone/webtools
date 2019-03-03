import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import styles from '../../../styles';
import {Paper} from 'material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
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
      dataCustomer: [],
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
    return (<Row>
      {this.state.loaded ?
        <div>

          <h3>Customer Data</h3>
          <Paper style={styles.paper}>
            <Col xs={12} md={12} lg={12} sm={12}>
              <MaterialContainer
                keys="id"
                className="mdl-data-table"
                columns={columns}
                dataArray={this.state.dataCustomer}
                draggable={false}
                sortable={false}
                sortBy={{prop: 'id', order: 'desc'}}
                pageSizeOptions={[5]}
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
