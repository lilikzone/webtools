import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import FontIcon from 'material-ui/FontIcon';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  paper: {
    padding: 30,
    minHeight: 160,
    marginBottom: 15,
  },
  checkbox: {
    marginBottom: 16,
  },
  divider: {
    marginBottom: 20,
  },
  radioButton: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },

  thumbOff1: {
    backgroundColor: '#45CB85',
  },
  trackOff1: {
    backgroundColor: '#6A7FDB',
  },
  thumbSwitched1: {
    backgroundColor: '#6A7FDB',
  },
  trackSwitched1: {
    backgroundColor: '#6A7FDB',
  },

  thumbOff2: {
    backgroundColor: '#F7D002',
  },
  trackOff2: {
    backgroundColor: '#BF1A2F',
  },
  thumbSwitched2: {
    backgroundColor: '#BF1A2F',
  },
  trackSwitched2: {
    backgroundColor: '#BF1A2F',
  },

  thumbOff3: {
    backgroundColor: '#686963',
  },
  trackOff3: {
    backgroundColor: '#DB5461',
  },
  thumbSwitched3: {
    backgroundColor: '#DB5461',
  },
  trackSwitched3: {
    backgroundColor: '#DB5461',
  },

  thumbOff4: {
    backgroundColor: '#3D348B',
  },
  trackOff4: {
    backgroundColor: '#E6AF2E',
  },
  thumbSwitched4: {
    backgroundColor: '#E6AF2E',
  },
  trackSwitched4: {
    backgroundColor: '#E6AF2E',
  },

  thumbOff5: {
    backgroundColor: '#34D1BF',
  },
  trackOff5: {
    backgroundColor: '#D1345B',
  },
  thumbSwitched5: {
    backgroundColor: '#D1345B',
  },
  trackSwitched5: {
    backgroundColor: '#D1345B',
  },

  thumbOff6: {
    backgroundColor: '#BDF7B7',
  },
  trackOff6: {
    backgroundColor: '#6B2737',
  },
  thumbSwitched6: {
    backgroundColor: '#6B2737',
  },
  trackSwitched6: {
    backgroundColor: '#6B2737',
  },

  thumbOff7: {
    backgroundColor: '#75ABBC',
  },
  trackOff7: {
    backgroundColor: '#A2AEBB',
  },
  thumbSwitched7: {
    backgroundColor: '#A2AEBB',
  },
  trackSwitched7: {
    backgroundColor: '#A2AEBB',
  },
  labelStyle: {
    color: 'red',
  },
  labelStyle1: {
    color: '#45CB85',
  },
  labelStyle2: {
    color: '#F7D002',
  },
  labelStyle3: {
    color: '#686963',
  },
  labelStyle4: {
    color: '#3D348B',
  },
  labelStyle5: {
    color: '#34D1BF',
  },
  labelStyle6: {
    color: '#BDF7B7',
  },
  labelStyle7: {
    color: '#75ABBC',
  },
  customWidth: {
    width: 150,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  header: {
    fontWeight: 500,
    fontSize: '1.6em',
    paddingBottom: 15,
    color: 'rgba(0, 0, 0, 0.541176)',
  },
};
const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

export default class FormPage extends React.Component {
  state = {
    value: 1,
    val: null,
  };

