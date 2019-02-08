import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const CircularProgressExampleSimple = () => (
  <div>
    <CircularProgress /><br /><br />
    <CircularProgress color="#9CCC65" /><br /><br />
    <CircularProgress color="#FF5722" size={60} thickness={7} /><br /><br />
    <CircularProgress size={80} thickness={5} />
  </div>
);
export class CircularProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <div>
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
        /><br /><br />
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={60}
          thickness={7}
        /><br /><br />
        <CircularProgress
          mode="determinate"
          value={this.state.completed}
          size={80}
          thickness={5}
        />
      </div>
    );
  }
}

export class LinearProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <LinearProgress mode="determinate" value={this.state.completed} />
    );
  }
}

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorExampleLoading = () => (
  <div style={style.container}>
    <RefreshIndicator
      size={40}
      left={10}
      top={0}
      status="loading"
      style={style.refresh}
    />
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={style.refresh}
    />
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Scripts / Progress Bar</h3>
        <Row>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Circular Progress Bar">
                <Subheader>By default, the indicator animates continuously.</Subheader><br />
                <CircularProgressExampleSimple />
              </PaperBase>
            </Paper>
            <Paper >
              <PaperBase title="Circular Determinate  Progress Bar">
                <Subheader>In determinate mode, the indicator adjusts to show the percentage complete, as a ratio of value: max-min.</Subheader><br />

                <RefreshIndicatorExampleLoading />

              </PaperBase>
            </Paper>
          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Refresh Indicator">
                <Subheader>The loading status displays an indeterminate indicator, intended to to be used while content is loading. The loadingColor prop can be used to set the indicator color, which defaults to the secondary color.</Subheader><br />

                <CircularProgressExampleDeterminate />

              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper >
              <PaperBase title="Linear  Progress Bar">
                <Subheader>By default, the indicator animates continuously.</Subheader><br />
                <LinearProgress mode="indeterminate" />

              </PaperBase>
            </Paper>

            <Paper >
              <PaperBase title="Linear Determinate  Progress Bar">
                <Subheader>In determinate mode, the indicator adjusts to show the percentage complete, as a ratio of value: max-min.</Subheader><br />
                <LinearProgressExampleDeterminate />
              </PaperBase>
            </Paper>

          </Col>

          <Col xs={12} md={4} lg={4} />
        </Row>

        <Row>

          <Col xs={12} md={4} lg={4} />

        </Row>

      </div>
    );
  }
}
