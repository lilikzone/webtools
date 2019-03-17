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
import {Subheader, DatePicker} from 'material-ui';
import Cookies from 'universal-cookie';
import moment from  'moment';
import Dialog from 'material-ui/Dialog';

const cookies = new Cookies();

const futureLeadsColumn = [
  {id: 0, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 1, title: 'Leads Id', prop: 'leads_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 2, title: 'DOB', prop: 'dob', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 3, title: 'Birth Place', prop: 'birth_place', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 4, title: 'Gender', prop: 'gender', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 5, title: 'Type Id', prop: 'type_id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 6, title: 'Id Number', prop: 'id_number', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 7, title: 'Id Address', prop: 'id_address', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 8, title: 'Phone 1', prop: 'phone1', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 9, title: 'Phone 2', prop: 'phone2', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 10, title: 'Phone 3', prop: 'phone3', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 11, title: 'Email 1', prop: 'email1', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 12, title: 'Email 2', prop: 'email2', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 13, title: 'Help Desk Name', prop: 'helpdesk_name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];

const style = {
  title: {
    textAlign: 'center',
  },
};

export default class TicketExistingCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      dataFutureLeads: [],
      dataInquiry: [],
      textField: {
        customer_name: '',
        dob: '',
        birth_place: '',
        type_id: '',
        id_number: '',
        id_address: '',
        phone1: '',
        phone2: '',
        phone3: '',
        email1: '',
        email2: '',
        sales_name: '',
        type: '',
        gender: '',
      },
      openWarning: false,
      cookies: '',
      warningMessage: '',
      TitleMessage: '',
    };
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
      const json = (response) => response.json();
      fetch(`https://source.adlsandbox.com/api/admin/check?token=${cookies.get('ssid')}`, {
        method: 'get',
        type: 'cors',
      })
      .then(json)
      .then((respons) => {
        this.setState({
          textField: {...this.state.textField, sales_name: respons.user.username},
        });
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }

  _handleTouch = () => {
    const customer_name = this.state.textField.customer_name;
    const dob = moment(this.state.textField.dob).format('YYYY-MM-DD');
    const birth_place = this.state.textField.birth_place;
    const type_id = this.state.textField.type_id;
    const id_number = this.state.textField.id_number;
    const id_address = this.state.textField.id_address;
    const phone1 = this.state.textField.phone1;
    const phone2 = this.state.textField.phone2;
    const phone3 = this.state.textField.phone3;
    const email1 = this.state.textField.email1;
    const email2 = this.state.textField.email2;
    const sales_name = this.state.textField.sales_name;
    const gender = this.state.textField.gender;


    const json = (response) => response.json();
    fetch(`https://source.adlsandbox.com/api/customer/register?customer_name=${customer_name}&dob=${dob}&birth_place=${birth_place}&type_id=${type_id}&id_number=${id_number}&id_address=${id_address}&phone1=${phone1}&phone2=${phone2}&phone3=${phone3}&email1=${email1}&email2=${email2}&sales_name=${sales_name}&gender=${gender}`, {
      method: 'POST',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then(json)
      .then((respons) => {
        console.log(respons);
        if (respons.status === 200) {
          this.setState({
            openWarning: true,
            warningMessage: respons.message,
            TitleMessage: 'Success',
            textField: {
              customer_name: '',
              dob: '',
              birth_place: '',
              type_id: '',
              id_number: '',
              id_address: '',
              phone1: '',
              phone2: '',
              phone3: '',
              email1: '',
              email2: '',
              sales_name: '',
              type: '',
              gender: '',
            },
          });
        }
      }).catch((error) => {
        console.log(`error: ${error}`);
        this.setState({
          openWarning: true,
          warningMessage: `${error}`,
          TitleMessage: 'Error',
        });
      });
  }

  handleClose = () => {
    this.setState({openWarning: false});
  }

  render() {
    let _createLeads = () => {
      return (<div>
        <Col xs={12} md={6} lg={6} sm={12}>
          <form>
            <SelectField
              fullWidth={true}
              required={true}
              value={this.state.textField.type}
              floatingLabelText="Type"
              name="type"
              onChange={(e, index, value) => {
                this.setState({
                  textField: {...this.state.textField, type: value},
                });
              }}
            >
              <MenuItem value="future_leads" primaryText="Future Leads" />
              <MenuItem value="inquiry" primaryText="Inquiry" />
            </SelectField>
            <TextField
              required={true}
              floatingLabelFixed={true}
              value={this.state.textField.customer_name}
              floatingLabelText="Customer Name"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, customer_name: input},
                });
              }}
            />
            <DatePicker
              // value={new Date(this.state.textField.dob)}
              floatingLabelFixed={true}
              floatingLabelText="Date of Birth"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, dob: input},
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
                  textField: {...this.state.textField, birth_place: input},
                });
              }}
            />

            <SelectField
              floatingLabelText="Gender"
              floatingLabelFixed={true}
              fullWidth={true}
              value={this.state.textField.gender}
              onChange={(e, index, value) => {
                this.setState({
                  textField: {
                    ...this.state.textField,
                    gender: value,
                  },
                });
              }}
            >
              <MenuItem  value="Male" primaryText="Male" />
              <MenuItem  value="Female" primaryText="Female" />
            </SelectField>

            <SelectField
              floatingLabelText="ID Type"
              floatingLabelFixed={true}
              fullWidth={true}
              value={this.state.textField.type_id}
              onChange={(e, index, value) => {
                this.setState({
                  textField: {
                    ...this.state.textField,
                    type_id: value,
                  },
                });
              }}
            >
              <MenuItem  value="KTP" primaryText="KTP" />
              <MenuItem  value="KITAS" primaryText="KITAS" />
              <MenuItem  value="SIM" primaryText="SIM" />
              <MenuItem  value="Passport" primaryText="Passport" />
            </SelectField>

            <TextField
              required={true}
              value={this.state.textField.id_number}
              floatingLabelFixed={true}
              floatingLabelText="ID Number"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, id_number: input},
                });
              }}
            />

            <TextField
              required={true}
              multiLine={true}
              rows={2}
              rowsMax={4}
              value={this.state.textField.id_address}
              floatingLabelFixed={true}
              floatingLabelText="ID Address"
              fullWidth={true}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, id_address: input},
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
                  textField: {...this.state.textField, phone1: input},
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
                  textField: {...this.state.textField, phone2: input},
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
                  textField: {...this.state.textField, phone3: input},
                });
              }}
            />

            <TextField
              fullWidth={true}
              required={true}
              value={this.state.textField.email1}
              floatingLabelFixed={true}
              floatingLabelText="Email"
              // errorText={!this.state.isEmailValid1}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, email1: input},
                });
              }}
            />

            <TextField
              fullWidth={true}
              required={true}
              value={this.state.textField.email2}
              floatingLabelFixed={true}
              floatingLabelText="Alternative Email"
            // errorText={!this.state.isEmailValid2}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, email2: input},
                });
              }}
            />
            <TextField
              fullWidth={true}
              required={true}
              value={this.state.textField.sales_name}
              floatingLabelFixed={true}
              floatingLabelText="Helpdesk Name"
              disabled={true}
            // errorText={!this.state.isEmailValid2}
              // onChange={(e, input) => {
              //   this.setState({
              //     textField: {...this.state.textField, sales_name: input},
              //   });
              // }}
            />
            <RaisedButton
              label="Submit Data"
              secondary={true}
              style={styles.raisedButton}
              onTouchTap={this._handleTouch}
            />
          </form>
        </Col>
      </div>);
    };
    let _leadsInquiryTable = () => {
      return (<div className="mdl-layout">
        <h3 style={style.title}>Leads Table</h3>
        <MaterialContainer
          keys="msisdn"
          className="mdl-data-table"
          columns={futureLeadsColumn}
          dataArray={this.state.dataFutureLeads}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          pageSizeOptions={[5]}
        />
        <h3 style={style.title}>Inquiry Table</h3>
        <MaterialContainer
          keys="msisdn"
          className="mdl-data-table"
          columns={futureLeadsColumn}
          dataArray={this.state.dataInquiry}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'msisdn', order: 'asc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    let action = [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          <h3>New Customer</h3>
          <Dialog
            title={this.state.TitleMessage}
            actions={action}
            modal={false}
            open={this.state.openWarning}
            onRequestClose={this.handleClose}
          >
            {this.state.warningMessage}
          </Dialog>
          <Paper style={styles.paper}>
            <Tabs value={this.state.currentTab} >
              <Tab
                value={0}
                label="Leads Data"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_createLeads()}</Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    );
  }
}
