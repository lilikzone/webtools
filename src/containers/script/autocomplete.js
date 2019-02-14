import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

export class AutoCompleteExampleSimple extends React.Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
        />
        <AutoComplete
          hintText="Type anything"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      </div>
    );
  }
}


const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

/**
 * The first example has `MenuItem`s in its data source that display on data entry.
 * The second example uses an array of values as its `dataSource`, and updates on focus.
 * Both examples have filtering disabled.
 */
const AutoCompleteExampleDataSource = () => (
  <div>
    <AutoComplete
      fullWidth={true}
      hintText="text-value data"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    /><br />
    <AutoComplete
      fullWidth={true}
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      fullWidth={true}
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
  </div>
);

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

/**
 * Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses `fuzzyFilter`,
 * and limits the number of results displayed using the `maxSearchResults` property.
 */
const AutoCompleteExampleFilters = () => (
  <div>
    <AutoComplete
      fullWidth={true}
      floatingLabelText="Type 'r', case insensitive"
      filter={AutoComplete.defaultFilter}
      dataSource={colors}
    />
    <br />
    <AutoComplete
      fullWidth={true}
      floatingLabelText="Type 'peah', fuzzy search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={fruit}
      maxSearchResults={5}
    />
  </div>
);


/**
 * `AutoComplete` search text can be implemented as a controlled value,
 * where `searchText` is handled by state in the parent component.
 * That value is reseted with the `onNewRequest` callback.
 */
export class AutoCompleteExampleControlled extends React.Component {
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText,
    });
  };

  handleNewRequest = () => {
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Type 'r', case insensitive"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={colors}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          openOnFocus={true}
        />
      </div>
    );
  }
}

const menuProps = {
  desktop: true,
  disableAutoFocus: true,
};

/**
 * Provide props to be passed into the Menu component.
 */
export class AutoCompleteExampleMenuProps extends React.Component {
  render() {
    return (
      <div>
        <AutoComplete
          fullWidth={true}
          hintText="Type anything"
          dataSource={colors}
          menuProps={menuProps}
        />
      </div>
    );
  }
}

export default class AppAutoComp extends React.Component {
  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Scripts / Auto Complete</h3>
        <Row>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Simple example">
                <Subheader>The input is used to create the dataSource, so the input always matches three entries.
                <AutoCompleteExampleSimple /></Subheader><br />
              </PaperBase>
            </Paper>
            <Paper >
              <PaperBase title="Data source">
                <Subheader>The first example has MenuItems in its data source that display on data entry. The second example uses an array of values as its dataSource, and updates on focus. Both examples have filtering disabled.

                <AutoCompleteExampleDataSource /></Subheader><br />

              </PaperBase>
            </Paper>
          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Controlled example">
                <Subheader>AutoComplete search text can be implemented as a controlled value, where searchText is handled by state in the parent component. That value is reseted with the onNewRequest callback.
                  <AutoCompleteExampleControlled />
                </Subheader><br />
              </PaperBase>
            </Paper>
            <Paper >
              <PaperBase title="MenuProps example">
                <Subheader>Provide props to be passed into the Menu component.
                  <AutoCompleteExampleMenuProps />
                </Subheader><br />

              </PaperBase>
            </Paper>
          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Filters">
                <Subheader>Two examples of filtering. The first uses caseInsensitiveFilter, the second uses fuzzyFilter, and limits the number of results displayed using the maxSearchResults property.
                    <AutoCompleteExampleFilters />
                </Subheader><br />


              </PaperBase>
            </Paper>


          </Col>

        </Row>


      </div>
    );
  }
}
