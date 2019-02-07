import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';


const styles = {

  paper: {
    minHeight: 250,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    marginTop: 20,
    lineHeight: '2em',
    fontSize: '1.2em',
    marginBottom: 20,
  },
};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoHideDuration: 4000,
      message: 'Event added to your calendar',
      open: false,
      open1: false,
      message3: 'Event 1 added to your calendar',
      open3: false,
    };
    this.timer = undefined;
  }

  componentWillUnMount() {
    clearTimeout(this.timer);
  }

  handleTouchTap = () => {
    this.setState({open: true});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  handleTouchTap1 = () => {
    this.setState({open1: true});
  };

  handleActionTouchTap = () => {
    this.setState({open1: false});
    alert('Event removed from your calendar.');
  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ?
        parseInt(value) :
        0,
    });
  };

  handleRequestClose1 = () => {
    this.setState({open1: false});
  };


  handleTouchTap3 = () => {
    this.setState({open3: true});

    this.timer = setTimeout(() => {
      this.setState({
        message3: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
      });
    }, 1500);
  };

  handleRequestClose3 = () => {
    this.setState({open3: false});
  };

  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Scripts / Alerts</h3>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Single Action">
                <p style={styles.paragraph}>Snackbar is a controlled component, and is displayed when open is true. Click
                away from the Snackbar to close it, or wait for autoHideDuration to expire.</p>
                <RaisedButton onTouchTap={this.handleTouchTap} fullWidth={true} secondary={true} label="Add to my calendar" />
                <Snackbar
                  open={this.state.open}
                  message="Event added to your calendar"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose}
                />
              </PaperBase>
            </Paper>
            <Paper style={styles.paper}>
              <PaperBase title="Autohide Action">

                <p style={styles.paragraph}>A single action can be added to the Snackbar, and triggers onActionTouchTap.
                Edit the textfield to change autoHideDuration</p>
                <RaisedButton onTouchTap={this.handleTouchTap1} fullWidth={true} secondary={true} label="Add to my calendar" />
                <br />
                <TextField
                  floatingLabelText="Auto Hide Duration in ms"
                  value={this.state.autoHideDuration}
                  onChange={this.handleChangeDuration}
                />
                <Snackbar
                  open={this.state.open1}
                  message={this.state.message}
                  action="undo"
                  autoHideDuration={this.state.autoHideDuration}
                  onActionTouchTap={this.handleActionTouchTap}
                  onRequestClose={this.handleRequestClose1}
                />
              </PaperBase>
            </Paper>
          </Col>
          <Col xs={12} md={6} lg={6}>

            <Paper style={styles.paper}>
              <PaperBase title="Consecutive Snackbar">

                <p style={styles.paragraph}>Changing message causes the Snackbar to animate - it isn't necessary to close
                and reopen the Snackbar with the open prop.</p>
                <RaisedButton
                  fullWidth={true} secondary={true}
                  onTouchTap={this.handleTouchTap3}
                  label="Add to my calendar twice"
                />
                <Snackbar
                  open={this.state.open3}
                  message={this.state.message3}
                  action="undo"
                  autoHideDuration={3000}
                  onRequestClose={this.handleRequestClose3}
                />
              </PaperBase>
            </Paper>

          </Col>

        </Row>
      </div>
    );
  }
}
