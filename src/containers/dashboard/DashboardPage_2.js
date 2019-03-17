import React from 'react';
import {red500, green500, teal300, blue400} from 'material-ui/styles/colors';
import InfoBox from '../../components/dashboard/InfoBox_3';
import {Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import VisitorStatus from '../../components/charts/visitorStatus';
import DeviceStatistics from '../../components/charts/deviceStatistics';
import NewVisitors from '../../components/charts/newVisitors';
import EngagementRate from '../../components/charts/engagementRate';
import MapChart from '../../components/charts/mapChart';
import RecentVisitors from '../../components/charts/recentVisitors';
import CountUp from 'react-countup';


const style = {
  height: 110,
  width: '100%',
  display: 'inline-block',
};
const style_2 = {
  height: 450,
  width: '100%',
  display: 'inline-block',
  padding: 10,
  overflow: 'hidden',

};
const DashboardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard v1</h3>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Paper style={style} zDepth={1}>
            <InfoBox
              icon="arrow_drop_up"
              color={teal300}
              title="Total Visitors"
              increase={<CountUp start={0} end={15} suffix="%"   useEasing={true} duration={10} />}
              value={<CountUp start={0} end={3456}  useGrouping={true} useEasing={true} duration={5} />}
            />

          </Paper>

        </Col>
        <Col xs={12} md={3} lg={3}>

          <Paper style={style} zDepth={1}>
            <InfoBox
              icon="arrow_drop_down"
              color={blue400}
              title="Unique Views"
              increase={<CountUp start={15} end={8} suffix="%"   useEasing={true} duration={10} />}
              value={<CountUp start={0} end={2388}   useGrouping={true} useEasing={true} duration={5} />}
            />
          </Paper>

        </Col>
        <Col xs={12} md={3} lg={3}>

          <Paper style={style} zDepth={1}>
            <InfoBox
              icon="arrow_drop_up"
              color={teal300}
              title="Page Views"
              increase={<CountUp start={0} end={5} suffix="%"   useEasing={true} duration={10} />}
              value={<CountUp start={0} end={5636}   useGrouping={true} useEasing={true} duration={5} />}
            />
          </Paper>

        </Col>

        <Col xs={12} md={3} lg={3}>

          <Paper style={style} zDepth={1}>
            <InfoBox
              icon="arrow_drop_down"
              color={blue400}
              title="Engagement"
              increase={<CountUp start={8} end={3} suffix="%"   useEasing={true} duration={10} />}
              value={<CountUp start={0} end={9366}   useGrouping={true} useEasing={true} duration={5} />}
            />
          </Paper>
        </Col>

      </Row>
      <Row>

        <Col xs={12} md={8} lg={8}>
          <Paper style={style_2} zDepth={1}>
            <VisitorStatus />
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper style={style_2} zDepth={1}>
            <DeviceStatistics />
          </Paper>
        </Col>

      </Row>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <Paper style={style_2} zDepth={1}>
            <NewVisitors />
          </Paper>
        </Col>
        <Col xs={12} md={8} lg={8}>
          <Paper style={style_2} zDepth={1}>
            <EngagementRate />
          </Paper>
        </Col>

      </Row>

      <Row>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style_2} zDepth={1}>
            <RecentVisitors />
          </Paper>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Paper style={style_2} zDepth={1}>
            <MapChart />
          </Paper>
        </Col>

      </Row>
    </div>
  );
};

export default DashboardPage;
