import React from 'react';
import {cyan600, pink600, purple600, orange600, teal300, blue400} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../../../components/dashboard/InfoBox';
import {Row, Col} from 'react-flexbox-grid';
import WebsiteViews from '../../../components/dashboard/WebsiteViews';
import CompletedTasks from '../../../components/dashboard/CompletedTasks';
import DailySales from '../../../components/dashboard/DailySales';
import UserTable from '../../../components/dashboard/UserTable';
import RecentlyProducts from '../../../components/dashboard/RecentlyProducts';
import globalStyles from '../../../styles';
import Data from '../../../data';
import Paper from 'material-ui/Paper';
import CountUp from 'react-countup';

const style = {
  height: 100,
  width: '100%',
  marginBottom: 15,
  display: 'inline-block',
};
const style_2 = {
  height: 445,
  width: '100%',
  display: 'inline-block',
  background: 'url("./assets/images/bg.jpg") no-repeat center center',
  backgroundSize: 'cover',

};
const pic = {
  height: 445,
  width: '100%',
  display: 'inline-block',
  borderRadius: 2,
};
const DashboardPage_2 = () => {
  return (
    <div>
      {/* <h3 style={globalStyles.navigation}>Application / Dashboard </h3> */}

      {/* <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Paper style={style} zDepth={1}>
            <InfoBox
              Icon={ShoppingCart}
              color={teal300}
              title="Total Profit"
              value={<CountUp start={0} end={20198} useGrouping={false}  useEasing={true} duration={7} />}
            /></Paper>
          <Paper style={style} zDepth={1}>
            <InfoBox Icon={Assessment} color={teal300} title="Sales" value={<CountUp start={0} end={460} duration={5} />} /></Paper>
          <Paper style={style} zDepth={1}>
            <InfoBox Icon={Face} color={blue400} title="Members" value={<CountUp start={0} end={248} duration={5} />} /></Paper>
        </Col>

        <Col xs={12} md={9} lg={9}>
          <DailySales data={Data.dashBoardPage.DailySales} />
        </Col>

      </Row>

      <Row className="m-b-15">
        <Col xs={12} md={6} lg={6}>

          <RecentlyProducts data={Data.dashBoardPage.recentProducts} />
        </Col>

        <Col xs={12} md={6} lg={6}>
          <UserTable />
        </Col>
      </Row> */}


    </div>
  );
};

export default DashboardPage_2;
