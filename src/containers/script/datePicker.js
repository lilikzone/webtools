import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import areIntlLocalesSupported from 'intl-locales-supported';
import persianUtils from 'material-ui-persian-date-picker-utils';
import TimePicker from 'material-ui/TimePicker';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 */
const DatePickerExampleSimple = () => (
  <div>
    <DatePicker hintText="Portrait Dialog" />
    <DatePicker hintText="Landscape Dialog" mode="landscape" />
    <DatePicker hintText="Dialog Disabled" disabled={true} />
  </div>
);

/**
 * Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 */
const DatePickerExampleInline = () => (
  <div>
    <DatePicker hintText="Portrait Inline Dialog" container="inline" />
    <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
  </div>
);
const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};


/**
 * This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 */
export class DatePickerExampleToggle extends React.Component {
  constructor(props) {
    super(props);

    const minDate = new Date();
    const maxDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 1);
    minDate.setHours(0, 0, 0, 0);
    maxDate.setFullYear(maxDate.getFullYear() + 1);
    maxDate.setHours(0, 0, 0, 0);

    this.state = {
      minDate,
      maxDate,
      autoOk: false,
      disableYearSelection: false,
    };
  }

  handleChangeMinDate = (event, date) => {
    this.setState({
      minDate: date,
    });
  };

  handleChangeMaxDate = (event, date) => {
    this.setState({
      maxDate: date,
    });
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          floatingLabelText="Ranged Date Picker"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          disableYearSelection={this.state.disableYearSelection}
        />
        <div style={optionsStyle}>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Min Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={this.state.autoOk}
            floatingLabelText="Max Date"
            defaultDate={this.state.maxDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <Toggle
            name="autoOk"
            value="autoOk"
            label="Auto Ok"
            toggled={this.state.autoOk}
            onToggle={this.handleToggle}
          />
          <Toggle
            name="disableYearSelection"
            value="disableYearSelection"
            label="Disable Year Selection"
            toggled={this.state.disableYearSelection}
            onToggle={this.handleToggle}
          />
        </div>
      </div>
    );
  }
}


/**
 * `DatePicker` can be implemented as a controlled input,
 * where `value` is handled by state in the parent component.
 */
export class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
    );
  }
}


function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function disableRandomDates() {
  return Math.random() > 0.7;
}
/**
 * `DatePicker` can disable specific dates based on the return value of a callback.
 */
const DatePickerExampleDisableDates = () => (
  <div>
    <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends} />
    <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates} />
  </div>
);


let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  require('intl/locale-data/jsonp/fr');
  require('intl/locale-data/jsonp/fa-IR');
}

/**
 *  `DatePicker` can be localised using the `locale` property. The first example is localised in French.
 *  Note that the buttons must be separately localised using the `cancelLabel` and `okLabel` properties.
 *
 *  The second example shows `firstDayOfWeek` set to `0`, (Sunday), and `locale` to `en-US` which matches the
 *  behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require
 *  `DateTimeFormat` to be supplied.
 *
 *  The final example displays the resulting date in a custom format using the `formatDate` property.
 */
const DatePickerExampleInternational = () => (
  <div>
    <DatePicker
      hintText="fr locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="OK"
      cancelLabel="Annuler"
      locale="fr"
    />
    <DatePicker
      hintText="fa-IR locale"
      DateTimeFormat={DateTimeFormat}
      okLabel="تایید"
      cancelLabel="لغو"
      locale="fa-IR"
      firstDayOfWeek={6}
    />
    <DatePicker
      hintText="en-US locale"
      locale="en-US"
      firstDayOfWeek={0}
    />
    <DatePicker
      hintText="Custom date format"
      firstDayOfWeek={0}
      formatDate={new DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}
    />
  </div>
);


const TimePickerExampleSimple = () => (
  <div>
    <TimePicker
      hintText="12hr Format"
    />
    <TimePicker
      hintText="12hr Format with auto ok"
      autoOk={true}
    />
    <TimePicker
      format="24hr"
      hintText="24hr Format"
    />
    <TimePicker
      disabled={true}
      format="24hr"
      hintText="Disabled TimePicker"
    />
  </div>
);

export class TimePickerExampleComplex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value24: null, value12: null};
  }

  handleChangeTimePicker24 = (event, date) => {
    this.setState({value24: date});
  };

  handleChangeTimePicker12 = (event, date) => {
    this.setState({value12: date});
  };

  render() {
    return (
      <div>
        <TimePicker
          format="ampm"
          hintText="12hr Format"
          value={this.state.value12}
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          format="24hr"
          hintText="24hr Format"
          value={this.state.value24}
          onChange={this.handleChangeTimePicker24}
        />
      </div>
    );
  }
}

const TimePickerInternational = () => (
  <div>
    <TimePicker
      hintText="Custom Labels"
      okLabel="确定"
      cancelLabel="取消"
    />
  </div>
);

const DatePickerPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Date Time Picker</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Simple example">
          <Subheader /><br />The Date Picker defaults to a portrait dialog. The mode property can be set to landscape. You can also disable the Dialog passing true to the disabled property.<br /><br />

          <DatePickerExampleSimple />
        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Inline examples">
          <Subheader /><br />Inline Date Pickers are displayed below the input, rather than as a modal dialog.<br /><br />
          <DatePickerExampleInline />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Ranged example">
          <Subheader /><br />This example allows you to set a date range, and to toggle autoOk, and disableYearSelection.<br />
          <DatePickerExampleToggle />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Time Picker Simple Examples">
          <Subheader /><br />Time Picker supports 12 hour and 24 hour formats. In 12 hour format the AM and PM indicators toggle the selected time period. You can also disable the Dialog passing true to the disabled property.<br />
          <TimePickerExampleSimple />

        </PaperBase>
      </Paper>
    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Controlled example">
          <Subheader /><br />DatePicker can be implemented as a controlled input, where value is handled by state in the parent component.<br /><br />
          <DatePickerExampleControlled />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Disabled dates example">
          <Subheader /><br />DatePicker can disable specific dates based on the return value of a callback.<br />
          <DatePickerExampleDisableDates />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Localised example">
          <Subheader /><br />DatePicker can be localised using the locale property. The first example is localised in French. Note that the buttons must be separately localised using the cancelLabel and okLabel properties.<br />

          The second example shows firstDayOfWeek set to 0, (Sunday), and locale to en-US which matches the behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require DateTimeFormat to be supplied.<br />

          The final example displays the resulting date in a custom format using the formatDate property.<br /><br />
          <DatePickerExampleInternational />

        </PaperBase>
      </Paper>

      <Paper >
        <PaperBase title="Time Picker Controlled Examples">
          <Subheader /><br />Time Picker supports 12 hour and 24 hour formats. In 12 hour format the AM and PM indicators toggle the selected time period. You can also disable the Dialog passing true to the disabled property.<br />
          <TimePickerExampleComplex />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Time Picker Localised Examples">
          <Subheader /><br />The buttons can be localised using the cancelLabel and okLabel properties.<br />
          <TimePickerInternational />

        </PaperBase>
      </Paper>
    </Col>

  </Row>
</div>;

export default DatePickerPage;
