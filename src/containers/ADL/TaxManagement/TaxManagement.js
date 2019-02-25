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

const EditBtn = (data) => (
  <div className="text-center">
    <button
      className="mdl-button mdl-button--raised"
    >
      Edit</button>
  </div>
  );

const futureLeadsColumn = [
    {id: 1, title: 'ID', prop: 'id', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 2, title: 'Category', prop: 'category', width: '20%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 3, title: 'Reason', prop: 'reason', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
    {id: 4, title: '', render: EditBtn, width: '2%', headerClass: 'mdl-data-table__cell--non-numeric'},
];
export default class TaxManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTax: [],
    };
  }

  render() {
    let _createTax = () => {
      return (<div>
        <Col xs={12} md={6} lg={6} sm={12}>
          <form>
            <TextField
              floatingLabelText="Tax Type"
              fullWidth={true}
            />

            <TextField
              floatingLabelText="Name"
              fullWidth={true}
            />
            <TextField
              floatingLabelText="Tax Amount"
              fullWidth={true}
              type="number"
            />
            <TextField
              hintText="Description"
              multiLine={true}
              rows={2}
              rowsMax={4}
              fullWidth={true}
            />
            <RaisedButton
              label="Submit"
              secondary={true}
              style={styles.raisedButton}
            />
          </form>
        </Col>
      </div>);
    };
    let _taxTable = () => {
      return (<div className="mdl-layout">
        <MaterialContainer
          keys="id"
          className="mdl-data-table"
          columns={futureLeadsColumn}
          dataArray={this.state.dataTax}
          draggable={false}
          sortable={false}
          sortBy={{prop: 'id', order: 'desc'}}
          pageSizeOptions={[5]}
        />
      </div>);
    };
    return (
      <Row>
        <Col xs={12} md={12} lg={12} sm={12}>
          <h3>Input Tax</h3>
          <Paper style={styles.paper}>
            <Tabs value={this.state.currentTab} >
              <Tab
                value={0}
                label="input Tax"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_createTax()}</Tab>
              <Tab
                value={1}
                label="Manage Tax"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >{_taxTable()}</Tab>
            </Tabs>
          </Paper>
        </Col>
      </Row>
    );
  }
}
