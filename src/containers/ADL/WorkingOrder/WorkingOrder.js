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
const EditBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-button--raised"
      onClick={() =>
          this.setState({
            onEdit: true,
            idTemp: data.id,
            codeTemp: data.code,
            nameTemp: data.name,
          })
        }
    >
        Edit
      </button>
  </div>
  );

const DeleteBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
      onClick={() => this._deleteAPI(`${HOSTNAME}delete?`, data.id)}
    >
        Delete
      </button>
  </div>
  );

export default class WorkingOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrderData: [],
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
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
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
      {
        id: 10,
        title: '',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: '',
        render: DeleteBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }
  _handleClose() {
    this.setState({
      onEdit: false,
    });
  }
  render() {
    let _renderModalComponent = () => {
      return (
        <div>
          <TextField
            required={true}
            value={this.state.idTemp}
            hintText="ID"
            floatingLabelText="ID"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                idTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            value={this.state.codeTemp}
            hintText="Code"
            floatingLabelText="Code"
            onChange={(e, input) => {
              this.setState({
                codeTemp: input,
              });
            }}
          />
          <TextField
            fullWidth={true}
            required={true}
            hintText="Name"
            floatingLabelText="Name"
            value={this.state.nameTemp}
            onChange={(e, input) => {
              this.setState({
                nameTemp: input,
              });
            }}
          />
        </div>
      );
    };
    let actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this._handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this._handleClose()}
      />,
    ];
    return (<div>
      <h3 style={styles.navigation}>Manage Work Order</h3>
      <Row>
        <Paper  style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <br />
                <Dialog
                  title="Edit Work Order"
                  actions={actions}
                  modal={false}
                  open={this.state.onEdit}
                  onRequestClose={() => this._handleClose()}
                >
                  {_renderModalComponent()}
                </Dialog>
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={this.WorkOrdersColumns}
                  dataArray={this.state.workOrderData}
                  draggable={false}
                  sortable={false}
                  sortBy={{prop: 'id', order: 'desc'}}
                  pageSizeOptions={[5]}
                />
              </div>
            </div>
          </Col>
        </Paper>
      </Row>
    </div>);
  }
}
