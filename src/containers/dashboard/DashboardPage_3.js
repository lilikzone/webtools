import React from 'react';
import InfoBox from '../../components/dashboard/InfoBoxes_2';
import ProductSales from '../../components/dashboard/ProductSales';

import {Row, Col} from 'react-flexbox-grid';
import UserTable from '../../components/dashboard/UserTable_2';
import AppBare from '../../components/appBar';
import globalStyles from '../../styles';
import Data from '../../data';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
const WorldMap = require('react-world-map');
import Title from '../../components/titles';
import AreaChart from '../../components/charts/areaChart';
import BurnedCalories from '../../components/charts/burnedCalories';
import CountUp from 'react-countup';

const style = {
  minHeight: 225,
  width: '100%',
  display: 'inline-block',
  marginBottom: 15,
  marginTop: 0,

};

const style_3 = {
  padding: 30,
};


const DashboardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard v3</h3>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>

          <InfoBox
            icon="attach_money"
            color={'#00acc1'}
            title="Last month sales"
            value={<CountUp start={0} end={4590} prefix="$"  useGrouping={true} useEasing={true} duration={5} />}
          />

        </Col>
        <Col xs={12} md={3} lg={3}>

          <InfoBox
            icon="local_offer"
            color={'#e53935'}
            title="New order received"
            value={<CountUp start={0} end={360}  duration={7} />}
          />

        </Col>
        <Col xs={12} md={3} lg={3}>

          <InfoBox
            icon="local_grocery_store"
            color={'#8e24aa'}
            title="Total Products"
            value={<CountUp start={0} end={160527.0127} separator="."  useGrouping={true} useEasing={true} decimal="," duration={5} />}
          />

        </Col>

        <Col xs={12} md={3} lg={3}>

          <InfoBox
            icon="remove_red_eye"
            color={'#43a047'}
            title="Unique visitors"
            value={<CountUp start={0} end={1100500}  useGrouping={true} useEasing={true} decimal="." duration={5} />}
          />
        </Col>

      </Row>
      <Row>

        <Col xs={12} md={8} lg={8}>
          <Paper className="card" style={style} zDepth={1}>
            <Title title="Product Sales" />
            <ProductSales data={Data.dashBoardPage.WebsiteViews} />
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper className="card" style={style} zDepth={1}>
            <Title title="Team Member" />
            <List>

              <ListItem
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="./assets/images/people/18.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src="./assets/images/people/12.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Grace Ng"
                leftAvatar={<Avatar src="./assets/images/people/13.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Kerem Suer"
                leftAvatar={<Avatar src="./assets/images/people/14.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Raquel Parrado"
                leftAvatar={<Avatar src="./assets/images/people/15.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />

            </List>
          </Paper>
        </Col>

      </Row>
      <Row>
        <Col xs={12} md={7} lg={7}>
          <Paper className="card" style={style} zDepth={1}>
            <Title title="Users Table" />
            <UserTable />
          </Paper>
        </Col>
        <Col xs={12} md={5} lg={5}>

          <Paper className="card" style={style} zDepth={1}>
            <Title title="Monthly Sales" />
            <BurnedCalories />
          </Paper>

        </Col>

      </Row>

      <Row>
        <Col xs={12} md={12} lg={12}>

          <Paper style={style} className="card" zDepth={1}>
            <Title title="Sales Chart" />
            <Row style={style_3}>
              <Col xs={12} md={6} lg={6}>
                <WorldMap /></Col>
              <Col xs={12} md={6} lg={6}>
                <AreaChart />
              </Col>
            </Row>

          </Paper>

        </Col>

      </Row>
    </div>
  );
};

export default DashboardPage;
