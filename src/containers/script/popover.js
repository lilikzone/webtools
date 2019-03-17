import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import RadioButton from 'material-ui/RadioButton';


const SimplePopover = React.createClass({


  getInitialState() {
    return {open: false};
  },

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({open: true, anchorEl: event.currentTarget});
  },

  handleRequestClose() {
    this.setState({open: false});
  },

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={this.handleTouchTap} primary={true} label="Click me" />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          targetOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  },
});

export class PopoverExampleAnimation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={this.handleTouchTap} primary={true} label="Click me" />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          targetOrigin={{
            horizontal: 'left',
            vertical: 'top',
          }}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

const styles = {
  h3: {
    marginTop: 20,
    fontWeight: 400,
  },
  block: {
    display: 'flex',
  },
  block2: {
    margin: 10,
  },
  pre: {
    overflow: 'hidden', // Fix a scrolling issue on iOS.
  },
  paper: {
    minHeight: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paragraph: {
    marginTop: 20,
    lineHeight: '2em',
    fontSize: '1.2em',
    marginBottom: 20,
  },
};

export class PopoverExampleConfigurable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      anchorOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top',
      },
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({anchorOrigin});
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({targetOrigin});
  };

  render() {
    return (
      <div>
        <RaisedButton onTouchTap={this.handleTouchTap} primary={true} label="Click me" />
        <h3 style={styles.h3}>Current Settings</h3>
        <pre style={styles.pre}>
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <h3 style={styles.h3}>Position Options</h3>
        <p>Use the settings below to toggle the positioning of the popovers above</p>
        <h3 style={styles.h3}>Anchor Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'vertical', 'top')}
              label="Top"
              checked={this.state.anchorOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'vertical', 'center')}
              label="Center"
              checked={this.state.anchorOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'vertical', 'bottom')}
              label="Bottom"
              checked={this.state.anchorOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'horizontal', 'left')}
              label="Left"
              checked={this.state.anchorOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'horizontal', 'middle')}
              label="Middle"
              checked={this.state.anchorOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this
              .setAnchor
              .bind(this, 'horizontal', 'right')}
              label="Right"
              checked={this.state.anchorOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <h3 style={styles.h3}>Target Origin</h3>
        <div style={styles.block}>
          <div style={styles.block2}>
            <span>Vertical</span>
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'vertical', 'top')}
              label="Top"
              checked={this.state.targetOrigin.vertical === 'top'}
            />
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'vertical', 'center')}
              label="Center"
              checked={this.state.targetOrigin.vertical === 'center'}
            />
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'vertical', 'bottom')}
              label="Bottom"
              checked={this.state.targetOrigin.vertical === 'bottom'}
            />
          </div>
          <div style={styles.block2}>
            <span>Horizontal</span>
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'horizontal', 'left')}
              label="Left"
              checked={this.state.targetOrigin.horizontal === 'left'}
            />
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'horizontal', 'middle')}
              label="Middle"
              checked={this.state.targetOrigin.horizontal === 'middle'}
            />
            <RadioButton
              onClick={this
              .setTarget
              .bind(this, 'horizontal', 'right')}
              label="Right"
              checked={this.state.targetOrigin.horizontal === 'right'}
            />
          </div>
        </div>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

const PopoverPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Popover</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Basic Popover">
          <p style={styles.paragraph}>A simple example showing a Popover containing a
            Menu. It can be also closed by clicking away from the Popover.</p>
          <SimplePopover />

        </PaperBase>
      </Paper>

    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper style={styles.paper}>
        <PaperBase title="Animation Popover">
          <p style={styles.paragraph}>The default animation style is to animate around the
          origin. An alternative animation can be applied using the animation property.
          Currently one alternative animation is available, popover-animation-from-top,
          which animates vertically.</p>
          <PopoverExampleAnimation />
        </PaperBase>
      </Paper>

    </Col>
    <Col xs={12} md={12} lg={12}>

      <Paper >
        <PaperBase title="Anchor playground">

          <p style={styles.paragraph}>Use the radio buttons to adjust the anchorOrigin and targetOrigin positions.
          </p>
          <PopoverExampleConfigurable />
        </PaperBase>
      </Paper>

    </Col>
  </Row>
</div>;

export default PopoverPage;
