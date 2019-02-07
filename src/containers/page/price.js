import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import SvgIco from '../../components/svg_ico';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import './pricePage.scss';
const BlankPage = () => {
  return (
    <div className="pricePage">
      <h1 className="priceTitle">Simple pricing from startup to enterprise</h1>
      <Row>

        <Col xs={12} md={4} lg={4}>
          <Paper className="pricePaper" zDepth={2}>
            <SvgIco className="icon" type="baby" />
            <Divider className="divider" />
            <h1>STARTUP</h1>
            <p>All the essential futures with chat support</p>
            <h1 className="startup_price">$49<small>/user</small></h1>
            <RaisedButton label="FREE TRIAL" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper className="pricePaper centerPrice" zDepth={5}>
            <SvgIco className="icon" type="CoffeetoGo" />
            <Divider className="divider" />
            <h1>PRO</h1>
            <p>Sophisticated futures + phone support</p>
            <h1 className="pro_price">$99<small>/each</small></h1>
            <RaisedButton label="FREE TRIAL" backgroundColor="#e9571b" labelColor="#fff" />
          </Paper>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Paper className="pricePaper" zDepth={2}>
            <SvgIco className="icon" type="CoconutCocktail" />
            <Divider className="divider" />
            <h1>ENTERPRISE</h1>
            <p>Every future + priority phone support, and 1 hour response time</p>
            <h1 className="enterprise_price">$149</h1>
            <RaisedButton label="FREE TRIAL" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>


      </Row>
    </div>
  );
};

export default BlankPage;
