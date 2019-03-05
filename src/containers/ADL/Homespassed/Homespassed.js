import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import {Map, Marker, Popup, TileLayer, Tooltip} from 'react-leaflet';
import {Tabs, Tab} from 'material-ui/Tabs';
import styles from '../../../styles';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import CircularProgress from 'material-ui/CircularProgress';
// import {MaterialContainer} from 'react-table-components';
import MaterialContainer from '../../CustomComponents/react-table-components/lib/containers/MaterialContainer';
import {blue400, teal300, red400} from 'material-ui/styles/colors';
import {CSVLink, CSVDownload} from 'react-csv';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import {RaisedButton} from 'material-ui';
import moment from  'moment';
import Cookies from 'universal-cookie';
import TextField from 'material-ui/TextField';
const blueMarker = L.icon({
  iconUrl: require('../../../assets/images/blue-marker.png'),
  iconSize: [30, 30], // size of the icon
});
const redMarker = L.icon({
  iconUrl: require('../../../assets/images/red-marker.png'),
  iconSize: [30, 30], // size of the icon
});
const cookies = new Cookies();
const HOSTNAME = 'https://source.adlsandbox.com/api/homespassed';
const style = {
  tableButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const accessImport = ['admin', 'operation', 'homepassed'];

// generate Marker
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default class HomePassed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -2.5489,
      lng: 118.0149,
      zoom: 4,
      currentTab: 0,
      markerData: [],
      keyword: '',
      searchType: 'keyword',
      tableData: {
        current_page: 1,
        last_page: 1,
        data: [],
      },
      loadedMap: false,
      loadedTable: false,
      cookies: '',
      page: 1,
      role: '',
    };
    // this.pins = [];
    // for (let i = 0; i < 500; i++) {
    //   this.pins.push({
    //     lat: -7.250445 + Math.floor(Math.random() * 10),
    //     lng: 112.768845 + Math.floor(Math.random() * 10),
    //   });
    // }
    this.data = {
      firstLayer: [
        {
          lat: -7.250445,
          lng: 112.768845,
          address: 'Jakarta No.1 Mangga Dua',
          id: 1,
        },
        {
          lat: -6.17511,
          lng: 106.865036,
          address: 'Surabaya No.3',
          id: 2,
        },
        {
          lat: -7.257472,
          lng: 112.75209,
          address: 'Bogor No.69',
          id: 3,
        },
      ],
      secondLayer: [
        {
          lat: -2.976074,
          lng: 104.775429,
          address: 'Malang L2',
        },
        {
          lat: -6.139127,
          lng: 106.828715,
          address: 'Surabaya No.21',
        },
      ],
    };
    this.dataImport = [
      {
        id: '6584278700',
        file: (
          <a download="file.csv" href="/images/myw3schoolsimage.jpg">
            file.csv
          </a>
        ),
        size: '100 kB',
        status: 'Success',
        date: '18 February 2019',
      },
    ];
  }

  componentDidMount() {
    this._getAPIMap(`${HOSTNAME}/map`);
    this._getAPITable(HOSTNAME, this.state.tableData.current_page);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.tableData.current_page != this.state.tableData.current_page) {
      this.setState({
        loadedTable: false,
      });
      this._getAPITable(HOSTNAME, this.state.tableData.current_page);
    }
  }
  _mapEvent(event) {
    const {lat, lng} = event.target.getCenter();
    this.setState({lat, lng, zoom: event.target.getZoom()});
  }
  _getAPIMap(apiUrl) {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log('response_MAP', responseJson);
        if (responseJson) {
          this.setState({
            markerData: responseJson,
            loadedMap: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  _getAPITable(apiUrl, page) {
    fetch(`${apiUrl}?page=${page}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.cookies}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson) {
          this.setState({
            tableData: responseJson,
            loadedTable: true,
          });
        }
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
        if (responseJson.data != null) {
          console.log('ssshh', responseJson);
          this.setState({
            tableData: responseJson.data,
          });
        }
        this.setState({
          loadedTable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handleUpdate() {
    this.setState({
      loadedTable: false,
    });
    this._getUpdate(`${HOSTNAME}/search?${this.state.searchType}=${this.state.keyword}`);
  }
  componentWillMount() {
    const cookieData = cookies.get('ssid');

    if (cookieData !== undefined && cookieData !== '') {
      const userData = cookies.get('rdata');
      const role = userData.split('+');
      this.setState({
        cookies: cookieData,
        role: role[1],
      });
    }
  }
  _renderPin = (data) => {
    let arrTemp = [];
    data.map((value, index) => {
      if (!isNaN(parseFloat(value.fat_latitude)) && !isNaN(parseFloat(value.fat_longitude))) {
        let latlng = {position: [parseFloat(value.fat_latitude), parseFloat(value.fat_longitude)], popup: this._getLeafletPopup(value.full_address), options: {title: value.full_address, icon: value.in_use == 1 ? redMarker : blueMarker}};
        arrTemp.push(latlng);
      }
    });
    return arrTemp;
  };
  _getLeafletPopup(name) {
    return L.popup({minWidth: 200, closeButton: true})
      .setContent(`
        <div>
          <p>${name}</p>
        </div>
      `);
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    let _renderMap = () => {
      return (
        <Map
          ref={(ref) => {
            this.map = ref;
          }}
          style={styles.map}
          center={position}
          zoom={this.state.zoom}
          minZoom={1}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup  markers={this._renderPin(this.state.markerData)} chunkedLoading={true} maxClusterRadius={(zoom) => zoom > 16 ? 5 : 20} />
        </Map>
      );
    };
    let _renderTable = () => {
      const columns = [
        {
          id: 1,
          title: 'ID',
          prop: 'id',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 2,
          title: 'Vendor',
          prop: 'vendor',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 3,
          title: 'Region',
          prop: 'region',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 4,
          title: 'City',
          prop: 'city',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 5,
          title: 'Residence',
          prop: 'residence',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 6,
          title: 'Cluster',
          prop: 'cluster',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 7,
          title: 'Prefix Address',
          prop: 'prefix_address',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 8,
          title: 'Street',
          prop: 'street',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 9,
          title: 'House Number',
          prop: 'house_number',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 10,
          title: 'Block',
          prop: 'block',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 11,
          title: 'RT',
          prop: 'RT',
          width: '2%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 12,
          title: 'RW',
          prop: 'RW',
          width: '2%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 13,
          title: 'District',
          prop: 'District',
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        // {id: 10, title: 'Action', render: DeleteBtn, width: '10%', headerClass: 'mdl-data-table__cell--non-numeric'},
      ];
      const csvData = [
        ['firstname', 'lastname', 'email'],
        ['Ahmed', 'Tomi', 'ah@smthing.co.com'],
        ['Raed', 'Labes', 'rl@smthing.co.com'],
        ['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
      ];
      return (
        <div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <RaisedButton
                    backgroundColor={red400}
                    style={{marginTop: 10}}
                  >
                    <CSVLink
                      data={this.state.tableData.data}
                      filename={`Homespassed List ${new Date(moment())}.xls`}
                      style={{color: 'white'}}
                      target="_blank"
                    >
                      EXPORT
                    </CSVLink>
                  </RaisedButton>
                  <div>
                    <SelectField
                      fullWidth={false}
                      hintText={'Search by'}
                      floatingLabelText="Search By"
                      name="search_by"
                      value={this.state.searchType}
                      onChange={(e, index, value) => {
                        this.setState({
                          searchType: value,
                        });
                      }}
                    >
                      <MenuItem value={'cluster'} primaryText="Cluster" />
                      <MenuItem value={'street'} primaryText="Street" />
                      <MenuItem value={'full_address'} primaryText="Full Address" />
                      <MenuItem value={'get_city'} primaryText="Get City" />
                      <MenuItem value={'city'} primaryText="City" />
                      <MenuItem value={'keyword'} primaryText="Keyword" />
                      <MenuItem value={'key'} primaryText="key" />
                    </SelectField>
                  </div>
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
                  <RaisedButton secondary={true} label={'Search'} onMouseDown={() => this._handleUpdate()} />
                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={columns}
                    onChangePage={((page) => this.setState({
                      tableData: {...this.state.tableData, current_page: page + 1},
                    }))}
                    dataArrayCustom={this.state.tableData.data}
                    draggable={true}
                    sortable={false}
                    currentPage={this.state.tableData.current_page - 1}
                    total={this.state.tableData.last_page}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[10]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    };
    let _renderLoading = () => {
      return (

        <div style={{minWidth: 700}}>
          <div
            style={{margin: '0 auto',
              marginTop: 20,
              width: '20%',
              textAlign: 'center'}}
          >
            <CircularProgress />
          </div>
        </div>
      );
    };
    let _renderImport = () => {
      const columns = [
        {
          id: 1,
          title: 'ID',
          prop: 'id',
          width: '20%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 2,
          title: 'File',
          prop: 'file',
          width: '20%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 3,
          title: 'Size',
          prop: 'size',
          width: '20%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 4,
          title: 'Status',
          prop: 'status',
          width: '20%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 5,
          title: 'Date',
          prop: 'date',
          width: '20%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
      ];
      return (
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div className="mdl-layout mdl-layout--no-drawer-button container">
              <div className="mdl-layout--fixed-drawer" id="asa">
                <RaisedButton
                  label="IMPORT"
                  labelPosition="before"
                  labelColor={'white'}
                  backgroundColor={teal300}
                  style={{marginTop: 10}}
                  containerElement="label"
                >
                  <input type="file" style={style.tableButton} />
                </RaisedButton>
                <MaterialContainer
                  keys="id"
                  className="mdl-data-table"
                  columns={columns}
                  dataArray={this.dataImport}
                  draggable={false}
                  sortable={false}
                  sortBy={{prop: 'id', order: 'asc'}}
                  pageSizeOptions={[5]}
                />
              </div>
            </div>
          </Col>
        </Row>
      );
    };
    return (
      <Paper style={styles.paper}>
        <Row className="m-b-15">
          <Col xs={12} md={12} lg={12}>
            <Tabs value={this.state.currentTab}>
              <Tab
                value={0}
                label="Homespassed Map"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {/* later on will need to add condition parameter --  && this.state.loadedMap */}
                {this.state.currentTab == 0  && this.state.loadedMap  ? _renderMap() :  _renderLoading()}
              </Tab>
              <Tab
                value={1}
                label="Homespassed List"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
              >
                {this.state.loadedTable ? _renderTable() :  _renderLoading()}
              </Tab>
              {accessImport.includes(this.state.role) ? <Tab
                value={2}
                label="Import Files"
                onActive={(val) => {
                  this.setState({
                    currentTab: val.props.index,
                  });
                }}
                                                        >
                {_renderImport()}
              </Tab> : ''}

            </Tabs>
          </Col>
        </Row>
      </Paper>
    );
  }
}
