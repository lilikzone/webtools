import React, {PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import {white, blue600} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import MenuList from './menuListItem';
import {Scrollbars} from 'react-custom-scrollbars';
import Progress from 'antd/lib/progress';
import FontIcon from 'material-ui/FontIcon';
import muiThemeable from 'material-ui/styles/muiThemeable';


const LeftDrawer = (props) => {
  const {navDrawerOpen, style_} = props;

  const styles = {
    logoWrap: {
      cursor: 'pointer',
      marginTop: 0,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      display: 'inline-block',
      background: blue600,
    },
    logo: {
      width: '70%',

    },
    menuItem: {
      color: white,
      fontSize: 12,
    },
    avatar: {
      div: {
        padding: '15px 5px 5px 5px',
        background: props.muiTheme.appBar.color,
        height: 155,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        flexDirection: 'column',
        lineHeight: '24px',
      },

      span: {
        padding: '3px 0',
        display: 'block',
        color: props.muiTheme.palette.alternateTextColor,
        fontWeight: 400,
        fontSize: '1.2em',
        margin: 0,
      },
      mareText: {
        color: props.muiTheme.palette.alternateTextColor,
        top: -5,

      },
      icon: {
        borderRadius: '50px',
        width: 80,
        height: 80,
        border: 'solid',
        borderColor: white,
      },
    },
  };

  return (
    <Drawer docked={true} containerClassName="sideBar"  containerStyle={style_} open={navDrawerOpen}>
      <div style={styles.logoWrap}>
        <img style={styles.logo} src="/assets/images/xl-logo.png" />
        {/* <span style={styles.mareText} className="mareText">MARE ADMIN</span> */}
      </div>
      {/* <Paper style={styles.avatar.div} >


        <img style={styles.avatar.icon}  src="./assets/images/avatar/9.jpg" />
        <p style={styles.avatar.span}>{props.username}</p>
        <p style={styles.avatar.span}><FontIcon className="material-icons mapicon" color={props.muiTheme.palette.alternateTextColor}> place </FontIcon> Ohio, Ca</p>

      </Paper> */}
      <div>
        <Scrollbars
          style={{
            height: 1200,
          }}
          autoHide={true}
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <MenuList />
        </Scrollbars>
      </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  style_: PropTypes.object,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default muiThemeable()(LeftDrawer);
