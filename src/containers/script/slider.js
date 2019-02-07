import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import Slider from 'material-ui/Slider';
/**
 * The `defaultValue` property sets the initial position of the slider.
 * The slider appearance changes when not at the starting position.
 */
const SliderExampleSimple = () => (
  <div>
    <Slider />
    <Slider defaultValue={0.5} />
    <Slider defaultValue={1} />
  </div>
);

const SliderExampleDisabled = () => (
  <div>
    <Slider disabled={true} />
    <Slider disabled={true} value={0.5} />
    <Slider disabled={true} value={1} />
  </div>
);

const SliderExampleStep = () => (<Slider step={0.10} value={0.5} />);

/**
 * The slider bar can have a set minimum and maximum, and the value can be
 * obtained through the value parameter fired on an onChange event.
 */
export class SliderExampleControlled extends React.Component {
  state = {
    firstSlider: 0.5,
    secondSlider: 50,
  };

  handleFirstSlider = (event, value) => {
    this.setState({firstSlider: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
    return (
      <div>
        <Slider
          defaultValue={0.5}
          value={this.state.firstSlider}
          onChange={this.handleFirstSlider}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.firstSlider}</span>
          <span>{' from a range of 0 to 1 inclusive'}</span>
        </p>
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
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

/**
 * The orientation of the slider can be reversed and rotated using the `axis` prop.
 */
const SliderExampleAxis = () => (
  <div style={styles.root}>
    <Slider
      style={{
        height: 100,
      }} axis="y" defaultValue={0.5}
    />
    <Slider
      style={{
        width: 200,
      }} axis="x-reverse"
    />
    <Slider
      style={{
        height: 100,
      }} axis="y-reverse" defaultValue={1}
    />
  </div>
);

const SliderPage = () => <div>
  <h3 style={globalStyles.navigation}>Scripts / Slider</h3>
  <Row>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Simple example">
          <Subheader /><br />The defaultValue property sets the initial position
            of the slider. The slider appearance changes when not at the starting position.<br /><br />
          <SliderExampleSimple />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Stepped example">
          <Subheader /><br />By default, the slider is continuous. The step
            property causes the slider to move in discrete increments.<br /><br />
          <SliderExampleStep />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Alternative Axis example">
          <Subheader /><br />The orientation of the slider can be reversed and rotated using the axis prop.<br />
          <SliderExampleAxis />

        </PaperBase>
      </Paper>
    </Col>
    <Col xs={12} md={6} lg={6}>

      <Paper >
        <PaperBase title="Disabled example">
          <Subheader /><br />
          <SliderExampleDisabled />

        </PaperBase>
      </Paper>
      <Paper >
        <PaperBase title="Controlled example">
          <Subheader /><br />The slider bar can have a set minimum and maximum,
            and the value can be obtained through the value parameter fired on an onChange
            event.<br />
          <SliderExampleControlled />

        </PaperBase>
      </Paper>
    </Col>

  </Row>
</div>;

export default SliderPage;
