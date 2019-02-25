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
import DatePicker from 'material-ui/DatePicker';
import moment from  'moment';

const columns = [{
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
  prop: 'subs_id',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 2,
  title: 'Payment ID',
  prop: 'payment_id',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 3,
  title: 'Product ID',
  prop: 'product_id',
  width: '5.5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 4,
  title: 'Sales Order ID',
  prop: 'so_id',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 5,
  title: 'Payment Type',
  prop: 'payment_type',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 6,
  title: 'VA Indomaret',
  prop: 'va_indomaret',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 7,
  title: 'VA Alfamart',
  prop: 'va_alfamart',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 8,
  title: 'VA Permata',
  prop: 'va_permata',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 9,
  title: 'VA BCA',
  prop: 'va_bca',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 10,
  title: 'VA Mandiri',
  prop: 'va_mandiri',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 11,
  title: 'VA Cimb',
  prop: 'va_cimb',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 12,
  title: 'VA Danamon',
  prop: 'va_danamon',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 13,
  title: 'VA Credit Card',
  prop: 'va_cc',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 14,
  title: 'Bill Amount',
  prop: 'bill_amount',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 15,
  title: 'Status',
  prop: 'status_trx',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 16,
  title: 'Description',
  prop: 'desc_trx',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 17,
  title: 'Approval Code',
  prop: 'approval_code',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 18,
  title: 'Pay Amount',
  prop: 'pay_amount',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 19,
  title: 'Transid Merchant',
  prop: 'transid_merchant',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 20,
  title: 'Session ID',
  prop: 'session_id',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 21,
  title: 'Created At',
  prop: 'created_at',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
{
  id: 22,
  title: 'Payment At',
  prop: 'payment_at',
  width: '5%',
  headerClass: 'mdl-data-table__cell--non-numeric',
  cellClass: 'mdl-data-table__cell--non-numeric',
},
];

export default class TransactionDaily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTransaction: [],
    };
  }

  render() {
    return (<Row>
      <h3>Daily Transaction Report</h3>
      <Paper style={styles.paper}>
        <Col xs={12} md={12} lg={12} sm={12}>
          <Row>
            <Col xs={12} md={6} lg={6} sm={12}>
              <Col xs={12} md={4} lg={4} sm={12}>
                <DatePicker
                  hintText="Date"
                  floatingLabelText="Date"
                  fullWidth={true}
                  maxDate={new Date()}
                  minDate={new Date(moment().startOf('month').format('YYYY-MM-DD'))}
                />
              </Col>
              <Col xs={12} md={4} lg={4} sm={12}>
                <RaisedButton
                  label="Filter"
                  secondary={true}
                  style={styles.raisedButton}
                />
              </Col>
            </Col>
          </Row>
          <Row>
            <Col xs={12} lg={12} md={12} sm={12}>
              <div className="mdl-layout" >
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={columns}
                  dataArray={this.state.dataTransaction}
                  draggable={false}
                  sortable={false}
                  sortBy={{prop: 'id', order: 'desc'}}
                  pageSizeOptions={[5]}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Paper>
    </Row>);
  }
}
