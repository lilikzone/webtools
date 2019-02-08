import React from 'react';
import './lockPage.scss';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {lightWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';


function go() {
  browserHistory.push('dashboard');
}

const lockingPage = () => {
  const styles = {
    errorStyle: {
      color: lightWhite,
    },
    underlineStyle: {
      borderColor: lightWhite,
    },
    floatingLabelStyle: {
      color: lightWhite,
    },
    floatingLabelFocusStyle: {
      color: lightWhite,
    },
    button: {},
    img: {
      height: '180px',
      width: '180px',
      'object-fit': 'cover',
      borderRadius: '50%',
      marginLeft: '30%',
    },
    title: {
      fontSize: '3em',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 10,
      color: 'white',
    }, lockPage: {
      backgroundImage: 'url(./assets/images/9.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#403F4C',
      backgroundSize: 'cover',

    }, lockWrap: {
      backgroundImage: 'url(./assets/images/blurbg.png)',
      backgroundRepeat: 'repeat',
      backgroundColor: 'transparent!important',
    },
  };
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="lockPage" style={styles.lockPage}>
        <div className="blurbg">
          <Paper zDepth={5} className="lockWrap" style={styles.lockWrap}>
            <h4 style={styles.title} className="title">Mare Admin</h4>
            <br />
            <img className="profileImg" src="./assets/images/people/4.jpg"  />

            <TextField
              type="password"
              fullWidth={true}
              floatingLabelText="Enter Your Password"
              floatingLabelStyle={styles.floatingLabelFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <RaisedButton
              label="LOGIN"
              onClick={go}
              style={styles.button}
              fullWidth={true}
              primary={true}
              icon={<FontIcon className="material-icons lockIcon" > https </FontIcon>}
            />

          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default lockingPage;
