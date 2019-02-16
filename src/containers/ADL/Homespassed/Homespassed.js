import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import {Map, Marker, Popup, TileLayer, Tooltip} from 'react-leaflet';
import {Tabs, Tab} from 'material-ui/Tabs';
import styles from '../../../styles';
import {Grid, Row, Col} from 'react-flexbox-grid';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import {MaterialContainer} from 'react-table-components';
import {blue400, teal300, red400} from 'material-ui/styles/colors';
import 'react-leaflet-markercluster/dist/styles.min.css';
import 'leaflet/dist/leaflet.css';
import {RaisedButton} from 'material-ui';
const style = {
  uploadInput: {
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
export default class HomePassed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -2.5489,
      lng: 118.0149,
      zoom: 4,
      currentTab: 0,
    };
    this.pins = [];
    for (let i = 0; i < 500; i++) {
      this.pins.push({
        lat: -7.250445 + Math.floor(Math.random() * 10),
        lng: 112.768845 + Math.floor(Math.random() * 10),
      });
    }
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
  }
  _mapEvent(event) {
    const {lat, lng} = event.target.getCenter();
    this.setState({lat, lng, zoom: event.target.getZoom()});
  }
  render() {
    var position = [this.state.lat, this.state.lng];
    let _renderPin = (data) => {
      return data.map((value, index) => {
        return (
          <Marker key={index} position={value}>
            <Popup>
              <div>
                <p>Jakarta</p>
              </div>
            </Popup>
          </Marker>
        );
      });
    };
    let _renderMap = () => {
      return (
        <Map
          ref={(ref) => {
            this.map = ref;
          }}
          style={styles.map}
          center={position}
          zoom={this.state.zoom}
          minZoom={2}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>{_renderPin(this.pins)}</MarkerClusterGroup>
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
          headerClass: 'mdl-data-table__cell--numeric',
          cellClass: 'mdl-data-table__cell--numeric',
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
          headerClass: 'mdl-data-table__cell--numeric',
          cellClass: 'mdl-data-table__cell--numeric',
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
          width: '4%',
          headerClass: 'mdl-data-table__cell--non-numeric',
          cellClass: 'mdl-data-table__cell--non-numeric',
        },
        {
          id: 12,
          title: 'RW',
          prop: 'RW',
          width: '4%',
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
      return (
        <div>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <div className="mdl-layout mdl-layout--no-drawer-button container">
                <div className="mdl-layout--fixed-drawer" id="asa">
                  <RaisedButton
                    label={'IMPORT'}
                    backgroundColor={teal300}
                    labelColor={'white'}
                    style={{marginRight: 10, marginTop: 10}}
                  >
                    <input type="file" style={style.uploadInput} />
                  </RaisedButton>

                  <RaisedButton
                    label={'EXPORT'}
                    labelColor={'white'}
                    backgroundColor={red400}
                    style={{marginTop: 10}}
                  >
                    <input type="submit" style={style.uploadInput} />
                  </RaisedButton>

                  <MaterialContainer
                    keys="id"
                    className="mdl-data-table"
                    columns={columns}
                    // onDragColumn={(columns) => console.log(columns)}
                    // onChangeColumnsVisibility={(columns) => console.log(columns)}
                    dataArray={this.data}
                    draggable={false}
                    sortable={false}
                    sortBy={{prop: 'id', order: 'asc'}}
                    pageSizeOptions={[5]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    };
    return (
      <Paper style={styles.paper}>
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
              {this.state.currentTab == 0 && _renderMap()}
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
              {_renderTable()}
            </Tab>
          </Tabs>
        </Col>
      </Paper>
    );
  }
}
