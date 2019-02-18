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
import {Row} from 'react-flexbox-grid';
import Subheader from 'material-ui/Subheader';
import './loginPage.scss';
const LoginPage = () => {
  const styles = {
    loginContainer: {
      minHeight: 700,
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 'auto',
      backgroundColor: 'rgba(0, 9, 22, 0.8)',
      color: '#fff',
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
      fontSize: '2em',
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
      <div className="login-background">
        <Row>
          <div className="card-content" style={styles.loginContainer}>
            <h3 style={styles.title}>SIGN IN</h3>
            <form>
              <IconTextField hint="Username" label="Username" name="username" icon="perm_identity" floatingLabelStyle={{color: 'white'}} style={{color: 'white'}} type="text" />
              <IconTextField hint="Password" label="Password" name="password" icon="https" floatingLabelStyle={{color: 'white'}} style={{color: 'white'}} type="password" />
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

                <Link to="/admin">
                  <RaisedButton label="Login" primary={true} style={styles.loginBtn} />
                </Link>
              </div>
            </form>
          </div>
        </Row>
      </div>
    </MuiThemeProvider>
  );
};

export default LoginPage;
