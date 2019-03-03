import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {MaterialContainer} from 'react-table-components';
import {Row, Col} from 'react-flexbox-grid';
import CircularProgress from 'material-ui/CircularProgress';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default class WorkingOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrderData: [],
      cookies: '',
    };
    this.WorkOrdersColumns = [
      {
        id: 0,
        title: 'Id',
        prop: 'id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 1,
        title: 'Installation Type',
        prop: 'type_installation',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Status',
        prop: 'status',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Subscription ID',
        prop: 'subs_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Product ID',
        prop: 'product_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Vendor',
        prop: 'vendor',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Installer',
        prop: 'installer',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'bast',
        prop: 'bast',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Sales Name',
        prop: 'sales_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
      },
      {
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Delete Action',
        render: DeleteBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }

  componentWillMount() {
    const cookiesData = cookies.get('ssid');
    if (cookiesData !== undefined && cookiesData !== '') {
      this.setState({cookies: cookiesData});
    }
  }

  componentDidMount() {
    this._getWOData();
  }

  _getWOData() {
    const status = (response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(new Error(response.statusText));
    };
    const json = (response) => response.json();
    fetch('https://source.adlsandbox.com/api/workorder/all',
      {
        method: 'get',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      }, )
    .then(status)
    .then(json)
    .then((respons) => {
      console.log(respons);
      this.setState({workOrderData: respons.data, load: true});
    }).catch((error) => {
      console.log(`error: ${error}`);
    });
  }

  render() {
    return (<div>
      <h3 style={styles.navigation}>Manage Work Order</h3>
      <Row>
        <Paper  style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <br />
                {this.state.load ?
                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.WorkOrdersColumns}
                    dataArray={this.state.workOrderData}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'desc'}}
                    pageSizeOptions={[5]}
                  /> :
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
                  </Paper>}
              </div>
            </div>
          </Col>
        </Paper>
      </Row>
    </div>);
  }
}
