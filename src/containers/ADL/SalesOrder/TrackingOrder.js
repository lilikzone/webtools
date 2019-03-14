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
import FileBase64 from 'react-file-base64';

const cookies = new Cookies();
const sourceLink = 'https://source.adlsandbox.com/storage/';


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
      orderFilter: '',
      fileKtp: '',
      fileAbd: '',
      fileForm: '',
    };
    const EditBtnSO = (data) => (
      <div className="text-center">
        {data.status != 'decline' ?
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
        </button> :
          <RaisedButton
            label="Edit"
            disabled={true}
          />
      }
      </div>
    );
    const ABDRender = (data) => (
      data.abd && data.abd.length > 0 &&
      <div className="text-center">
        <a href={sourceLink + data.abd} target="_blank"> VIEW ABD </a>
      </div>
    );
    const FormRender = (data) => (
      data.form && data.form.length > 0 &&
      <div className="text-center">
        <a href={sourceLink + data.form} target="_blank"> VIEW FORM </a>
      </div>
    );
    const KTPRender = (data) => (
      data.ktp && data.ktp.length > 0 &&
      <div className="text-center">
        <a href={sourceLink + data.ktp} target="_blank"> VIEW KTP </a>
      </div>
    );
    const paymentTypeValue = (data) => (
      <div>
        {this._reformatPaymentType(data.payment_type)}
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
        id: 12,
        title: 'ID',
        prop: 'id',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Status',
        prop: 'status',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Note',
        prop: 'notes',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 0,
        title: 'Sales Name',
        prop: 'sales_name',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 1,
        title: 'Customer ID',
        prop: 'customer_id',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Product Name',
        prop: 'product_name',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Customer Email',
        prop: 'customer_email',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Customer Name',
        prop: 'customer_name',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'Customer Type',
        prop: 'payment_type',
        render: paymentTypeValue,
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'Grand Total',
        prop: 'grandtotal',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Created at',
        prop: 'created_at',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Installation Date',
        prop: 'installation_date',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Payment Date',
        prop: 'payment_date',
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Edit Action',
        render: EditBtnSO,
        width: '9%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'ABD',
        prop: 'abd',
        width: '9%',
        render: ABDRender,
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Form',
        prop: 'form',
        width: '9%',
        render: FormRender,
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'KTP',
        prop: 'ktp',
        width: '9%',
        render: KTPRender,
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
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

  componentWillMount() {
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      const userData = cookies.get('rdata');
      const role =  userData.split('+');
      if (role === 'sales') {
        this.setState({
          cookies: cookieData,
          role: role[1],
          orderFilter: `sales_name=${role[0]}`,
        });
      } else {
        this.setState({
          cookies: cookieData,
          role: role[1],
        });
      }
    }
  }

  getFilesKtp(file) {
    this.setState({fileKtp: file});
  }
  getFilesAbd(file) {
    this.setState({fileAbd: file});
  }
  getFilesForm(file) {
    this.setState({fileForm: file});
  }

  _onRequestClose=(data) => {
    this.setState({alert: false});
  }

  _reformatPaymentType(paymentTypeValue) {
    if (paymentTypeValue == 'pai') {
      paymentTypeValue = 'Payment After Installation';
    } else if (paymentTypeValue == 'pbi' ) {
      paymentTypeValue = 'Regular';
    }
    return paymentTypeValue;
  }

  _getSOdata() {
    const cookieData = this.state.cookies;
    if (cookieData !== undefined && cookieData !== '') {
      const orderFilter = this.state.orderFilter;
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();

      console.log(`https://source.adlsandbox.com/api/order/all?${orderFilter}`);
      fetch(`https://source.adlsandbox.com/api/order/all?${orderFilter}`,
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
      fileKtp: '',
      fileAbd: '',
      fileForm: '',

    });
  }
  _handleWarning() {
    this.setState({
      onEditOrder: false,
      editWarning: true,
    });
  }

  _updateStatus(statusData) {
    const cookieData = cookies.get('ssid');
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
          // redirect: true,
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      this._getSOdata();
      this._handleClose();
      this.setState({
        redirect: true,
      });
    }
  }

  _handleUpdate() {
    const fileAbd = this.state.fileAbd;
    const fileForm = this.state.fileForm;
    const fileKtp = this.state.fileKtp;
    const order_id = this.state.orderDataTemp.id;
    console.log('idnyooo', order_id);
    const type_id = this.state.orderDataTemp.type_id;
    const id_number = this.state.orderDataTemp.id_number;
    const phone1 = this.state.orderDataTemp.phone1;
    const customer_name = this.state.orderDataTemp.customer_name;
    const id_address = this.state.orderDataTemp.id_address;
    const cookieData = cookies.get('ssid');
    if (cookieData !== undefined && cookieData !== '') {
      this.setState({
        load: false,
      });
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();
      console.log('lemparr body', JSON.stringify({
        'abd': fileAbd.base64,
        'abd_filename': fileAbd.name,
        'ktp': fileKtp.base64,
        'ktp_filename': fileKtp.name,
        'form': fileForm.base64,
        'form_filename': fileForm.name,
      }), );
      fetch(`https://source.adlsandbox.com/api/order/verification?status=open&id=${order_id}&type_id=${type_id}&id_number=${id_number}&phone1=${phone1}&customer_name=${customer_name}&id_address=${id_address}`,
        {
          method: 'POST',
          type: 'cors',
          headers: {
            'Authorization': `Bearer ${cookieData}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'abd': fileAbd.base64,
            'abd_filename': fileAbd.name,
            'ktp': fileKtp.base64,
            'ktp_filename': fileKtp.name,
            'form': fileForm.base64,
            'form_filename': fileForm.name,
          }),
        }, )
      .then(status)
      .then(json)
      .then((respons) => {
        console.log(respons);
        this.setState({
          alertMessage: respons.message,
          alert: true,
          onEditOrder: false,
          editWarning: false,
          // redirect: true,
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });

      this._getSOdata();
      this._handleClose();
    }
  }

  _handleValidationTypePayment(input, index, data) {
    let dataInput = data;

    this.setState({
      orderDataTemp: {...this.state.orderDataTemp, payment_type: dataInput},
    });
  }

  render() {
    console.log('gambar', sourceLink + this.state.orderDataTemp.abd);
    let actions = (role) => {
      if (['internalsales', 'salesadmin', 'sales'].includes(role)) {
        return ([
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => this._handleClose()}
          />,
          <FlatButton
            label="Update"
            primary={true}
            keyboardFocused={true}
            onTouchTap={() => this._handleUpdate()}
          />,
        ]);
      } else {
        return ([
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
        ]);
      }
    };
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
                    actions={actions(this.state.role)}
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
    let _uploadForm = (role) => {
      if (['internalsales', 'salesadmin', 'sales'].includes(role)) {
        return (
          <div>
            <br />
            <h3>Upload Files</h3>
            <hr />
            <div className="input-group">
              <span className="input-group-icon">
                <label>File KTP</label>
              </span>
              <div className="input-group-text">
                <FileBase64 name="ktp" multiple={false} onDone={this.getFilesKtp.bind(this)} />
              </div>
              <img style={{width: 500}} src={this.state.fileKtp.base64 == undefined && this.state.orderDataTemp.ktp ? sourceLink + this.state.orderDataTemp.ktp : this.state.fileKtp.base64} />
            </div>
            <div className="input-group">
              <span className="input-group-icon">
                <label>File ABD</label>
              </span>
              <div className="input-group-text">
                <FileBase64 multiple={false} name="abd"  onDone={this.getFilesAbd.bind(this)} />
              </div>
              <img style={{width: 500}} src={this.state.fileAbd.base64 == undefined && this.state.orderDataTemp.abd ? sourceLink + this.state.orderDataTemp.abd : this.state.fileAbd.base64} />
            </div>
            <div className="input-group">
              <span className="input-group-icon">
                <label>File Form</label>
              </span>
              <div className="input-group-text">
                <FileBase64 multiple={false}  name="file_form" onDone={this.getFilesForm.bind(this)} />
              </div>
              <img style={{width: 500}} src={this.state.fileForm.base64 == undefined && this.state.orderDataTemp.form ? sourceLink + this.state.orderDataTemp.form : this.state.fileForm.base64} />
            </div>
          </div>
        );
      }
    };
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.sales_name}
            hintText="Sales Name"
            floatingLabelText="Sales Name"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, sales_name: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            // disabled={true}
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
            value={this.state.orderDataTemp.product_name}
            hintText="Product Name"
            floatingLabelText="Product Name"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, product_name: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.customer_email}
            hintText="Customer Email"
            floatingLabelText="Customer Email"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, customer_email: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            // disabled={true}
            value={this.state.orderDataTemp.customer_name}
            hintText="Customer Name"
            floatingLabelText="Customer Name"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, customer_name: input},
              });
            }}
          />
          <SelectField
            fullWidth={true}
            required={true}
            floatingLabelText="Customer Type"
            name="customer_type"
            value={this.state.orderDataTemp.payment_type}
            onChange={(input, index, dataSource) => {
              this._handleValidationTypePayment(input, index, dataSource);
            }}
          >
            <MenuItem  value="pbi" primaryText="Regular" />
            <MenuItem  value="pai" primaryText="Pay After Installation" />
          </SelectField>
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.grandtotal}
            hintText="Grand total"
            floatingLabelText="Grand total"
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
            value={this.state.orderDataTemp.installation_date}
            hintText="Installation Date"
            floatingLabelText="Installation Date"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, installation_date: input},
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            disabled={true}
            value={this.state.orderDataTemp.payment_date}
            hintText="Payment Date"
            floatingLabelText="Payment Date"
            onChange={(e, input) => {
              this.setState({
                orderDataTemp: {...this.state.orderDataTemp, payment_date: input},
              });
            }}
          />
          {_uploadForm(this.state.role)}
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
                    actions={actions()}
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
