import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Slider from 'material-ui/Slider';
import Divider from 'material-ui/Divider';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlider: 0.5,
      secondSlider: 50,
      value: 1,
    };
  }
  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  }

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <h3 style={styles.navigation}>Form Page / Basic
        </h3>
        <div className="row">

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-5 ">
            <Paper style={styles.paper}>
              <Subheader>Form</Subheader>
              <form>
                <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} />
                <TextField
                  hintText="Password Field"
                  floatingLabelText="Password"
                  type="password"
                  fullWidth={true}
                />

                <TextField
                  hintText="MultiLine with rows: 2 and rowsMax: 4"
                  multiLine={true}
                  rows={2}
                  rowsMax={4}
                  fullWidth={true}
                />

                <TextField disabled={true} hintText="Disabled Hint Text" fullWidth={true} />
                <Divider />
                <Link to="#">
                  <RaisedButton label="Cancel" />
                </Link>
                <RaisedButton
                  label="Save"
                  style={styles.saveButton}
                  type="submit"
                  primary={true}
                />
              </form>
            </Paper>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-5 ">
            <Paper style={styles.paper}>
              <Subheader>Form</Subheader>
              <form>
                <TextField hintText="Name" floatingLabelText="Name" fullWidth={true} />

                <SelectField
                  floatingLabelText="Frequency"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Never" />
                  <MenuItem value={2} primaryText="Every Night" />
                  <MenuItem value={3} primaryText="Weeknights" />
                  <MenuItem value={4} primaryText="Weekends" />
                  <MenuItem value={5} primaryText="Weekly" />
                </SelectField>

                <DatePicker
                  hintText="Expiration Date"
                  floatingLabelText="Expiration Date"
                  fullWidth={true}
                />

                <TimePicker format="24hr" hintText="24hr Format" />
                <div style={styles.toggleDiv}>
                  <Toggle
                    label="Disabled"
                    labelStyle={styles.toggleLabel}
                    style={styles.width200}
                  />
                </div>

                <Checkbox label="Simple Checkbox" style={styles.checkbox} />

                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                  <RadioButton value="light" label="Simple" style={styles.radioButton} />
                  <RadioButton
                    value="not_light"
                    label="Selected by default"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={50}
                  value={this.state.secondSlider}
                  onChange={this.handleSecondSlider}
                />
                <p>
                  <span>{'The value of this slider is: '}</span>
                  <span>{this.state.secondSlider}</span>
                  <span>{' from a range of 0 to 100 inclusive'}</span>
                </p>
                <Divider />
                <Link to="#">
                  <RaisedButton label="Cancel" />
                </Link>
                <RaisedButton
                  label="Save"
                  style={styles.saveButton}
                  type="submit"
                  primary={true}
                />
              </form>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
