import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import styles from '../../../styles';
import 'react-table-components/styles/styles.css';
import {Tabs, Tab} from 'material-ui/Tabs';
import {MaterialContainer} from 'react-table-components';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Snackbar from 'material-ui/Snackbar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Card from 'material-ui/Card';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

export default class changePassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      newPasswordConfirmation: '',
      errorText: '',
      openWarning: false,
      redirect: false,
      warningMessage: '',
      titleWarning: '',
    };
  }

  componentWillMount() {
    const cookiesData = cookies.get('ssid');
    if (cookiesData !== undefined && cookiesData !== '') {
      this.setState({cookies: cookiesData});
      const json = (response) => response.json();
      fetch(`https://source.adlsandbox.com/api/admin/check?token=${cookiesData}`, {
        method: 'get',
        type: 'cors',
      })
      .then(json)
      .then((respons) => {
        console.log(respons);
        this.setState({userId: respons.user.id});
      }).catch((error) => {
        console.log(`error: ${error}`);
      });
    }
  }


  _updatePasswordAPI() {
    const cookies = this.state.cookies;
    const userID = this.state.userId;
    const password = this.state.newPassword;
    fetch(`https://source.adlsandbox.com/api/admin/update-password/${userID}?new_password=${password}`, {
      method: 'PUT',
      type: 'cors',
      headers: {
        'Authorization': `Bearer ${cookies}`,
        'Content-Type': 'application/json',
      },
    })
        .then((response) => response.json())
        .then((respons) => {
          console.log(respons);
          this.setState({
            openWarning: true,
            titleWarning: 'Success',
            warningMessage: respons.message,
          });

          setTimeout(() => {
            this.setState({redirect: true});
          }, 2000);
        }).catch((error) => {
          console.log(`error: ${error}`);
          this.setState({
            openWarning: true,
            titleWarning: 'Error',
            warningMessage: `${error}`,
          });
        });
  }

  _handleUpdatePassword = () => {
    const newPassword = this.state.newPassword;
    const newPasswordConfirmation = this.state.newPasswordConfirmation;
    if (newPassword !== newPasswordConfirmation) {
      this.setState({errorText: 'New password not match'});
    } else {
      this._updatePasswordAPI();
    }
  }

  handleClose() {
    this.setState({openWarning: false});
  }

  render() {
    let actions = [
      <RaisedButton
        label="OK" primary={true}
        onTouchTap={() => this.handleClose()}
      />];
    console.log(this.state.redirect);
    return (
      <div>
        <Row>
          <Paper style={styles.paper}>
            <Card style={{minHeight: 400, minWidth: '100%'}}>
              <Col lg={8} md={8} sm={12}>
                <Dialog
                  title={this.state.titleWarning}
                  actions={actions}
                  modal={true}
                  open={this.state.openWarning}
                  onRequestClose={() => {
                    this.handleClose();
                  }}
                >
                  {this.state.warningMessage}
                </Dialog>
                {this.state.redirect ?
                  <div style={{display: 'none'}}>
                    {window.location.pathname = '/login'}
                  </div> :
                ''}
                <form>
                  <h3>Change Password</h3>
                  <TextField
                    floatingLabelFixed={true}
                    fullWidth={true}
                    floatingLabelText="New Password"
                    onChange={(e, input) => {
                      this.setState({newPassword: input});
                    }}
                    type="password"
                  />
                  <TextField
                    floatingLabelFixed={true}
                    fullWidth={true}
                    type="password"
                    floatingLabelText="New Password Confirmation"
                    onChange={(e, input) => {
                      this.setState({
                        newPasswordConfirmation: input,
                        errorText: '',
                      });
                    }}
                    errorText={this.state.errorText}
                  />
                  <br />
                  <br />
                  <RaisedButton
                    label="save"
                    primary={true}
                    onTouchTap={this._handleUpdatePassword}
                  />
                </form>
              </Col>
            </Card>
          </Paper>
        </Row>
      </div>
    );
  }
}