  render() {
    return (
      <div>
        <h3>Forms / Form Elements
        </h3>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic TextField</h1>
              <Divider style={styles.divider} />
              <TextField fullWidth={true} hintText="Hint Text" />
              <br />
              <br />
              <TextField fullWidth={true} hintText="The hint text can be as long as you want, it will wrap." />
              <br />
              <br />
              <TextField fullWidth={true} id="text-field-default" defaultValue="Default Value" />
              <br />
              <br />
              <TextField fullWidth={true} hintText="Hint Text" floatingLabelText="Floating Label Text" />
              <br />
              <br />
              <TextField
                fullWidth={true}
                defaultValue="Default Value"
                floatingLabelText="Floating Label Text"
              />

            </Paper>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic TextField</h1>
              <Divider style={styles.divider} />
              <TextField
                fullWidth={true}
                hintText="Password Field"
                floatingLabelText="Password"
                type="password"
              />
              <br />
              <br />
              <TextField
                fullWidth={true}
                hintText="MultiLine with rows: 2 and rowsMax: 4"
                multiLine={true}
                rows={2}
                rowsMax={4}
              />
              <br />
              <br />
              <TextField
                fullWidth={true}
                hintText="Message Field"
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}
              />
              <br />
              <br />
              <TextField
                fullWidth={true}
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
              />
            </Paper>
          </Col>

        </Row>


        <Row>

          <Col xs={12} md={12} lg={12}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Full Width TextField</h1>
              <Divider style={styles.divider} />
              <TextField hintText="Full width" fullWidth={true} />
            </Paper>
          </Col>

        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic Checkbox</h1>
              <Divider style={styles.divider} />
              <Checkbox label="Simple" style={styles.checkbox} />
              <Checkbox
                checkedIcon={<FontIcon className="material-icons" > favorite </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" > favorite_border </FontIcon>}
                label="Custom icon"
                style={styles.checkbox}
              />
              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#963D5A"> visibility </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#45CB85"> visibility_off </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />
              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#45CB85"> alarm_on </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#963D5A"> alarm_off </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />
              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#963D5A"> blur_on </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#45CB85"> blur_off </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />
              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#45CB85"> bluetooth </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#963D5A"> bluetooth_disabled </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#963D5A"> check </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#45CB85"> clear </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#45CB85"> exposure_plus_1 </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#963D5A"> exposure_plus_2 </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#963D5A"> location_on </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#45CB85"> location_off </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#45CB85"> flight_land </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#963D5A"> flight_takeoff </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#963D5A"> format_color_fill </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#45CB85"> format_color_reset </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />

              <Checkbox
                checkedIcon={<FontIcon className="material-icons" color="#45CB85"> layers </FontIcon>}
                uncheckedIcon={<FontIcon className="material-icons" color="#963D5A"> layers_clear </FontIcon>}
                label="Custom icon of different shapes"
                style={styles.checkbox}
              />
              <Checkbox label="Disabled unchecked" disabled={true} style={styles.checkbox} />
              <Checkbox
                label="Disabled checked"
                checked={true}
                disabled={true}
                style={styles.checkbox}
              />
              <Checkbox
                label="Label on the left"
                labelPosition="left"
                style={styles.checkbox}
              />
            </Paper>
          </Col>

          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic Radio Button</h1>
              <Divider style={styles.divider} />
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton value="light" label="Simple" style={styles.radioButton} />
                <RadioButton
                  value="not_light"
                  label="Selected by default"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="ludicrous"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336" > favorite </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > favorite_border </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous1"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> alarm_on </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > alarm_off </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous2"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> blur_on </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > blur_off </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous3"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> bluetooth </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > bluetooth_disabled </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous4"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> check </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > clear </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous5"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> exposure_plus_1 </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > exposure_plus_2 </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous6"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> location_on </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > location_off </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous7"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> flight_land </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > flight_takeoff </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous8"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> format_color_fill </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" color="#564592" > format_color_reset </FontIcon>}
                  style={styles.radioButton}
                />

                <RadioButton
                  value="ludicrous9"
                  label="Custom icon"
                  checkedIcon={<FontIcon className="material-icons" color="#F44336"> layers </FontIcon>}
                  uncheckedIcon={<FontIcon className="material-icons" > layers_clear </FontIcon>}
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
              <RadioButtonGroup name="shipName" defaultSelected="community">
                <RadioButton
                  value="enterprise"
                  label="Disabled unchecked"
                  disabled={true}
                  style={styles.radioButton}
                />
                <RadioButton
                  value="community"
                  label="Disabled checked"
                  disabled={true}
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
              <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
                <RadioButton
                  value="reverse"
                  label="Label on the left"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic Switch Toggle</h1>
              <Divider style={styles.divider} />
              <Toggle label="Simple" style={styles.toggle} />
              <Toggle label="Toggled by default" defaultToggled={true} style={styles.toggle} />
              <Toggle label="Disabled" disabled={true} style={styles.toggle} />
              <Toggle label="Label on the right" labelPosition="right" style={styles.toggle} />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={styles.labelStyle}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff1}
                trackStyle={styles.trackOff1}
                thumbSwitchedStyle={styles.thumbSwitched1}
                trackSwitchedStyle={styles.trackSwitched1}
                labelStyle={styles.labelStyle1}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff2}
                trackStyle={styles.trackOff2}
                thumbSwitchedStyle={styles.thumbSwitched2}
                trackSwitchedStyle={styles.trackSwitched2}
                labelStyle={styles.labelStyle2}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff3}
                trackStyle={styles.trackOff3}
                thumbSwitchedStyle={styles.thumbSwitched3}
                trackSwitchedStyle={styles.trackSwitched3}
                labelStyle={styles.labelStyle3}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff4}
                trackStyle={styles.trackOff4}
                thumbSwitchedStyle={styles.thumbSwitched4}
                trackSwitchedStyle={styles.trackSwitched4}
                labelStyle={styles.labelStyle4}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff5}
                trackStyle={styles.trackOff5}
                thumbSwitchedStyle={styles.thumbSwitched5}
                trackSwitchedStyle={styles.trackSwitched5}
                labelStyle={styles.labelStyle5}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff6}
                trackStyle={styles.trackOff6}
                thumbSwitchedStyle={styles.thumbSwitched6}
                trackSwitchedStyle={styles.trackSwitched6}
                labelStyle={styles.labelStyle6}
              />
              <Toggle
                label="Styling"
                thumbStyle={styles.thumbOff7}
                trackStyle={styles.trackOff7}
                thumbSwitchedStyle={styles.thumbSwitched7}
                trackSwitchedStyle={styles.trackSwitched7}
                labelStyle={styles.labelStyle7}
              />
            </Paper>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Advanced Select Field</h1>
              <Divider style={styles.divider} />
              <SelectField
                fullWidth={true}
                floatingLabelText="Ready?"
                value={this.state.val}
                onChange={this.handleChange}
              >
                <MenuItem value={null} primaryText="" />
                <MenuItem value={false} primaryText="No" />
                <MenuItem value={true} primaryText="Yes" />
              </SelectField>
              <br />
              <SelectField fullWidth={true} value={this.state.value} onChange={this.handleChange}>
                <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
                <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
                <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
                <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
              </SelectField>
              <br />
              <SelectField
                fullWidth={true}
                value={this.state.value}
                onChange={this.handleChange}
                floatingLabelText="Floating Label Text"
              >
                {items}
              </SelectField>
              <br />
              <SelectField
                fullWidth={true}
                value={this.state.value}
                onChange={this.handleChange}
                floatingLabelText="Floating Label Text"
                floatingLabelFixed={true}
                hintText="Hint text"
              >
                {items}
              </SelectField>
              <br />
              <SelectField
                fullWidth={true}
                value={this.state.value}
                onChange={this.handleChange}
                floatingLabelText="Styled Floating Label Text"
                floatingLabelStyle={{color: 'red'}}
              >
                {items}
              </SelectField>
              <br />

            </Paper>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Disabled TextField</h1>
              <Divider style={styles.divider} />
              <TextField
                fullWidth={true}
                disabled={true}
                hintText="Disabled Hint Text"
              /><br />
              <TextField
                fullWidth={true}
                disabled={true}
                id="text-field-disabled"
                defaultValue="Disabled Value"
              /><br />
              <TextField
                fullWidth={true}
                disabled={true}
                hintText="Disabled Hint Text"
                floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                fullWidth={true}
                disabled={true}
                hintText="Disabled Hint Text"
                defaultValue="Disabled With Floating Label"
                floatingLabelText="Floating Label Text"
              />
            </Paper>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Basic Select Field</h1>
              <Divider style={styles.divider} />
              <SelectField
                fullWidth={true}
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
              <br />
              <SelectField fullWidth={true} floatingLabelText="Frequency" value={1} disabled={true}>
                <MenuItem value={1} primaryText="Disabled" />
                <MenuItem value={2} primaryText="Every Night" />
              </SelectField>
              <br />
              <SelectField
                floatingLabelText="Frequency"
                value={this.state.value}
                onChange={this.handleChange}
                style={styles.customWidth}
              >
                <MenuItem value={1} primaryText="Custom width" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>
              <br />
              <SelectField
                fullWidth={true}
                floatingLabelText="Frequency"
                value={this.state.value}
                onChange={this.handleChange}
                autoWidth={true}
              >
                <MenuItem value={1} primaryText="Auto width" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
              </SelectField>
            </Paper>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Error TextField</h1>
              <Divider style={styles.divider} />
              <TextField
                fullWidth={true}
                hintText="Hint Text"
                errorText="This field is required"
              /><br />
              <TextField
                fullWidth={true}
                hintText="Hint Text"
                errorText="The error text can be as long as you want, it will wrap."
              /><br />
              <TextField
                fullWidth={true}
                hintText="Hint Text"
                errorText="This field is required"
                floatingLabelText="Floating Label Text"
              /><br />
              <TextField
                fullWidth={true}
                hintText="Message Field"
                errorText="This field is required."
                floatingLabelText="MultiLine and FloatingLabel"
                multiLine={true}
                rows={2}
              /><br />
            </Paper>
            <Paper style={styles.paper}>
              <h1 style={styles.header}>Styled TextField</h1>
              <Divider style={styles.divider} />
              <TextField
                fullWidth={true}
                hintText="Styled Hint Text"
                hintStyle={styles.errorStyle}
              /><br />
              <TextField
                fullWidth={true}
                hintText="Custom error color"
                errorText="This field is required."
                errorStyle={styles.errorStyle}
              /><br />
              <TextField
                fullWidth={true}
                hintText="Custom Underline Color"
                underlineStyle={styles.underlineStyle}
              /><br />
              <TextField
                fullWidth={true}
                hintText="Custom Underline Focus Color"
                underlineFocusStyle={styles.underlineStyle}
              /><br />
              <TextField
                fullWidth={true}
                floatingLabelText="Styled Floating Label Text"
                floatingLabelStyle={styles.floatingLabelStyle}
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              />
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}
