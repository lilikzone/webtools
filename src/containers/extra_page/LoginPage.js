import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import {Link} from 'react-router';
import ThemeDefault from '../../theme-default';
import FontIcon from 'material-ui/FontIcon';
import IconTextField from '../../components/iconedtextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Avatar from 'material-ui/Avatar';
import './loginPage.scss';
const LoginPage = () => {
  const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '5%',
      left: 0,
      right: 0,
      margin: 'auto',

    },

    footer: {
      border: 0,
    },
    controls: {
      marginTop: 50,
    },
    floatbutton: {
      marginRight: 10,
    },
    paper: {
      padding: 20,
      overflow: 'auto',
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10,
    },
    flatButton: {
      color: grey500,
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5,
      },
      labelStyle: {
        color: grey500,
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500,
      },
    },
    loginBtn: {
      float: 'right',
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13,
    },
    btnFacebook: {
      background: '#4f81e9',
    },
    btnGoogle: {
      background: '#e14441',
    },
    btnSpan: {
      marginLeft: 10,
    },
    title: {
      fontSize: '3em',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
    },
    avatar: {

      marginLeft: '33%',
    },
  };

  return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>

        <div style={styles.loginContainer}>
          <Paper className="card loginCard" zDepth={4}>
            <div className="card-header loginCard-header" data-background-color="red">
              <Avatar
                style={styles.avatar}
                src="./assets/images/avatar/3.jpg"
                size={100}
              />
              <h4 style={styles.title} className="title">Mare Admin</h4>

              <div style={styles.buttonsDiv}>

                <FloatingActionButton mini={true} style={styles.floatbutton}>
                  <FontIcon className="material-icons">
                    mic
                  </FontIcon>
                </FloatingActionButton>
                <FloatingActionButton mini={true} style={styles.floatbutton}>
                  <FontIcon className="material-icons">
                    vpn_key
                  </FontIcon>
                </FloatingActionButton>
                <FloatingActionButton mini={true} style={styles.floatbutton}>
                  <FontIcon className="material-icons">
                    security
                  </FontIcon>
                </FloatingActionButton>

              </div>
            </div>
            <div className="card-content">
              <form>
                <IconTextField hint="Name" label="Enter Your Name" icon="perm_identity" />
                <IconTextField hint="E-Mail" label="Enter Your Email" icon="email" />
                <IconTextField hint="Password" label="Enter Your Password" icon="https" />
                <Link to="./" className="forMobileButton">
                  <RaisedButton
                    fullWidth={true}
                    label="Login"
                    primary={true}
                    style={styles.loginBtn}
                  />
                  <br />
                  <br />
                </Link>

                <div style={styles.controls} className="displayNone">
                  <Checkbox
                    label="Remember me"
                    style={styles.checkRemember.style}
                    labelStyle={styles.checkRemember.labelStyle}
                    iconStyle={styles.checkRemember.iconStyle}
                  />

                  <Link to="./">
                    <RaisedButton label="Login" primary={true} style={styles.loginBtn} />
                  </Link>
                </div>
              </form>
            </div>
            <div className="card-footer displayNone" style={styles.footer}>
              <div style={styles.buttonsDiv}>
                <FlatButton
                  label="Register"
                  href="./"
                  style={styles.flatButton}
                  icon={<PersonAdd />}
                />

                <FlatButton
                  label="Forgot Password?"
                  href="./"
                  style={styles.flatButton}
                  icon={<Help />}
                />
              </div>

            </div>
          </Paper>

        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default LoginPage;
