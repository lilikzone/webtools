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
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import Cookies from 'universal-cookie';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import {CSVLink} from 'react-csv';
import {red400} from 'material-ui/styles/colors';
import moment from 'moment';
import ChipInput from 'material-ui-chip-input';

const cookies = new Cookies();
import '../../table/datatable.scss';

const HOSTNAME = 'https://source.adlsandbox.com/api/product/';
const promoType = ['BANTEN', 'JAKARTA'];
const dataType = require('json!../../table/data.json');
const dataDummy = [
  {
    id: 1,
    name: 'xl fiber',
    description: 'speed up to 100 MB/s',
    charging_name: 'Bejo',
    price: 'Rp 3.000.000',
  },
  {
    id: 2,
    name: 'xl fiber 2',
    description: 'speed up to 200 MB/s',
    charging_name: 'Bejo',
    price: 'Rp 3.100.000',
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

const CheckBtn = () => (
  <div style={styles.action}>
    <Checkbox iconStyle={styles.checkbox} />
  </div>
);

export default class ManageProduct extends React.Component {
  constructor(props) {
    super(props);
    this.csv = '';
    this.state = {
      cookies: '',
      currentTab: 0,
      loaded: false,
      role: '',
      loadProductExportAll: true,
      productExportAll: [],
      keyword: '',
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
      textField: {
        promo: 0,
        code: '',
        name: '',
        promo_percentage: '',
        promo_area: '',
        promo_type: '',
        price: '',
        charging_name: '',
        promo_value: '',
        promo_price: '',
        soc_label: '',
        soc_id: '',
        description: '',
        promo_end: '',
        promo_start: '',
      },
      dataCity: [],
      productAll: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      openWarning: false,
      openEdit: false,
      updateAlert: false,
      createdName: '',
      createdCode: '',
      warningMessage: '',
      idUpdate: '',
      dataPromoArea: [],
      dataPromoAreaTemp: [],
      restartField: false,
      restartTemp: true,
      promoTypeTemp: [],
      promoTemp: '',
      codeTemp: '',
      nameTemp: '',
      promoPercentageTemp: '',
      promo_valueTemp: '',
      priceTemp: '',
      charging_nameTemp: '',
      soc_labelTemp: '',
      soc_idTemp: '',
      descriptionTemp: '',
      promo_endTemp: '',
      promo_startTemp: '',
      promo_activationTemp: '',
    };

    const EditBtn = (data) => (
      <div className="text-center">
        <button
          onClick={() => {
            this.setState({
              openEdit: true,
              idUpdate: data.id,
              promoTypeTemp: data.promo_type,
              promoTemp: data.promo,
              codeTemp: data.code,
              nameTemp: data.name,
              promoPercentageTemp: data.promo_price,
              promo_valueTemp: data.promo_value,
              priceTemp: data.price,
              charging_nameTemp: data.charging_name,
              soc_labelTemp: data.soc_label,
              soc_idTemp: data.soc_id,
              descriptionTemp: data.description,
              promo_endTemp: '',
              promo_startTemp: '',
              promo_activationTemp: data.promo,
              dataPromoAreaTemp: this._handleDataSource(data.promo_type),
            });
          }}
          className="mdl-button mdl-button--raised"
        >
          Edit
        </button>
      </div>
    );
    const DeleteBtn = (data) => (
      <div className="text-center">
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent"
          onClick={() => this._onDelete(data)}
        >
          Delete
        </button>
      </div>
    );
    this.columns = [
      {
        id: 1,
        title: 'Id',
        prop: 'id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 2,
        title: 'Code',
        prop: 'code',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 3,
        title: 'Name',
        prop: 'name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 4,
        title: 'Description',
        prop: 'description',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 5,
        title: 'SOC ID',
        prop: 'soc_id',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 6,
        title: 'SOC LABEL',
        prop: 'soc_label',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 7,
        title: 'Charging Name',
        prop: 'charging_name',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 8,
        title: 'Price',
        prop: 'price',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 9,
        title: 'Promo',
        prop: 'promo',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 10,
        title: 'Promo Type',
        prop: 'promo_type',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 11,
        title: 'Promo Value',
        prop: 'promo_value',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 12,
        title: 'Promo Percentage (%)',
        prop: 'promo_price',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 13,
        title: 'Created At',
        prop: 'created_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 14,
        title: 'Updated At',
        prop: 'updated_at',
        width: '20%',
        headerClass: 'mdl-data-table__cell--non-numeric',
        cellClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 15,
        title: 'Edit Action',
        render: EditBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
      {
        id: 16,
        title: 'Delete Action',
        render: DeleteBtn,
        width: '2%',
        headerClass: 'mdl-data-table__cell--non-numeric',
      },
    ];
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.productAll.current_page != this.state.productAll.current_page) {
      this.setState({
        loaded: false,
      });
      const json = (response) => response.json();
      fetch(`https://source.adlsandbox.com/api/product/all?page=${this.state.productAll.current_page}`, {
        method: 'GET',
        type: 'cors',
        headers: {
          'Authorization': `Bearer ${this.state.cookies}`,
          'Content-Type': 'application/json',
        },
      }).then(json)
      .then((respons) => {
        this.setState({productAll: respons, loaded: true});
      }).catch((error) => {
        console.log(error);
      });
    }
    if (prevState.dataPromoArea != this.state.dataPromoArea) {
      this.setState({
        restartField: true,
      });
    }    else if (prevState.dataPromoAreaTemp != this.state.dataPromoAreaTemp) {
      this.setState({
        restartTemp: true,
        promo_valueTemp: '',
      });
    }
  }
  componentWillMount() {
    if (cookies.get('ssid') !== undefined && cookies.get('ssid') !== '') {
      const userData = cookies.get('rdata');
      const role =  userData.split('+');
      if (role === 'sales') {
        this.setState({
          cookies: cookies.get('ssid'),
          role: role[1],
        });
      } else {
        this.setState({
          cookies: cookies.get('ssid'),
          role: role[1],
        });
      }
    }
  }
  componentDidMount() {
    this._getAPI(`${HOSTNAME}all?`);
    this._getAPICity();
  }

  _onDelete(data) {
    this.setState({
      deleteId: data.id,
      deleteName: data.name,
      deleteAlert: true,
    });
  }

  _onUpdate() {
    this.setState({
      updateAlert: false,
    });
  }
  _handleDataSource(value) {
    if (value === 'olt') {
      return this.state.dataOlt;
    } else if (value === 'fdt') {
      return this.state.dataFdt;
    } else if (value === 'cluster') {
      return this.state.dataCluster;
    } else if (value === 'city') {
      return this.state.dataCity;
    } else {
      return this.state.dataRegion;
    }
  }

  _handleDelete(data) {
    this._deleteAPI(`${HOSTNAME}delete?`, data);
    this._getAPI(`${HOSTNAME}all?`);
    this.handleClose('delete');
  }

  _getProductAll() {
    const cookieData = this.state.cookies;
    if (cookieData !== undefined && cookieData !== '') {
      this.setState({
        loadProductExportAll: false,
      });
      const status = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        return Promise.reject(new Error(response.statusText));
      };
      const json = (response) => response.json();

      console.log('https://source.adlsandbox.com/api/product/all?export=1');
      fetch('https://source.adlsandbox.com/api/product/all?export=1',
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
        console.log('exportALL', respons);
        this.setState({productExportAll: respons, loadProductExportAll: true});
        this.csv.link.click();
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }


  _getAPI(apiUrl) {
    fetch(`${apiUrl}page=${this.state.productAll.current_page}`, {
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
            productAll: responseJson,
            loaded: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _postAPI() {
    const code = this.state.textField.code;
    const name = this.state.textField.name;
    const description = this.state.textField.description;
    const soc_id = this.state.textField.soc_id;
    const soc_label = this.state.textField.soc_label;
    const charging_name = this.state.textField.charging_name;
    const price = this.state.textField.price;
    const promo_type =
      this.state.textField.promo_type === '' ?
        0 :
        this.state.textField.promo_type;
    const promo_value =
      this.state.textField.promo_area === '' ?
        0 :
        this.state.textField.promo_area;
    const promo_price =
      this.state.textField.promo_price === '' ?
        0 :
        this.state.textField.promo_price;
    const promo = this.state.textField.promo;

    // console.log(
    //   `https://source.adlsandbox.com/api/product/register?code=${code}&name=${name}&description=${description}&soc_id=${soc_id}&soc_label=${soc_label}&charging_name=${charging_name}&price=${price}&promo_type=${promo_type}&promo_value=${promo_value}&promo_price=${promo_price}&promo=${promo}`
    // );

    fetch(
      `https://source.adlsandbox.com/api/product/register?code=${code}&name=${name}&description=${description}&soc_id=${soc_id}&soc_label=${soc_label}&charging_name=${charging_name}&price=${price}&promo_type=${promo_type}&promo_value=${promo_value}&promo_price=${promo_price}&promo=${promo}`,
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
        this.setState({
          warningMessage: 'FAILED',
          openWarning: true,
        });
      });
  }
  _putAPI() {
    const code = this.state.codeTemp;
    const name = this.state.nameTemp;
    const description = this.state.descriptionTemp;
    const soc_id = this.state.soc_idTemp;
    const soc_label = this.state.soc_labelTemp;
    const charging_name = this.state.charging_nameTemp;
    const price = this.state.priceTemp;
    const promo_type =
      this.state.textField.promo_type === '' ?
        0 :
        this.state.textField.promo_type;
    const promo_value =
      this.state.textField.promo_area === '' ?
        0 :
        this.state.textField.promo_area;
    const promo_price =
      this.state.textField.promo_price === '' ?
        0 :
        this.state.textField.promo_price;
    const promo = this.state.promoTemp;

    // console.log(
    //   `https://source.adlsandbox.com/api/product/${
    //     this.state.idUpdate
    //   }?code=${code}&name=${name}&description=${description}&soc_id=${soc_id}&soc_label=${soc_label}&charging_name=${charging_name}&price=${price}&promo_type=${
    //     this.state.promoTypeTemp
    //   }&promo_value=${
    //     this.state.promo_valueTemp
    //   }&promo_price=${promo_price}&promo=${promo}`
    // );

    fetch(
      `https://source.adlsandbox.com/api/product/${
        this.state.idUpdate
      }?code=${code}&name=${name}&description=${description}&soc_id=${soc_id}&soc_label=${soc_label}&charging_name=${charging_name}&price=${price}&promo_type=${
        this.state.promoTypeTemp
      }&promo_value=${
        this.state.promo_valueTemp
      }&promo_price=${promo_price}&promo=${promo}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.state.cookies}`,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('result_update', responseJson);
        this.setState({
          textField: {
            promo: 0,
            code: '',
            name: '',
            promo_percentage: '',
            promo_area: '',
            promo_type: '',
            price: '',
            charging_name: '',
            promo_value: '',
            promo_price: '',
            soc_label: '',
            soc_id: '',
            description: '',
            promo_end: '',
            promo_start: '',
          },
          loaded: false,
        });
        this._getAPI(`${HOSTNAME}all?`);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _deleteAPI(apiUrl, ids) {
    fetch(`${apiUrl}ids=${ids}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          loaded: false,
        });
        this._getAPI(`${HOSTNAME}all?`);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _getUpdate(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('result_Search', responseJson);
        if (responseJson.result.data.length > 0) {
          this.setState({
            productAll: responseJson,
          });
        }
        this.setState({
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _handleUpdateKeyword() {
    this.setState({
      loaded: false,
    });
    this._getUpdate(`${HOSTNAME}search?keyword=${this.state.keyword}`);
  }

  _handleTouchTap() {
    this._postAPI();
    this._getAPI(`${HOSTNAME}all?`);
    this.setState({
      // dataTable: this.data,
      textField: {
        promo: 0,
        code: '',
        name: '',
        promo_percentage: '',
        promo_area: '',
        promo_type: '',
        price: '',
        charging_name: '',
        promo_value: '',
        promo_price: '',
        soc_label: '',
        soc_id: '',
        description: '',
        promo_end: '',
        promo_start: '',
      },
    });
  }

  promoToggle = (input, inputChecked) => {
    this.setState({
      promo: inputChecked,
    });
  };

  _handleValidationPromoArea(input, data) {
    let dataInput = input.toLowerCase();
    let dataArea = data.map((val) => val.toLowerCase());
    if (dataArea.includes(dataInput)) {
      this.setState({
        textField: {...this.state.textField, promo_area: dataInput},
      });
    }
  }

  _requestBeforeAdd(data, val) {
    let arr = data.map((data) => data.toLowerCase());
    console.log('beforrr', !arr.includes(val));
    return !arr.includes(val);
  }

  _getAPICity() {
    const json = (response) => response.json();
    fetch('https://source.adlsandbox.com/api/homespassed/sort', {
      method: 'GET',
      type: 'cors',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then(json)
      .then((respons) => {
        console.log(respons);

        const dataCityObject = respons[0].city;
        const dataCity = [];
        let i;
        for (i = 0; i < dataCityObject.length; i++) {
          dataCity.push(dataCityObject[i].city);
        }
        const dataOltObject = respons[0].olt_location;
        const dataOlt = [];
        let j;
        for (j = 0; j < dataOltObject.length; j++) {
          dataOlt.push(dataOltObject[j].olt_location);
        }
        const dataFdtObject = respons[0].fdt_code;
        const dataFdt = [];
        let k;
        for (k = 0; k < dataFdtObject.length; k++) {
          dataFdt.push(dataFdtObject[k].fdt_code);
        }
        const dataRegionObject = respons[0].region;
        const dataRegion = [];
        let m;
        for (m = 0; m < dataRegionObject.length; m++) {
          dataRegion.push(dataRegionObject[m].region);
        }

        const dataClusterObject = respons[0].cluster;
        const dataCluster = [];
        let n;
        for (n = 0; n < dataClusterObject.length; n++) {
          dataCluster.push(dataClusterObject[n].cluster);
        }

        this.setState({
          dataCity: dataCity,
          dataOlt: dataOlt,
          dataFdt: dataFdt,
          dataRegion: dataRegion,
          dataCluster: dataCluster,
        });
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }

  handleClose = (param) => {
    if (param == 'update') {
      this.setState({
        updateAlert: false,
      });
    } else if (param == 'delete') {
      this.setState({
        deleteAlert: false,
      });
    } else {
      this.setState({openWarning: false, openEdit: false});
    }
  };

  _handleUpdate = () => {
    this._putAPI();
    this.setState({
      updateAlert: true,
      openEdit: false,
    });
  };
  _reconstructExportData(data) {
    let exportData = [];
    if (data.length > 0) {
      let header = Object.keys(data[0]);
      let dataProperties = data.map((val) => {
        return Object.values(val);
      });
      exportData.push(header);
      exportData.push(...dataProperties);
    }
    return exportData;
  }

  render() {
    let _renderCreateProduct = () => {
      const promo_activation = this.state.textField.promo;
      // console.log(promo_activation);

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
                    value={this.state.textField.code}
                    name="code"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, code: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="Name"
                    floatingLabelText="Name"
                    name="name"
                    value={this.state.textField.name}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, name: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="Description"
                    floatingLabelText="Description"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                    value={this.state.textField.description}
                    name="description"
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          description: input,
                        },
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="SOC ID"
                    floatingLabelText="SOC ID"
                    name="soc_id"
                    value={this.state.textField.soc_id}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, soc_id: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="SOC Label"
                    floatingLabelText="SOC Label"
                    name="soc_label"
                    fullWidth={true}
                    value={this.state.textField.soc_label}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, soc_label: input},
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    hintText="Charging Name"
                    floatingLabelText="Charging Name"
                    name="charging_name"
                    value={this.state.textField.charging_name}
                    fullWidth={true}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          charging_name: input,
                        },
                      });
                    }}
                  />
                  <TextField
                    required={true}
                    // hintText="Price"
                    floatingLabelText="Price"
                    name="price"
                    fullWidth={true}
                    value={this.state.textField.price}
                    onChange={(e, input) => {
                      this.setState({
                        textField: {...this.state.textField, price: input},
                      });
                    }}
                    // errorText={validation.price}
                    type="number"
                  />
                  <br />
                  <br />
                  <Toggle
                    name="promo"
                    label="Promo"
                    style={styles.toggle}
                    onToggle={(input, inputChecked) => {
                      this.setState({
                        textField: {
                          ...this.state.textField,
                          promo: inputChecked == false ? 0 : 1,
                        },
                      });
                    }}
                    toggled={promo_activation}
                  />
                  {promo_activation ? (
                    <div>
                      <DatePicker
                        hintText="Promo Start"
                        floatingLabelText="Promo Start"
                        name="promo_start"
                        value={this.state.textField.promo_start}
                        fullWidth={true}
                        onChange={(e, input) => {
                          this.setState({
                            textField: {
                              ...this.state.textField,
                              promo_start: input,
                            },
                          });
                        }}
                        // errorText={validation.promo_start}
                      />
                      <DatePicker
                        hintText="Promo End"
                        floatingLabelText="Promo End"
                        name="promo_end"
                        value={this.state.textField.promo_end}
                        fullWidth={true}
                        onChange={(e, input) => {
                          this.setState({
                            textField: {
                              ...this.state.textField,
                              promo_end: input,
                            },
                          });
                        }}
                        // errorText={validation.promo_end}
                      />
                      <SelectField
                        fullWidth={true}
                        floatingLabelText="Promo Type"
                        name="promo_type"
                        value={this.state.textField.promo_type}
                        onChange={(e, index, value) => {
                          this.setState({
                            textField: {
                              ...this.state.textField,
                              promo_type: value,
                            },
                            restartField: false,
                          });

                          if (value === 'olt') {
                            this.setState({
                              dataPromoArea: this.state.dataOlt,
                            });
                          } else if (value === 'fdt') {
                            this.setState({
                              dataPromoArea: this.state.dataFdt,
                            });
                          } else if (value === 'cluster') {
                            this.setState({
                              dataPromoArea: this.state.dataCluster,
                            });
                          } else if (value === 'city') {
                            this.setState({
                              dataPromoArea: this.state.dataCity,
                            });
                          } else {
                            this.setState({
                              dataPromoArea: this.state.dataRegion,
                            });
                          }
                        }}
                      >
                        <MenuItem value={'olt'} primaryText="OLT" />
                        <MenuItem value={'city'} primaryText="City" />
                        <MenuItem value={'region'} primaryText="Region" />
                        <MenuItem value={'fdt'} primaryText="FDT" />
                        <MenuItem value={'cluster'} primaryText="Cluster" />
                      </SelectField>
                      {/* <div>
                        <AutoComplete
                          name="promo_area"
                          fullWidth={true}
                          hintText="Promo area"
                          floatingLabelText="Promo Area"
                          filter={AutoComplete.caseInsensitiveFilter}
                          dataSource={this.state.dataPromoArea}
                          openOnFocus={false}
                          onUpdateInput={(input, dataSource) => {
                            this._handleValidationPromoArea(input, dataSource);
                          }}
                        />
                      </div> */}
                      {this.state.restartField && (
                        <ChipInput
                          allowDuplicates={false}
                          hintText="Promo Area"
                          floatingLabelText="Promo Area"
                          dataSource={this.state.dataPromoArea}
                          onChange={(val) =>
                            this.setState({
                              textField: {
                                ...this.state.textField,
                                promo_area: val,
                              },
                            })
                          }
                        />
                      )}
                      <TextField
                        required={true}
                        hintText="Promo Percentage (%)"
                        floatingLabelText="Promo Percentage (%)"
                        name="promo_percentage"
                        fullWidth={true}
                        type="number"
                        onChange={(e, input) => {
                          this.setState({
                            textField: {
                              ...this.state.textField,
                              promo_price: input,
                            },
                          });
                        }}
                      />
                    </div>
                  ) : (
                    ''
                  )}
                  <RaisedButton
                    onTouchTap={() => this._handleTouchTap()}
                    label="Create Product"
                    secondary={true}
                    style={styles.raisedButton}
                  />
                </Col>
              </form>
            </Col>
          </Row>
        </div>
      );
    };

    let _renderTableProduct = () => {
      return (
        <Row>
          {this.state.loaded ? (
            <Col xs={12} md={12} lg={12}>
              {/* <Card style={styles.card}> */}
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <p>
                    <CSVLink
                      data={this.state.productAll.data}
                      filename={`Manage Product ${new Date(moment())}.xls`}
                      style={{color: 'white'}}
                      target="_blank"
                    >
                      <RaisedButton
                        backgroundColor={red400}
                        style={{marginTop: 10}}
                        label={'EXPORT DATA'}
                        labelStyle={{color: 'white'}}
                      />
                    </CSVLink>
                    { (['admin', 'operation'].includes(this.state.role)) &&
                    <span>
                      <RaisedButton
                        backgroundColor={red400}
                        style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}
                        labelStyle={{color: 'white'}}
                        label={'EXPORT ALL DATA'}
                        disabled={!this.state.loadProductExportAll}
                        onMouseDown={(() => {
                          this._getProductAll();
                        })}
                      />
                      <CSVLink
                        data={this.state.productExportAll && this.state.productExportAll.length > 0 ? this.state.productExportAll : []}
                        ref={(pb) => this.csv = pb}
                        filename={`ALL PRODUCT ${new Date(moment())}.xls`}
                        style={{color: 'white'}}
                        target="_blank"
                      />
                      { !this.state.loadProductExportAll && <CircularProgress size={20} style={{marginLeft: 10, top: 10}} />}</span> }

                  </p>
                  <div>
                    <TextField
                      required={true}
                      value={this.state.keyword}
                      hintText="Search"
                      fullWidth={false}
                      onChange={(e, input) => {
                        this.setState({
                          keyword: input,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <RaisedButton
                      secondary={true}
                      label={'Search'}
                      onMouseDown={() => this._handleUpdateKeyword()}
                    />
                  </div>
                  {/* <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.columns}
                    dataArray={this.state.productAll.data}
                    // dataArray={dataDummy}
                    draggable={true}
                    sortable={true}
                    sortBy={{prop: 'id', order: 'desc'}}
                    generateRowProps={generateRowProps}
                    pageSizeOptions={[10]}
                  /> */}
                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={this.columns}
                    onChangePage={((page) => this.setState({
                      productAll: {...this.state.productAll, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.productAll.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.productAll.current_page - 1}
                    total={this.state.productAll.total}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[10]}
                  />
                </div>
              </div>
              {/* </Card> */}
            </Col>
          ) : (
            <Paper style={styles.paper}>
              <div style={{minWidth: 700}}>
                <div
                  style={{
                    margin: '0 auto',
                    width: '20%',
                    textAlign: 'center',
                  }}
                >
                  <CircularProgress />
                </div>
              </div>
            </Paper>
          )}
        </Row>
      );
    };

    let actions = (val) => [
      <RaisedButton
        label="OK"
        primary={true}
        onTouchTap={() => this.handleClose(val)}
      />,
    ];
    let actionsModalTable = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Update"
        primary={true}
        onTouchTap={this._handleUpdate}
      />,
    ];
    let actionsDeleteTable = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose('delete')}
      />,
      <RaisedButton
        label="Delete"
        primary={true}
        onTouchTap={() => this._handleDelete(this.state.deleteId)}
      />,
    ];
    let _renderModalComponent = () => {
      const promo_activation = this.state.textField.promo;
      return (
        <div>
          <TextField
            required={true}
            hintText="Code"
            floatingLabelText="Code"
            value={this.state.codeTemp}
            name="code"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                codeTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="Name"
            floatingLabelText="Name"
            name="name"
            value={this.state.nameTemp}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                nameTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="Description"
            floatingLabelText="Description"
            multiLine={true}
            rows={2}
            rowsMax={4}
            value={this.state.descriptionTemp}
            name="description"
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                descriptionTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="SOC ID"
            floatingLabelText="SOC ID"
            name="soc_id"
            value={this.state.soc_idTemp}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                soc_idTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="SOC Label"
            floatingLabelText="SOC Label"
            name="soc_label"
            fullWidth={true}
            value={this.state.soc_labelTemp}
            onChange={(e, input) => {
              this.setState({
                soc_labelTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            hintText="Charging Name"
            floatingLabelText="Charging Name"
            name="charging_name"
            value={this.state.charging_nameTemp}
            fullWidth={true}
            onChange={(e, input) => {
              this.setState({
                charging_nameTemp: input,
              });
            }}
          />
          <TextField
            required={true}
            // hintText="Price"
            floatingLabelText="Price"
            name="price"
            fullWidth={true}
            value={this.state.priceTemp}
            onChange={(e, input) => {
              this.setState({
                priceTemp: input,
              });
            }}
            // errorText={validation.price}
            type="number"
          />
          <br />
          <br />
          <Toggle
            name="promo"
            label="Promo"
            style={styles.toggle}
            onToggle={(input, inputChecked) => {
              this.setState({
                promoTemp: inputChecked == false ? 0 : 1,
              });
            }}
            toggled={this.state.promo_activationTemp}
          />
          {this.state.promo_activationTemp ? (
            <div>
              <DatePicker
                hintText="Promo Start"
                floatingLabelText="Promo Start"
                name="promo_start"
                value={this.state.promo_startTemp}
                fullWidth={true}
                onChange={(e, input) => {
                  this.setState({
                    promo_startTemp: input,
                  });
                }}
              />
              <DatePicker
                hintText="Promo End"
                floatingLabelText="Promo End"
                name="promo_end"
                value={this.state.promo_endTemp}
                fullWidth={true}
                onChange={(e, input) => {
                  this.setState({
                    promo_endTemp: input,
                  });
                }}
              />
              <SelectField
                fullWidth={true}
                floatingLabelText="Promo Type"
                name="promo_type"
                value={this.state.promoTypeTemp}
                onChange={(e, index, value) => {
                  this.setState({
                    promoTypeTemp: value,
                    restartTemp: false,
                  });

                  if (value === 'olt') {
                    this.setState({
                      dataPromoAreaTemp: this.state.dataOlt,
                    });
                  } else if (value === 'fdt') {
                    this.setState({
                      dataPromoAreaTemp: this.state.dataFdt,
                    });
                  } else if (value === 'cluster') {
                    this.setState({
                      dataPromoAreaTemp: this.state.dataCluster,
                    });
                  } else if (value === 'city') {
                    this.setState({
                      dataPromoAreaTemp: this.state.dataCity,
                    });
                  } else {
                    this.setState({
                      dataPromoAreaTemp: this.state.dataRegion,
                    });
                  }
                }}
              >
                <MenuItem value={'olt'} primaryText="OLT" />
                <MenuItem value={'city'} primaryText="City" />
                <MenuItem value={'region'} primaryText="Region" />
                <MenuItem value={'fdt'} primaryText="FDT" />
              </SelectField>
              <div>
                {this.state.restartTemp && (
                  <ChipInput
                    allowDuplicates={false}
                    hintText="Promo Area"
                    floatingLabelText="Promo Area"
                    dataSource={this.state.dataPromoAreaTemp}
                    defaultValue={[this.state.promo_valueTemp]}
                    onChange={(val) =>
                      this.setState({
                        promo_valueTemp: val,
                      })
                    }
                  />
                )}
              </div>
              <TextField
                required={true}
                hintText="Promo Percentage"
                floatingLabelText="Promo Percentage"
                name="promo_percentage"
                fullWidth={true}
                type="number"
                onChange={(e, input) => {
                  this.setState({
                    promoPercentageTemp: input,
                  });
                }}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      );
    };
    return (
      <Row className="m-b-15">
        <Paper style={styles.paper}>
          <Col xs={12} md={12} lg={12}>
            <Dialog
              title={this.state.warningMessage != 'FAILED' ? 'Success' : 'FAILED TO CREATE PRODUCT'}
              actions={actions()}
              modal={true}
              open={this.state.openWarning}
              onRequestClose={this.handleClose}
            >
              {this.state.warningMessage}
              <br />
              {`${this.state.createdName} ${this.state.createdCode}`}
            </Dialog>
            <Dialog
              title="Product Updated"
              actions={actions('update')}
              modal={true}
              open={this.state.updateAlert}
              onRequestClose={() => this._onUpdate()}
            />
            <Dialog
              title="Edit Product"
              actions={actionsModalTable}
              modal={true}
              open={this.state.openEdit}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              {_renderModalComponent()}
            </Dialog>
            <Dialog
              title="Delete Product"
              actions={actionsDeleteTable}
              modal={true}
              open={this.state.deleteAlert}
              onRequestClose={() =>
                this.setState({
                  deleteAlert: false,
                })
              }
            >
              Are you sure want to delete {this.state.deleteName}?
            </Dialog>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="Add Product"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.currentTab == 0 && _renderCreateProduct()}
              </Tab>
              <Tab
                value={1}
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
                label="Manage Product"
              >
                {this.state.currentTab == 1 && _renderTableProduct()}
              </Tab>
            </Tabs>
          </Col>
        </Paper>
      </Row>
    );
  }
}
