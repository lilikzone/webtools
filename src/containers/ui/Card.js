import React from 'react';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import {fullWhite} from 'material-ui/styles/colors';
import {Row, Col} from 'react-flexbox-grid';
import SemanticCard from '../../components/semanticui/card';
import '../page/pricePage.scss';
import SvgIco from '../../components/svg_ico';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import AtvImg from 'react-atv-img';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
const style = {
  icon: {
    fontSize: 60,
  },
  card: {
    marginBottom: 15,
  },
  pricePaper: {
    marginTop: 0,
    paddingBottom: 50,
  },
};


const CardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>User Interfaces / Cards</h3>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>

            <CardMedia
              overlay={< CardTitle title="Jesicca Doyle" subtitle="Designer" />}
            >
              <img src="./assets/images/people/21.jpg" />
            </CardMedia>

            <CardActions>
              <RaisedButton label="Add Friend" fullWidth={true} primary={true} style={style} />
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>

            <CardMedia
              overlay={< CardTitle title="Samantha Redding" subtitle="Model" />}
            >
              <img src="./assets/images/people/22.jpg" />
            </CardMedia>

            <CardActions>
              <RaisedButton label="Add Friend" fullWidth={true} primary={true} style={style} />
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>

            <CardMedia
              overlay={< CardTitle title="Jack Bouner" subtitle="Photographer" />}
            >
              <img src="./assets/images/people/23.jpg" />
            </CardMedia>

            <CardActions>
              <RaisedButton label="Add Friend" fullWidth={true} primary={true} style={style} />

            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>

            <CardMedia
              overlay={< CardTitle title="Dany Oswald" subtitle="Footballere" />}
            >
              <img src="./assets/images/people/24.jpg" />
            </CardMedia>

            <CardActions>
              <RaisedButton label="Add Friend" fullWidth={true} primary={true} style={style} />
            </CardActions>
          </Card>
        </Col>
      </Row>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>
            <CardHeader
              title="Cheryl Sweet"
              subtitle="Co-Producer"
              avatar="./assets/images/avatar/5.jpg"
            />
            <CardMedia
              overlay={< CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="./assets/images/1.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
              massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton label="Add Friend" />
              <FlatButton label="Say Hello!" />
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>
            <CardHeader
              title="Nancy Bbloom"
              subtitle="Styler"
              avatar="./assets/images/avatar/6.jpg"
            />
            <CardMedia
              overlay={< CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="./assets/images/2.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
              massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton label="Add Friend" />
              <FlatButton label="Say Hello!" />
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>
            <CardHeader
              title="Jacky Brown"
              subtitle="Designer"
              avatar="./assets/images/avatar/7.jpg"
            />
            <CardMedia
              overlay={< CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="./assets/images/3.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
              massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton label="Add Friend" />
              <FlatButton label="Say Hello!" />
            </CardActions>
          </Card>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Card style={style.card}>
            <CardHeader
              title="Tracy Swan"
              subtitle="Lawyer"
              avatar="./assets/images/avatar/8.jpg"
            />
            <CardMedia
              overlay={< CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
            >
              <img src="./assets/images/4.jpg" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium
              massa. Aliquam erat volutpat. Nulla facilisi.
            </CardText>
            <CardActions>
              <FlatButton label="Add Friend" />
              <FlatButton label="Say Hello!" />
            </CardActions>
          </Card>
        </Col>
      </Row>
      <Row className="m-b-15">

        <Col xs={12} md={3} lg={3}>
          <Paper className="card">
            <div className="card-header" data-background-color="orange">Card Title</div>
            <div className="card-content">Card Content</div>
            <div className="card-footer">Card Footer</div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper className="card">
            <div className="card-header" data-background-color="blue">Card Title</div>
            <div className="card-content">Card Content</div>
            <div className="card-footer">Card Footer</div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper className="card">
            <div className="card-header" data-background-color="green">Card Title</div>
            <div className="card-content">Card Content</div>
            <div className="card-footer">Card Footer</div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper className="card">
            <div className="card-header" data-background-color="red">Card Title</div>
            <div className="card-content">Card Content</div>
            <div className="card-footer">Card Footer</div>
          </Paper>
        </Col>
      </Row>
      <Row>

        <Col xs={12} md={3} lg={3}>
          <Paper zDepth={5} className="card card-stats">
            <div className="card-header" data-background-color="red">
              <FontIcon className="material-icons" color={fullWhite} style={style.icon}>
                local_dining
              </FontIcon>

            </div>
            <div className="card-content">
              <p className="category">Card Category</p>
              <h3 className="card-title">Card Title</h3>
            </div>
            <div className="card-footer">
              <div className="stats">

                Updated 1 Hour Ago
              </div>
            </div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper zDepth={5} className="card card-stats">
            <div className="card-header" data-background-color="green">
              <FontIcon className="material-icons" color={fullWhite} style={style.icon}>
                local_gas_station
              </FontIcon>

            </div>
            <div className="card-content">
              <p className="category">Card Category</p>
              <h3 className="card-title">Card Title</h3>
            </div>
            <div className="card-footer">
              <div className="stats" />
            </div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper zDepth={5} className="card card-stats">
            <div className="card-header" data-background-color="blue">
              <FontIcon className="material-icons" color={fullWhite} style={style.icon}>
                terrain
              </FontIcon>

            </div>
            <div className="card-content">
              <p className="category">Card Category</p>
              <h3 className="card-title">Card Title</h3>
            </div>
            <div className="card-footer">
              <div className="stats" />
            </div>
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper zDepth={5} className="card card-stats">
            <div className="card-header" data-background-color="orange">
              <FontIcon className="material-icons" color={fullWhite} style={style.icon}>
                local_pizza
              </FontIcon>

            </div>
            <div className="card-content">
              <p className="category">Card Category</p>
              <h3 className="card-title">Card Title</h3>
            </div>
            <div className="card-footer">
              <div className="stats" />
            </div>
          </Paper>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={3} lg={3}>
          <SemanticCard
            name="Emily Blumm"
            date="May 19 2017"
            friendcount="16"
            description="Designer"
            image="./assets/images/people/1.jpg"
          />
        </Col>
        <Col xs={12} md={3} lg={3}>
          <SemanticCard
            name="Caterine Colin"
            date="June 23 2017"
            friendcount="44"
            description="Co-Producer"
            image="./assets/images/people/2.jpg"
          />
        </Col>
        <Col xs={12} md={3} lg={3}>
          <SemanticCard
            name="Adam Saki"
            date="Apr 14 2017"
            friendcount="65"
            description="Prpgrammer"
            image="./assets/images/people/3.jpg"
          />
        </Col>
        <Col xs={12} md={3} lg={3}>
          <SemanticCard
            name="Veronica Grien"
            date="Oct 3 2017"
            friendcount="39"
            description="Styler"
            image="./assets/images/people/7.jpg"
          />
        </Col>
      </Row>
      <Row>

        <Col xs={12} md={3} lg={3}>

          <AtvImg
            layers={[
              './assets/images/people/7.jpg',
              './assets/images/people/7.jpg',
            ]}
            staticFallback="./assets/images/people/7.jpg"
            isStatic={false}
            className={'thisIsOptional'}
            style={{width: '100%', height: 250, marginTop: 15, marginBottom: 15}}
          />

        </Col>

        <Col xs={12} md={3} lg={3}>

          <AtvImg
            layers={[
              './assets/images/people/3.jpg',
              './assets/images/people/3.jpg',
            ]}
            staticFallback="./assets/images/people/3.jpg"
            isStatic={false}
            className={'thisIsOptional'}
            style={{width: '100%', height: 250, marginTop: 15, marginBottom: 15}}
          />

        </Col>
        <Col xs={12} md={3} lg={3}>

          <AtvImg
            layers={[
              './assets/images/people/2.jpg',
              './assets/images/people/2.jpg',
            ]}
            staticFallback="./assets/images/people/2.jpg"
            isStatic={false}
            className={'thisIsOptional'}
            style={{width: '100%', height: 250, marginTop: 15, marginBottom: 15}}
          />

        </Col>
        <Col xs={12} md={3} lg={3}>

          <AtvImg
            layers={[
              './assets/images/people/1.jpg',
              './assets/images/people/1.jpg',
            ]}
            staticFallback="./assets/images/people/1.jpg"
            isStatic={false}
            className={'thisIsOptional'}
            style={{width: '100%', height: 250, marginTop: 15, marginBottom: 15}}
          />

        </Col>

      </Row>
      <Row>

        <Col xs={12} md={3} lg={3}>
          <Paper className="pricePaper" zDepth={2} style={style.pricePaper}>
            <SvgIco className="icon" type="omlet" />
            <Divider className="divider" />
            <h1>OMLET</h1>
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum
              ante ipsum primis..</p>
            <h1 className="startup_price">$10,99
            </h1>
            <RaisedButton label="Add Basket" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>

        <Col xs={12} md={3} lg={3}>
          <Paper className="pricePaper" zDepth={2} style={style.pricePaper}>
            <SvgIco className="icon" type="hamburger" />
            <Divider className="divider" />
            <h1>HAMBURGER</h1>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin
              molestie malesuada.</p>
            <h1 className="enterprise_price">$11,89</h1>
            <RaisedButton label="ADD BASKET" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>

        <Col xs={12} md={3} lg={3}>
          <Paper className="pricePaper" zDepth={2} style={style.pricePaper}>
            <SvgIco className="icon" type="donut" />
            <Divider className="divider" />
            <h1>DONUT</h1>
            <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
              Mauris blandit aliquet elit..</p>
            <h1 className="enterprise_price">$5,85</h1>
            <RaisedButton label="ADD BASKET" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>
        <Col xs={12} md={3} lg={3}>
          <Paper className="pricePaper" zDepth={2} style={style.pricePaper}>
            <SvgIco className="icon" type="chicken" />
            <Divider className="divider" />
            <h1>CHICKEN</h1>
            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante
              ipsum primis in..</p>
            <h1 className="enterprise_price">$4,68</h1>
            <RaisedButton label="ADD BASKET" backgroundColor="#79bbc7" labelColor="#fff" />
          </Paper>
        </Col>

      </Row>

    </div>

  );
};

export default CardPage;
