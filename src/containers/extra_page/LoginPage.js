import React, {Component} from 'react';
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
import TextField from 'material-ui/TextField';
import './loginPage.scss';
import Snackbar from 'material-ui/Snackbar';
import Cookies from 'universal-cookie';

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


const cookies = new Cookies();

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      validation: {
        username: false,
        password: false,
      },
      alert: false,
      alertMessage: '',
      token: '',
    };
  }
  _handleChange = (input, value) => {
    const target = input.target;
    const valid = value === '';

    this.setState({
      validation: {...this.state.validation, [target.name]: valid},
    });

    this.setState({
      [target.name]: value,
    });
  }

  _handleClick = () => {
    if (this.state.username === '' || this.state.password === '') {
      this.setState({alert: true, alertMessage: 'Username/password is Invalid'});
    }

    if (!this.state.validation.username && !this.state.validation.password) {
      const username = this.state.username;
      const password = this.state.password;
      const json = (response) => response.json();
      fetch(`http://13.229.149.228:8081/api/admin/login?username=${username}&password=${password}`, {
        method: 'post',
        type: 'cors',
      })
      .then(json)
      .then((respons) => {
        console.log(respons);
        cookies.set('ssid', respons.token, {maxAge: 86400});
        this.setState({token: respons.token});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }
  render() {
    const validation = this.state.validation;
    const token = this.state.token;
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div className="login-background">
          <Row>
            <div className="card-content" style={styles.loginContainer}>
              <h3 style={styles.title}>SIGN IN</h3>
              <form>
                {token !== '' ? <div style={{display: 'none'}} >{window.location.pathname = '/admin' }</div> : ''}
                <div className="input-group">
                  <span className="input-group-icon">
                    <i className="material-icons">perm_identity</i>
                  </span>
                  <div className="input-group-text">
                    <TextField
                      hintText="Username"
                      floatingLabelText="Username"
                      className="form-control" fullWidth={true}
                      name="username"
                      floatingLabelStyle={{color: 'white'}}
                      style={{color: 'white'}}
                      type="text"
                      onChange={this._handleChange}
                      errorText={validation.username}
                    />

                  </div>
                </div>
                <div className="input-group">
                  <span className="input-group-icon">
                    <i className="material-icons">https</i>
                  </span>
                  <div className="input-group-text">
                    <TextField
                      hintText="Password"
                      floatingLabelText="Password"
                      className="form-control" fullWidth={true}
                      name="password"
                      floatingLabelStyle={{color: 'white'}}
                      style={{color: 'white'}}
                      type="password"
                      onChange={this._handleChange}
                      errorText={validation.password}
                    />

                  </div>
                </div>
                {/* <Link to="./" className="forMobileButton"> */}
                <RaisedButton
                  fullWidth={true}
                  label="Login"
                  primary={true}
                  style={styles.loginBtn}
                  onTouchTap={this._handleClick}
                />
                <br />
                <br />
                {/* </Link> */}

                <div style={styles.controls} className="displayNone">

                  {/* <Link to="/admin"> */}
                  <RaisedButton label="Login" onTouchTap={this._handleClick} primary={true} style={styles.loginBtn} />
                  {/* </Link> */}
                  <Snackbar
                    open={this.state.alert}
                    message={this.state.alertMessage}
                    autoHideDuration={2000}
                    bodyStyle={{backgroundColor: 'teal'}}
                  />
                </div>
              </form>
            </div>
          </Row>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default LoginPage;
