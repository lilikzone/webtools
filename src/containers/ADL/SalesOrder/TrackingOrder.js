import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookieData = cookies.get('ssid');


export default class TrackingOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      loadWO: false,
      currentTab: 0,
      isGenderValid: true,
      isEmailValid: true,
      isPhoneValid: true,
      isRoleValid: true,
      isVendorValid: true,
      isAgencyValid: true,
      isRegistered: false,
      onEdit: false,
      idTemp: '',
      codeTemp: '',
      nameTemp: '',
      textField: [],
      dataTable: this.data,
      cookies: '',
      workOrderData: [],
      salesOrderData: [],
      orderDataTemp: [],
      redirect: false,
      note: '',
      editWarning: false,
    };
    const EditBtnSO = (data) => (
      <div className="text-center">
        <button
          key={data.id}
          className="mdl-button mdl-button--raised"
          onClick={() =>
            this.setState({
              onEditOrder: true,
              orderDataTemp: data,
            })
          }
        >
          Edit
        </button>
      </div>
    );
    const EditBtnWO = (data) => (
      <div className="text-center">
        <button
          key={data.id}
          className="mdl-button mdl-button--raised"
          onClick={() =>
            this.setState({
              onEditWo: true,
              orderDataTemp: data,
            })
          }
        >
          Edit
        </button>
      </div>
    );

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
        title: 'Installation Date',
        prop: 'installation_date',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      // {
      //   id: 10,
      //   title: '',
      //   render: EditBtnWO,
      //   width: '2%',
      //   headerClass: 'mdl-data-table__cell--non-numeric',
      // },
      // {
      //   id: 11,
      //   title: '',
      //   render: DeleteBtn,
      //   width: '2%',
      //   headerClass: 'mdl-data-table__cell--non-numeric',
      // },
    ];
    this.SalesOrdersColumns = [
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
        title: 'Status',
        prop: 'status',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Customer ID',
        prop: 'customer_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Product ID',
        prop: 'product_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Customer Email',
        prop: 'customer_email',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Product Price',
        prop: 'product_price',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Discount Price',
        prop: 'discount_price',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Tax Amount',
        prop: 'tax_amount',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Tax Price',
        prop: 'tax_price',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Materai',
        prop: 'materai',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Subtotal',
        prop: 'subtotal',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Grandtotal',
        prop: 'grandtotal',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Payment Type',
        prop: 'payment_type',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Due Date',
        prop: 'due_date',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Sales Name',
        prop: 'sales_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 17,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 18,
        title: 'Notes',
        prop: 'notes',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 19,
        title: 'Flag Status',
        prop: 'flag_status',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 20,
        title: '',
        render: EditBtnSO,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      // {
      //   id: 20,
      //   title: '',
      //   render: DeleteBtn,
      //   width: '2%',
      //   headerClass: 'mdl-data-table__cell--non-numeric',
      // },
    ];
  }


  componentDidMount() {
    this._getSOdata();
    this._getWOdata();
  }

  _onRequestClose=(data) => {
    this.setState({alert: false});
  }

  _getSOdata() {
    if (cookieData !== undefined && cookieData !== '') {
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();
      fetch('https://source.adlsandbox.com/api/order/all',
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
        this.setState({salesOrderData: respons.data, load: true});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }

  _getWOdata() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
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
            'Authorization': `Bearer ${cookieData}`,
            'Content-Type': 'application/json',
          },
        }, )
      .then(status)
      .then(json)
      .then((respons) => {
        console.log(respons);
        this.setState({workOrderData: respons.data, loadWO: true});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }

  _handleClose() {
    this.setState({
      onEditOrder: false,
      editWarning: false,

    });
  }
  _handleWarning() {
    this.setState({
      onEditOrder: false,
      editWarning: true,
    });
  }

  _updateStatus(statusData) {
    if (cookieData !== undefined && cookieData !== '') {
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();

      const order_id = this.state.orderDataTemp.id;
      const note = this.state.note;

      fetch(`https://source.adlsandbox.com/api/order/verification?status=${statusData}&id=${order_id}&note=${note}`,
        {
          method: 'POST',
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
        this.setState({
          alertMessage: respons.message,
          alert: true,
          load: true,
          onEditOrder: false,
          editWarning: false,
          redirect: true,
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      this._getSOdata();
    }
  }

  render() {
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Decline"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleWarning()}
      />,
      <FlatButton
        label="Verified"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._updateStatus('verified')}
      />,
    ];
    let actionsWarning = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._updateStatus('decline')}
      />,
    ];
    let _manageSO = () => {
      const load = this.state.load;
      return (
        <div>
          <h3 style={styles.navigation}>Manage Sales Order</h3>
          <Row>

            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout">
                <div >
                  <br />
                  <Dialog
                    title="Update Sales Order"
                    actions={actions}
                    modal={false}
                    open={this.state.onEditOrder}
                    onRequestClose={() => this._handleClose()}
                    autoScrollBodyContent={true}
                  >
                    {_renderModalComponent()}
                  </Dialog>
                  <Dialog
                    title="Decline Notes"
                    actions={actionsWarning}
                    modal={false}
                    open={this.state.editWarning}
                    onRequestClose={() => this._handleClose()}
                    autoScrollBodyContent={true}
                  >
                    <TextField
                      multiLine={true}
                      floatingLabelText="Notes"
                      onChange={(e, input) => {
                        this.setState({note: input});
                      }}
                      rows={2}
                      rowsMax={4}
                    />
                  </Dialog>
                  {load ? <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.SalesOrdersColumns}
                    dataArray={this.state.salesOrderData}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'desc'}}
                    pageSizeOptions={[5]}
                          /> : ''}


                </div>
              </div>
            </Col>

          </Row>
        </div>
      );
    };
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.id}
            hintText="ID"
            floatingLabelText="ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, id: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.status}
            hintText="Status"
            floatingLabelText="Status"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, status: input},
              });
            }}
          />

          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.customer_id}
            hintText="Customer ID"
            floatingLabelText="Customer ID"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, customer_id: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.product_id}
            hintText="Product ID"
            floatingLabelText="Product ID"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, product_id: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.customer_email}
            hintText="Customer email"
            floatingLabelText="Customer email"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, customer_email: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.customer_name}
            hintText="Customer Name"
            floatingLabelText="Customer Name"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, customer_name: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.product_price}
            hintText="Product Price"
            floatingLabelText="Product Price"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, product_price: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.discount_price}
            hintText="Discount Price"
            floatingLabelText="Discount Price"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, discount_price: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.tax_amount}
            hintText="Tax Amount"
            floatingLabelText="Tax Amount"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, tax_amount: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.tax_price}
            hintText="Tax Price"
            floatingLabelText="Tax Price"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, tax_price: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.materai}
            hintText="Materai"
            floatingLabelText="Materai"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, materai: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.subtotal}
            hintText="Subtotal"
            floatingLabelText="Subtotal"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, subtotal: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.grandtotal}
            hintText="Grandtotal"
            floatingLabelText="Grandtotal"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, grandtotal: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.payment_type}
            hintText="Payment Type"
            floatingLabelText="Payment Type"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, payment_type: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.due_date}
            hintText="Due Date"
            floatingLabelText="Due Date"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, due_date: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.sales_name}
            hintText="Sales Name"
            floatingLabelText="Sales Name"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, sales_name: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.created_at}
            hintText="Created At"
            floatingLabelText="Created At"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, created_at: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.updated_at}
            hintText="Updated At"
            floatingLabelText="Updated At"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, updated_at: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.flag_status}
            hintText="Flag Status"
            floatingLabelText="Flag Status"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, flag_status: input},
              });
            }}
          />

        </div>
      );
    };
    let _manageWO = () => {
      return (
        <div>
          <h3 style={styles.navigation}>Manage Work Order</h3>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <br />
                  <Dialog
                    title="Update"
                    actions={actions}
                    modal={false}
                    open={this.state.onEditWo}
                    onRequestClose={() => this._handleClose()}
                  >
                    {_renderModalComponent()}
                  </Dialog>
                  {this.state.loadWO ? <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.WorkOrdersColumns}
                    dataArray={this.state.workOrderData}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'desc'}}
                    pageSizeOptions={[5]}
                                       /> : ''}

                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    };
    return (
      <Row className="m-b-15">
        {this.state.redirect ? <React.Fragment>{window.location.reload()}</React.Fragment> : '' }
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="Sales Order"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.currentTab === 0 && _manageSO()}
              </Tab>
              <Tab
                value={1}
                label="Working Order"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.currentTab === 1 && _manageWO()}
              </Tab>
            </Tabs>
          </Col>
        </Paper>
        <Snackbar
          open={this.state.alert}
          message={this.state.alertMessage}
          autoHideDuration={2000}
          bodyStyle={{backgroundColor: 'teal'}}
          onRequestClose={this._onRequestClose}
        />
      </Row>
    );
  }
}
