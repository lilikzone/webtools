import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import SwipeableViews from 'react-swipeable-views';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs initialSelectedIndex={1}>
    <Tab label="Item One">
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the
          component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two">
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab label="onActive" data-route="/home" onActive={handleActive}>
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

const styles1 = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles1.headline}>Controllable Tab A</h2>
            <p>
              Tabs are also controllable if you want to programmatically pass them their
              values. This allows for more functionality in Tabs such as not having any Tab
              selected or assigning them different values.
            </p>
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles1.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you use controllable
              Tabs, you need to give all of your tabs values or else you wont be able to
              select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

const styles2 = {
  headline: {
    fontSize: 24,
    paddingTop: 25,
    marginBottom: 25,
    fontWeight: 500,
  },
  slide: {
    padding: 10,
  },
};

export class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  render() {
    return (
      <div>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
          <div>
            <h2 style={styles2.headline}>Tabs with slide effect</h2>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit<br />
          </div>
          <div style={styles2.slide}>
           Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
          </div>
          <div style={styles2.slide}>
           Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

const TabsExampleIcon = () => (
  <Tabs>
    <Tab icon={<FontIcon className="material-icons" > help </FontIcon>} />
    <Tab icon={<ActionFlightTakeoff />} />
    <Tab icon={<FontIcon className="material-icons" > favorite </FontIcon>} />
  </Tabs>
);

const TabsExampleIconText = () => (
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons" > phone </FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons" > favorite </FontIcon>}
      label="FAVORITES"
    />
    <Tab icon={<MapsPersonPin />} label="NEARBY" />
  </Tabs>
);

const TabsPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Tabs</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Simple example">
          <Subheader /><br />A simple example of Tabs. The third tab demonstrates
            the onActive property of Tab.<br /><br />
          <TabsExampleSimple />

        </PaperBase>
      </Paper>

      <Paper >
        <PaperBase title="Swipeable example">
          <Subheader />
          <br />
          This example integrates the react-swipeable-views component with Tabs, animating
          the Tab transition, and allowing tabs to be swiped on touch devices.
          <br /><br />
          <TabsExampleSwipeable />
        </PaperBase>
      </Paper>

    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Controlled example">
          <Subheader /><br />An example of controlled tabs. The selected tab is
            handled through state and callbacks in the parent (example) component.<br /><br />
          <TabsExampleControlled />
        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Icon example">
          <Subheader />
          <br />
          An example of tabs with icon.
          <br /><br />
          <TabsExampleIcon />
        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Icon and Text example">
          <Subheader />
          <br />
          An example of tabs with icon.
          <br /><br />
          <TabsExampleIconText />
        </PaperBase>
      </Paper>

    </Col>

  </Row>
</div>;

export default TabsPage;
