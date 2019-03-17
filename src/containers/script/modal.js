import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const customContentStyle = {
  width: '100%',
  maxWidth: 'none',
};

const styles = {
  radioButton: {
    marginTop: 16,
  },
  paper: {
    minHeight: 250,
  },
  paragraph: {
    marginTop: 20,
    lineHeight: '2em',
    fontSize: '1.2em',
    marginBottom: 20,
  },
};

const radios = [];
for (let i = 0; i < 30; i++) {
  radios.push(<RadioButton
    key={i}
    value={`value${i + 1}`}
    label={`Option ${i + 1}`}
    style={styles.radioButton}
              />);
}

export default class DialogExampleSimple extends React.Component {
  state = {
    open: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleOpen1 = () => {
    this.setState({open1: true});
  };

  handleOpen2 = () => {
    this.setState({open2: true});
  };

  handleOpen3 = () => {
    this.setState({open3: true});
  };
  handleOpen4 = () => {
    this.setState({open4: true});
  };

  handleOpen5 = () => {
    this.setState({open5: true});
  };

  handleClose = () => {
    this.setState({open: false, open1: false, open2: false, open3: false, open4: false, open5: false});
  };

  render() {
    const actions = [<FlatButton
      label="Cancel" primary={true}
      onTouchTap={this.handleClose}
                     />, <FlatButton
                       label="Submit" primary={true}
                       keyboardFocused={true}
                       onTouchTap={this.handleClose}
                         />,
    ];

    const actions2 = [<FlatButton
      label="Cancel" primary={true}
      onTouchTap={this.handleClose}
                      />, <FlatButton
                        label="Submit" primary={true}
                        disabled={true}
                        onTouchTap={this.handleClose}
                          />,
    ];

    const actions3 = [<FlatButton
      label="Cancel" primary={true}
      onTouchTap={this.handleClose}
                      />, <FlatButton
                        label="Submit" primary={true}
                        disabled={true}
                        onTouchTap={this.handleClose}
                          />,
    ];

    const actions4 = [<FlatButton
      label="Ok" primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleClose}
                      />];

    const actions5 = [<FlatButton
      label="Cancel" primary={true}
      onTouchTap={this.handleClose}
                      />, <FlatButton
                        label="Discard" primary={true}
                        onTouchTap={this.handleClose}
                          />,
    ];

    return (
      <div>
        <h3 style={globalStyles.navigation}>Scripts / Modal</h3>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Basic Modal">
                <p style={styles.paragraph}>
                Dialog with action buttons. The actions are passed in as an array of React
                objects, in this example FlatButtons.
                You can also close this dialog by clicking outside the dialog, or with the 'Esc'
                key.</p>
                <RaisedButton label="Dialog" fullWidth={true} primary={true} onTouchTap={this.handleOpen} />
                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  The actions in this window were passed in as an array of React objects.
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase style={styles.paperbase} title="Basic Modal">
                <p style={styles.paragraph}>A modal dialog can only be closed by selecting one of the actions.</p>
                <RaisedButton label="Modal Dialog" fullWidth={true} primary={true} onTouchTap={this.handleOpen1} />
                <Dialog
                  title="Dialog With Actions"
                  actions={actions2}
                  modal={true}
                  open={this.state.open1}
                >
                  Only actions can close this dialog.
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Styled Modal">
                <p style={styles.paragraph}>The dialog width has been set to occupy the full width of browser through the
                contentStyle property.</p>
                <RaisedButton primary={true} fullWidth={true} label="Dialog With Custom Width" onTouchTap={this.handleOpen2} />
                <Dialog
                  title="Dialog With Custom Width"
                  actions={actions3}
                  modal={true}
                  contentStyle={customContentStyle}
                  open={this.state.open2}
                >
                  This dialog spans the entire width of the screen.
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Nested Modal">
                <p style={styles.paragraph}>Dialogs can be nested. This example opens a Date Picker from within a Dialog.</p>
                <RaisedButton primary={true} fullWidth={true} label="Dialog With Date Picker" onTouchTap={this.handleOpen3} />
                <Dialog
                  title="Dialog With Date Picker"
                  actions={actions4}
                  modal={false}
                  open={this.state.open3}
                  onRequestClose={this.handleClose}
                >
                  Open a Date Picker dialog from within a dialog.
                  <DatePicker hintText="Date Picker" />
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>

          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Nested Modal">
                <p style={styles.paragraph}>Dialog content can be scrollable.</p>
                <RaisedButton primary={true} fullWidth={true} label="Scrollable Dialog" onTouchTap={this.handleOpen4} />
                <Dialog
                  title="Scrollable Dialog"
                  actions={actions}
                  modal={false}
                  open={this.state.open4}
                  onRequestClose={this.handleClose}
                  autoScrollBodyContent={true}
                >
                  <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    {radios}
                  </RadioButtonGroup>
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>

          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <PaperBase title="Nested Modal">
                <p style={styles.paragraph}>Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.</p>
                <RaisedButton primary={true} fullWidth={true} label="Alert" onTouchTap={this.handleOpen5} />
                <Dialog
                  actions={actions5}
                  modal={false}
                  open={this.state.open5}
                  onRequestClose={this.handleClose}
                >
                  Discard draft?
                </Dialog>
              </PaperBase>
            </Paper>

          </Col>
        </Row>
      </div>
    );
  }
}
