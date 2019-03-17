import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';
import Slider from 'material-ui/Slider';
import {orange500, blue500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import styles from '../../styles';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

import {Row, Col} from 'react-flexbox-grid';
import {
  Card,
} from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';


const style = {
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
};


export default class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      dataSource: [],
    };
  }

  handleCheckForm(event, value) {
    if (this.state.error != '') {
      this.setState({error: ''});
    } else {
      this.setState({error: 'This field is required.'});
    }
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value, value + value,
        value + value + value,
      ],
    });
  }

  render() {
    return (
      <div>
        <h3 style={styles.navigation}>Form Page / Advanced Form
        </h3>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <Paper style={styles.paper}>
                <Subheader>Form Validate</Subheader>
                <form>
                  <TextField hintText="Hint Text" errorText={this.state.error} />
                  <Divider />
                  <TextField
                    hintText="Message Field"
                    errorText={this.state.error}
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiLine={true}
                    rows={2}
                  />
                  <Divider />
                  <TextField
                    hintText="Custom Underline Color"
                    underlineStyle={style.underlineStyle}
                  />
                  <Divider />
                  <TextField hintText="Styled Hint Text" hintStyle={style.errorStyle} />
                  <Divider />
                  <TextField
                    hintText="Hint Text"
                    errorText="This field is required"
                    floatingLabelText="Floating Label Text"
                  />
                  <Divider />
                  <TextField
                    floatingLabelText="Styled Floating Label Text"
                    floatingLabelStyle={style.floatingLabelStyle}
                    floatingLabelFocusStyle={style.floatingLabelFocusStyle}
                  />
                  <Divider />

                  <RaisedButton label="Reset" />

                  <RaisedButton
                    label="Save"
                    style={styles.saveButton}
                    onClick={this
                    .handleCheckForm
                    .bind(this)}
                    primary={true}
                  />
                </form>
              </Paper>
            </Card>

          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card>
              <Paper style={styles.paper}>
                <Subheader>Advanced Form</Subheader>
                <form>
                  <DatePicker hintText="Landscape Date Dialog" mode="landscape" />
                  <Divider />
                  <TextField disabled={true} hintText="Disabled Hint Text" /><br />
                  <Divider />
                  <AutoComplete
                    hintText="Type anything(autoComplete)"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput}
                  />
                  <Divider />
                  <Slider defaultValue={0.5} />
                  <Divider />
                  <SelectField
                    floatingLabelText="Ready?"
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={null} primaryText="" />
                    <MenuItem value={false} primaryText="No" />
                    <MenuItem value={true} primaryText="Yes" />
                  </SelectField>
                  <Divider />
                  <SelectField value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
                    <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
                    <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
                    <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
                  </SelectField>
                  <Divider />
                  <RaisedButton label="Reset" />

                  <RaisedButton
                    label="Save"
                    style={styles.saveButton}
                    onClick={this
                    .handleCheckForm
                    .bind(this)}
                    primary={true}
                  />
                </form>
              </Paper>
            </Card>

          </Col>
          <Col xs={12} md={3} lg={3}>
            <Card>
              <Paper style={styles.paper}>
                <Subheader>Login Form</Subheader>
                <form>
                  <TextField hintText="Hint Text" floatingLabelText="Username" />
                  <br />
                  <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                  /><br />
                  <br />

                  <RaisedButton
                    label="Login"
                    style={styles.saveButton}
                    onClick={this
                    .handleCheckForm
                    .bind(this)}
                    primary={true}
                  />
                </form>
              </Paper>
            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}
