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

const HOSTNAME = 'https://source.adlsandbox.com/api/prank/';
const futureLeadsColumn = [
  {id: 0, title: 'Id', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 1, title: 'Msisdn', prop: 'msisdn', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 2, title: 'Category', prop: 'category', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 3, title: 'Name', prop: 'name', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  {id: 4, title: 'Reason', prop: 'reason', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
  // {id: 4, title: '', render: ChooseBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];

const style = {
  title: {
    textAlign: 'center',
  },
};

export default class ReportSpam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      dataFutureLeads: [],
      dataInquiry: [],
      resportSpamAll: [],
      loadedSpamData: false,
      textField: {
        msisdn: '',
        category: '',
        name: '',
        reason: '',
      },
    };
  }
  _getAPI(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('get', responseJson);
        if (responseJson) {
          this.setState({
            reportSpamAll: responseJson,
            loadedSpamData: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _postAPI(apiUrl) {
    const code = this.state.textField.code;
    const name = this.state.textField.name;
    const description = this.state.textField.description;
    const soc_id = this.state.textField.soc_id;
    const soc_label = this.state.textField.soc_label;
    const charging_name = this.state.textField.charging_name;
    const price = this.state.textField.price;
    const promo_type = this.state.textField.promo_type === '' ? 0 : this.state.textField.promo_type;
    const promo_value = this.state.textField.promo_area === '' ? 0 : this.state.textField.promo_area;
    const promo_price = this.state.textField.promo_price === '' ? 0 : this.state.textField.promo_price;
    const promo = this.state.textField.promo;

    fetch(
      `${apiUrl}register?code=${
        code
      }&name=${name}&description=${description}&soc_id=${
        soc_id
      }&soc_label=${soc_label}&charging_name=${
        charging_name
      }&price=${price}&promo_type=${
        promo_type
      }&promo_value=${promo_value}&promo_price=${
        promo_price
      }&promo=${promo}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.state.cookies}`,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          createdCode: responseJson.id,
          createdName: responseJson.product_name,
          warningMessage: responseJson.status,
          openWarning: true,
        });
        this._getAPI(`${HOSTNAME}all?`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    let _createPrankData = () => {
      return (<div>
        <Col xs={12} md={6} lg={6} sm={12}>
          <form>
            <TextField
              floatingLabelText="Msisdn"
              hintText="Msisdn"
              fullWidth={true}
              required={true}
              value={this.state.textField.msisdn}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, msisdn: input},
                });
              }}
            />

            <SelectField
              fullWidth={true}
              required={true}
              floatingLabelText="Category"
              name="category"
              value={this.state.textField.category}
              onChange={(e, index, value) => {
                this.setState({
                  textField: {...this.state.textField, category: value},
                });
              }}
            >
              <MenuItem value="prank_caller" primaryText="Prank Caller" />
              <MenuItem value="false_information" primaryText="False Information" />
            </SelectField>
            <TextField
              floatingLabelText="Name"
              fullWidth={true}
              value={this.state.textField.name}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, name: input},
                });
              }}
            />
            <TextField
              hintText="Reason"
              floatingLabelText="Reason"
              multiLine={true}
              rows={2}
              rowsMax={5}
              fullWidth={true}
              value={this.state.textField.reason}
              onChange={(e, input) => {
                this.setState({
                  textField: {...this.state.textField, reason: input},
                });
              }}
            />
            <RaisedButton
              label="Submit Data"
              secondary={true}
              style={styles.raisedButton}
            />
          </form>
        </Col>
      </div>);
    };
    let _prankTable = () => {
      return (<div className="mdl-layout">
        <h3 style={style.title}>Prank Caller Table</h3>
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
      </div>);
    };
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          <h3>Report Spam</h3>
          <Paper style={styles.paper}>
            <Tabs value={this.state.currentTab} >
              <Tab
                value={0}
                label="Create Prank Caller"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_createPrankData()}</Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    );
  }
}
