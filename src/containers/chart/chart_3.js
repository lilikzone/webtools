import React from 'react';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';

import LineChart from '../../components/charts/g2Charts/line';
import AreaChart from '../../components/charts/g2Charts/area';
import PieChart from '../../components/charts/g2Charts/pie';
import RoseChart from '../../components/charts/g2Charts/rose';
import BarChart from '../../components/charts/g2Charts/bar';
import PolarChart from '../../components/charts/g2Charts/polar';
import BubbleChart from '../../components/charts/g2Charts/bubble';
import WorldMap from '../../components/charts/g2Charts/world';
import UsaMap from '../../components/charts/g2Charts/usa';
import RadialChart from '../../components/charts/g2Charts/radial';
import ConeChart from '../../components/charts/g2Charts/cone';
import PieMap from '../../components/charts/g2Charts/piemap';
import Message from '../../components/ui/messages/messages';

const styles = {
  row: {
    marginBottom: 15,
  },
};

const ChartPage3 = () => {
  return (
    <div>
      <h3>Pages / Chart v3</h3>
      <Message
        zdepth={1}
        color="info"
        header="G2 Charts"
        message="You need to use G2 mobile for mobile view"
      />
      <Row style={styles.row}>

        <Col xs={12} md={12} lg={12}>
          <Paper zDepth={2}>
            <LineChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <PieChart />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <RoseChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={12} lg={12}>
          <Paper zDepth={2}>
            <AreaChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={12} lg={12}>
          <Paper zDepth={2}>
            <BarChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <PolarChart />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <BubbleChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <WorldMap />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <UsaMap />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <RadialChart />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper zDepth={2}>
            <ConeChart />
          </Paper>
        </Col>
      </Row>
      <Row style={styles.row}>

        <Col xs={12} md={12} lg={12}>
          <Paper zDepth={2}>
            <PieMap />
          </Paper>
        </Col>
      </Row>
    </div>
  );
};

export default ChartPage3;
