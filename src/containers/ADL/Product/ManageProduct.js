import React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import AutoComplete from 'material-ui/AutoComplete';
import {MaterialContainer} from 'react-table-components';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import '../../table/datatable.scss';


const promoType = ['BANTEN', 'JAKARTA'];
const dataType = require('json!../../table/data.json');
const dataDummy = [
  {'id': 1,
    'name': 'xl fiber',
    'description': 'speed up to 100 MB/s',
    'charging_name': 'Bejo',
    'price': 'Rp 3.000.000',
  },
  {'id': 2,
    'name': 'xl fiber 2',
    'description': 'speed up to 200 MB/s',
    'charging_name': 'Bejo',
    'price': 'Rp 3.100.000',
  },
];

const generateRowProps = (row) => {
  const options = {};
  if (row.gender === 'Male') {
    options.className = 'info';
  }
  if (row.gender === 'Female') {
    options.className = 'warning';
  }
  return options;
};

const EditBtn = () => (
  <div className="text-center">
    <button className="mdl-button mdl-button--raised">Edit</button>

  </div>
);

const DeleteBtn = () => (
  <div className="text-center">
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Delete</button>
  </div>
);

const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);

export default class ManageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validation: {
        code: false,
        promo: false,
        name: false,
        promo_percentage: false,
        promo_area: false,
        promo_type: false,
        price: false,
        charging_name: false,
        soc_label: false,
        soc_id: false,
        description: false,
        promo_end: false,
        promo_start: false,
      },
      TextField: {
        code: '',
        promo: false,
        name: '',
        promo_percentage: '',
        promo_area: '',
        promo_type: '',
        price: '0',
        charging_name: '',
        soc_label: '',
        soc_id: '',
        description: '',
        promo_end: '',
        promo_start: '',
      },
    };
  }

  promoToggle = (input, inputChecked) => {
    const tab = this.state.currentTab === 1 ? 0 : 1;
    this.setState({TextField: {
      ...this.state.TextField, promo: inputChecked,
    },
    });
  }

  handleChangeText = (input, value) => {
    const target = input.target;
    const valid = value === '';

    this.setState({
      validation: {...this.state.validation, [target.name]: valid},
    });

    this.setState({
      TextField: {...this.state.TextField, [target.name]: value},
    });
  }


  render() {
    let _renderCreateProduct = () => {
      const promo_activation = this.state.TextField.promo;
      const validation = this.state.validation;

      return (
        <div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Subheader>Form Create Product</Subheader>
              <form>
                <Col xs={12} md={6} lg={6}>
                  <TextField
                    required={true}
                    hintText="Code"
                    floatingLabelText="Code"
                    name="code"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.code}
                  />
                  <TextField
                    required={true}
                    hintText="Name"
                    floatingLabelText="Name"
                    name="name"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.name}
                  />
                  <TextField
                    required={true}
                    hintText="Description"
                    floatingLabelText="Description"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    name="description"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.description}
                  />
                  <TextField
                    required={true}
                    hintText="SOC ID"
                    floatingLabelText="SOC ID"
                    name="soc_id"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.soc_id}
                  />
                  <TextField
                    required={true}
                    hintText="SOC Label"
                    floatingLabelText="SOC Label"
                    name="soc_label"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.soc_label}
                  />
                  <TextField
                    required={true}
                    hintText="Charging Name"
                    floatingLabelText="Charging Name"
                    name="charging_name"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.charging_name}
                  />
                  <TextField
                    required={true}
                    hintText="Price"
                    floatingLabelText="Price"
                    name="price"
                    fullWidth={true}
                    onChange={this.handleChangeText}
                    errorText={validation.price}
                    type="number"
                  />
                  <Toggle name="promo" label="Promo" style={styles.toggle} onToggle={this.promoToggle} toggled={promo_activation} />
                  {promo_activation ? <div>
                    <DatePicker
                      hintText="Promo Start"
                      floatingLabelText="Promo Start"
                      name="promo_start"
                      fullWidth={true}
                      onChange={this.handleChangeText}
                      errorText={validation.promo_start}
                    />
                    <DatePicker
                      hintText="Promo End"
                      floatingLabelText="Promo End"
                      name="promo_end"
                      fullWidth={true}
                      onChange={this.handleChangeText}
                      errorText={validation.promo_end}
                    />
                    <SelectField
                      fullWidth={true}
                      floatingLabelText="Promo Type"
                      name="promo_type"
                    >
                      <MenuItem value={'olt'} primaryText="OLT" />
                      <MenuItem value={'city'} primaryText="City" />
                      <MenuItem value={'region'} primaryText="Region" />
                      <MenuItem value={'fdt'} primaryText="FDT" />
                    </SelectField>
                    <div>
                      <AutoComplete
                        name="promo_area"
                        fullWidth={true}
                        hintText="Promo area"
                        filter={AutoComplete.noFilter}
                        dataSource={promoType}
                        openOnFocus={true}
                      />
                    </div>
                    <TextField
                      required={true}
                      hintText="Promo Percentage"
                      floatingLabelText="Promo Percentage"
                      name="promo_percentage"
                      fullWidth={true}
                      type="number"
                      onChange={this.handleChangeText}
                      errorText={validation.promo_percentage}
                    />
                  </div> : ''}
                  <RaisedButton label="Create Product" secondary={true} style={styles.raisedButton} />
                </Col>
              </form>
            </Col>
          </Row>
        </div>
      );
    };

    let _renderTableProduct = () => {
      const columns = [
        {id: 0, title: 'Action', render: CheckBtn, width: '5%', headerClass: 'mdl-data-table__cell--non-numeric'},
        // {id: 1, title: 'Avatar', render: UserPic, width: '50px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        {id: 2, title: 'ID', prop: 'id', width: '10%', headerClass: 'mdl-data-table__cell--numeric', cellClass: 'mdl-data-table__cell--numeric'},
        {id: 3, title: 'Product Name', prop: 'name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        {id: 4, title: 'Description', prop: 'description', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        {id: 5, title: 'Charging Name', prop: 'charging_name', width: '10%', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        {id: 6, title: 'Price', prop: 'price', width: '150px', headerClass: 'mdl-data-table__cell--numeric', cellClass: 'mdl-data-table__cell--numeric'},
        // {id: 7, title: 'Country', prop: 'country.name', visible: false, width: '150px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        // {id: 8, title: 'Code', prop: 'country.code', width: '80px', headerClass: 'mdl-data-table__cell--non-numeric', cellClass: 'mdl-data-table__cell--non-numeric'},
        {id: 9, title: 'Action', render: EditBtn, width: '10%', headerClass: 'mdl-data-table__cell--non-numeric'},
        {id: 10, title: 'Action', render: DeleteBtn, width: '10%', headerClass: 'mdl-data-table__cell--non-numeric'},
      ];

      return (
        <Row>
          <Col xs={12} md={12} lg={12}>
            {/* <Card style={styles.card}> */}
            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <br />
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={columns}
                  onDragColumn={(columns) => console.log(columns)}
                  onChangeColumnsVisibility={(columns) => console.log(columns)}
                  dataArray={dataDummy}
                  draggable={true}
                  sortable={true}
                  sortBy={{prop: 'id', order: 'desc'}} generateRowProps={generateRowProps}
                  pageSizeOptions={[5]}
                />
              </div>
            </div>
            {/* </Card> */}
          </Col>
        </Row>
      );
    };

    console.log(this.state);
    return (
      <Row className="m-b-15">
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <Tabs initialSelectedIndex={0}>
              <Tab label="Add Product" >
                {_renderCreateProduct()}
              </Tab>
              <Tab  label="Manage Product" >
                {_renderTableProduct()}
              </Tab>
            </Tabs>
          </Col>
        </Paper>

      </Row>
    );
  }
}
