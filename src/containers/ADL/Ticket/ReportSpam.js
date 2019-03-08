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

const HOSTNAME = 'https://source.adlsandbox.com/api/prank-caller/';
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
      openWarning: false,
      TitleMessage: '',
      warningMessage: '',
    };
  }

  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      this.setState({
        cookies: cookies.get('ssid'),
      });
    }
  }
  // _getAPI(apiUrl) {
  //   fetch(apiUrl, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${this.state.cookies}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log('get', responseJson);
  //       if (responseJson) {
  //         this.setState({
  //           reportSpamAll: responseJson,
  //           loadedSpamData: true,
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  _postAPI() {
    const msisdn = this.state.textField.msisdn;
    const name = this.state.textField.name;
    const category = this.state.textField.category;
    const reason = this.state.textField.reason;

    fetch(
      `${HOSTNAME}create?msisdn=${msisdn}&name=${name}&category=${category}&reason=${reason}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.state.cookies}`,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          TitleMessage: 'Success',
          openWarning: true,
          warningMessage: responseJson.message,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          TitleMessage: 'Failed',
          openWarning: true,
          warningMessage: `${error}`,
        });
      });
  }

  _handleTouch=() => {
    this._postAPI();
  }

  handleClose= () => {
    this.setState({
      openWarning: false,
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
              type="number"
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
              onTouchTap={this._handleTouch}
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

    let action = [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          <h3>Report Spam</h3>
          <Paper style={styles.paper}>
            <Dialog
              title={this.state.TitleMessage}
              actions={action}
              modal={false}
              open={this.state.openWarning}
              onRequestClose={this.handleClose}
            >
              {this.state.warningMessage}
            </Dialog>
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
