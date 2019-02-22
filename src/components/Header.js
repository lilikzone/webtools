import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white, yellow500, blue600, teal500} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import LocalizedStrings from 'react-localization';
import strings from '../lang/lang.js';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {grey500, cyan300, grey300, pink300, fullWhite} from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Link} from 'react-router';

var CustomDiv = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  },
});

var CustomDiv2 = React.createClass({

  render: function() {
    const style = {
      appBar: {
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        marginBottom: -50,
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      badge: {
        padding: 0,
      },
      saveButton: {
        margin: 20,
      },
      hide: {
        display: 'none',
      },
      icons: {
        cursor: 'pointer',
      },
      main: {
        paddingLeft: 10,
        paddingRight: 10,

      },
    };

    return (<Badge
      secondary={true}
      style={style.badge} badgeStyle={{
        top: 5,
        right: 3,
        width: 20,
        height: 20,
      }} badgeContent={5}
            >
      <IconButton />
    </Badge>);
  },
});


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleToggle = () => this.setState({
    open: !this.state.open,
  });
  handleClose = () => this.setState({open: false});

  render() {
    const {styles, handleChangeRequestNavDrawer, setLanguages, setMuiTheme, setOptions} = this.props;
    const userName = 'ADL Admin';
    const style = {
      appBar: {
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
        marginBottom: -50,
      },
      menuButton: {
        marginLeft: 10,
      },
      iconsRightContainer: {
        marginLeft: 20,
      },
      badge: {
        padding: 0,
      },
      saveButton: {
        margin: 20,
      },
      hide: {
        display: 'none',
      },
      icons: {
        cursor: 'pointer',
      },
      main: {
        paddingLeft: 10,
        paddingRight: 10,

      },
      labelstyle: {
        verticalAlign: 'super',
      },
      customAvatar: {
        height: 30,
        width: 30,
      },
    };

    return (
      <div>
        <AppBar
          style={{
            ...styles,
            ...style.appBar,
          }}
          iconElementLeft={<CustomDiv>
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={'#707780'} />
            </IconButton>
            <IconMenu
              color={'#707780'}
              iconButtonElement={
                <IconButton><NotificationsIcon className="notificationButton" color={'#707780'} /><span  className="gps_ring" /></IconButton>
              }
              targetOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
            >
              <ListItem
                primaryText="Melanie Riley"
                leftAvatar={<Avatar src="./assets/images/people/45.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Pamela Boyd"
                leftAvatar={<Avatar src="./assets/images/people/51.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Anthony Simmmons"
                leftAvatar={<Avatar src="./assets/images/people/60.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Maureen Young"
                leftAvatar={<Avatar src="./assets/images/people/45.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
              <ListItem
                primaryText="Nicole Obrien"
                leftAvatar={<Avatar src="./assets/images/people/84.jpg" />}
                rightIcon={<CommunicationChatBubble />}
              />
            </IconMenu>
          </CustomDiv>}


          iconElementRight={<CustomDiv style={style.iconsRightContainer}>
            <FlatButton>
              <img style={style.customAvatar} src="/assets/images/avatar.png" />
            </FlatButton>
            <FlatButton
              className="header-username"
              label={userName}
              labelStyle={style.labelstyle}
            />
            <IconMenu
              style={style.icons}
              color={'#707780'}
              iconButtonElement={<IconButton onTouchTap={this.handleToggle} > <FontIcon color={'#707780'} className="material-icons">
              settings
        </FontIcon> </IconButton>
                }
              targetOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
            >
              <MenuItem key={1} primaryText="Change Password" leftIcon={<FontIcon color="#212121" className="material-icons">edit</FontIcon>} />
              <MenuItem key={2} primaryText="Logout" leftIcon={<FontIcon color="#212121" className="material-icons">power_settings_new</FontIcon>} containerElement={<Link to={'/logout'} />} />
              {/* <MenuItem key={3} primaryText="Price List" /> */}
            </IconMenu>
            {/* <IconButton onTouchTap={this.handleToggle} > <FontIcon color={'#707780'} className="material-icons">
              settings
        </FontIcon> </IconButton> */}
            {/* <Drawer className="rightDocker" docked={false} onRequestChange={(open) => this.setState({open})} width={200} openSecondary={true} open={this.state.open} > <AppBar title={strings.options.headerText} />
              <div style={style.main}>
                <br />
                {strings.options.themes}
                <Divider />


                <IconButton tooltip="Teal" style={style.saveButton} tooltipPosition="top-center" onClick={setMuiTheme.bind(this, '1')}>
                  <FontIcon color={teal500} className="material-icons" > style </FontIcon>
                </IconButton>
                <IconButton tooltip="Blue" style={style.saveButton} tooltipPosition="top-center" onClick={setMuiTheme.bind(this, '2')}>
                  <FontIcon color={blue600} className="material-icons" > style </FontIcon>
                </IconButton>
                <IconButton tooltip="Grey" style={style.saveButton} tooltipPosition="top-center" onClick={setMuiTheme.bind(this, '3')}>
                  <FontIcon color={grey500} className="material-icons" > style </FontIcon>
                </IconButton>

                <br />
                <br />
                <Divider />
                {strings.options.langauages}
                <Divider />
                <br />
                <FlatButton
                  label="English"
                  onClick={setLanguages.bind(this, 'en')}
                  icon={<FontIcon color={grey500} className="material-icons" > translate </FontIcon>}
                />

                <FlatButton
                  label="Chinese"
                  onClick={setLanguages.bind(this, 'ch')}
                  icon={<FontIcon className="material-icons" > translate </FontIcon>}
                />

                <FlatButton
                  label="Spanish"
                  onClick={setLanguages.bind(this, 'sp')}
                  icon={<FontIcon color={grey500} className="material-icons" > translate </FontIcon>}
                />
                <FlatButton
                  label="Indian"
                  onClick={setLanguages.bind(this, 'in')}
                  icon={<FontIcon className="material-icons" > translate </FontIcon>}
                />

                <br />
                <br />

                <Divider />
                {strings.options.layout}
                <Divider />


                <IconButton tooltip="Boxed Layout" style={style.saveButton} tooltipPosition="top-center" onClick={setOptions.bind(this, 'boxed')}>
                  <FontIcon color={pink300} className="material-icons" > view_carousel </FontIcon>
                </IconButton>


                <IconButton tooltip="Wide Layout" style={style.saveButton} tooltipPosition="top-center" onClick={setOptions.bind(this, 'wide')}>
                  <FontIcon className="material-icons" > view_array </FontIcon>
                </IconButton>

              </div>
            </Drawer> */}

          </CustomDiv>}
        />

      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
  setLanguages: PropTypes.func,
  setOptions: PropTypes.func,
  setMuiTheme: PropTypes.func,
};

export default Header;
