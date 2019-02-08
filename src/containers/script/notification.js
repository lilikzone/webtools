import React from 'react';
import PaperBase from '../../components/PaperBase';
import {Grid, Row, Col} from 'react-flexbox-grid';
import globalStyles from '../../styles';
import Paper from 'material-ui/Paper';
import {deepOrange500} from 'material-ui/styles/colors';
import ReactMaterialUiNotifications from 'react-materialui-notifications';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Close from 'material-ui/svg-icons/navigation/close';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import Message from 'material-ui/svg-icons/communication/message';
import moment from 'moment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const noti = {
  zIndex: '99999',
  marginLeft: 90,
};
const styles = {

  paper: {
    minHeight: 150,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paragraph: {
    marginTop: 20,
    lineHeight: '2em',
    fontSize: '1.2em',
    marginBottom: 20,
  },
};

export default class AppNotificaiton extends React.Component {
  state = {
    count: 0,

  }
  showNotification = () => {
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: 'Some message to be displayed  ',
      icon: <Message />,
      iconBadgeColor: deepOrange500,
      desktop: true,
      zDepth: 5,
      autoHide: 5000,
      style: noti,
      overflowText: 'joe@gmail.com',
      timestamp: moment().format('h:mm A'),
    });
    // update notifications count
    this.setState({
      count: ++this.state.count,
    });
  }

  showPersonalisedNotification = () => {
    // update notifications count
    this.setState({
      count: ++this.state.count,
    });
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Some message to be displayed ${this.state.count}`,
      icon: <Message />,
      iconBadgeColor: deepOrange500,
      overflowText: 'me@gmail.com',
      timestamp: moment().format('h:mm A'),
      personalised: true,
      autoHide: 5000,
      style: noti,
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    });
  }

  showPriorityNotification = () => {
    // update notifications count
    this.setState({
      count: ++this.state.count,
    });
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Some message to be displayed ${this.state.count}`,
      icon: <CommunicationCall />,
      iconBadgeColor: deepOrange500,
      overflowContent: <div>
        <FlatButton label="dismiss" icon={<Close />} />
        <FlatButton label="answer" icon={<CommunicationCall />} />
      </div>,
      timestamp: moment().format('h:mm A'),
      personalised: true,
      autoHide: 5000,
      style: noti,
      avatar: 'https://randomuser.me/api/portraits/women/49.jpg',
      priority: true,
      zDepth: 4,
    });
  }

  render() {
    return (
      <div>
        <h3 style={globalStyles.navigation}>Scripts / Notifications</h3>
        <Row>
          <Col xs={12} md={4} lg={4}>

            <Paper style={styles.paper}>
              <PaperBase title="Basic Notification">
                <Subheader /><br />
                <RaisedButton label="Basic Notification" fullWidth={true} primary={true} onTouchTap={this.showNotification} />
                <br /><br />

                <ReactMaterialUiNotifications desktop={true} />

              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper style={styles.paper}>
              <PaperBase title="Picture Notification">
                <Subheader /><br />

                <RaisedButton
                  fullWidth={true} secondary={true}
                  label="Picture Notification"
                  onTouchTap={this.showPersonalisedNotification}
                />
                <br /><br />


              </PaperBase>
            </Paper>

          </Col>
          <Col xs={12} md={4} lg={4}>

            <Paper style={styles.paper}>
              <PaperBase title="Button Notification">
                <Subheader /><br />

                <RaisedButton
                  fullWidth={true} primary={true}
                  label="Button Notification"
                  onTouchTap={this.showPriorityNotification}
                />


              </PaperBase>
            </Paper>

          </Col>
        </Row>
      </div>
    );
  }
}
