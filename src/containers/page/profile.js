import React from 'react';
import './profile.scss';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';
import Badge from 'antd/lib/badge';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';


const style = {
  button: {
    margin: 12,
  },
  icon: {
    verticalAlign: 'top',
    paddingTop: 2,
  },
  profileHeader: {
    background: 'url(\'./assets/images/4.jpg\') no-repeat',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    height: '250px',
  },
};

class ProfilePage extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="profile-page">
        <Row>
          <Col xs={12} md={3} lg={3} className="infoCol">
            <Paper className="profile" zDepth={5}>
              <div className="profile-header" style={style.profileHeader}>
                <img className="profileImage" src="./assets/images/3.jpg" />
              </div>
              <div className="profileInfo">
                <h1>Samantha Grey</h1>
                <p>UX Designer . London, England</p>

                <h1 className="profileIntro">INTRO</h1>
                <p className="profileAbout">User experinces become more inportant than products;
                        companies now have to consider how products and services enhance specific
                        lifestyles and workflows</p>
                <h1 className="profilePhotoHeader">PHOTOS</h1>
                <div className="profilePhotos">
                  <img src="./assets/images/people/3.jpg" />
                  <img src="./assets/images/people/10.jpg" />
                  <Badge count={100}>
                    <a href="#" className="head-example" />
                  </Badge>
                </div>
                <h1 className="profilefirendHeader">FRIENDS</h1>
                <div className="profilePhotos">
                  <img src="./assets/images/people/1.jpg" />
                  <img src="./assets/images/people/2.jpg" />
                  <img src="./assets/images/people/7.jpg" />
                  <img src="./assets/images/people/12.jpg" />

                  <Badge count={100}>
                    <a href="#" className="head-example" />
                  </Badge>
                </div>
              </div>
            </Paper>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Paper zDepth={5} className="card card-stats">
              <div className="card-header newpost">
                <img src="./assets/images/3.jpg" />

              </div>
              <div className="card-content">
                <p className="category"><span className="newPostIdea">What's on your mind?</span></p>
                <h3 className="card-title">Samantha Grey</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <RaisedButton
                    href="#"
                    label="Post"
                    primary={true}
                    style={style.button}
                    icon={<FontIcon
                      style={style.icon}
                      className="material-icons"
                          > send </FontIcon>}
                  />
                </div>
              </div>
            </Paper>
            <Paper className="card" zDepth={4}>
              <div className="card-header lastpost" data-background-color="red">
                <img className="contentImage" src="./assets/images/4.jpg" />
              </div>
              <div className="card-content lastpostcontent">
                <p className="category">
                        Samantha Grey
                        <small className="smallText">
                             with
                        </small>
                        Thomas Wood</p>
              </div>
              <div className="card-footer">
                <div className="stats">

                        January 18, 2017 . Italy
                    </div>
              </div>
            </Paper>

            <Paper className="card" zDepth={3}>
              <div className="card-header lastpost" data-background-color="red">
                <img className="contentImage" src="./assets/images/1.jpg" />
              </div>
              <div className="card-content lastpostcontent">
                <p className="category">
                        Samantha Grey
                        <small className="smallText">
                             with
                        </small>
                        Thomas Wood</p>
              </div>
              <div className="card-footer">
                <div className="stats">

                        Apr 1, 2017 . London
                    </div>
              </div>
            </Paper>

            <Paper className="card" zDepth={2}>
              <div className="card-header lastpost" data-background-color="red">
                <img className="contentImage" src="./assets/images/2.jpg" />
              </div>
              <div className="card-content lastpostcontent">
                <p className="category">
                        Samantha Grey
                        <small className="smallText">
                             with
                        </small>
                        Thomas Wood</p>
              </div>
              <div className="card-footer">
                <div className="stats">

                        Apr 1, 2017 . London
                    </div>
              </div>
            </Paper>

            <Paper className="card" zDepth={5} />

          </Col>
          <Col xs={12} md={3} lg={3}>
            <Paper zDepth={5} className="messenger">
              <ul className="userList">
                <li><img src="./assets/images/people/1.jpg" />
                  <span>Thomas Wood</span>
                </li>
                <li><img src="./assets/images/people/2.jpg" />
                  <span>Valentine Basser</span>
                </li>
                <li><img src="./assets/images/people/3.jpg" />
                  <span>Thomas Ronne</span>
                </li>
                <li><img src="./assets/images/people/4.jpg" />
                  <span>Patricia Dedd</span>
                </li>
                <li><img src="./assets/images/people/5.jpg" />
                  <span>Ousamma Ammar</span>
                </li>
                <li><img src="./assets/images/people/6.jpg" />
                  <span>Vincent Naigard</span>
                </li>
                <li><img src="./assets/images/people/7.jpg" />
                  <span>Theo Walcott</span>
                </li>
                <li><img src="./assets/images/people/8.jpg" />
                  <span>Adrien Dode</span>
                </li>
                <li><img src="./assets/images/people/9.jpg" />
                  <span>Audry Hepn</span>
                </li>

              </ul>
            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfilePage;
