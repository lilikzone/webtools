import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends Component {
  componentWillMount() {
    cookies.remove('ssid');
    cookies.remove('npaccess');
    cookies.remove('rdata');
  }
  render() {
    return (
      <React.Fragment>
        {window.location.pathname = '/login'}
      </React.Fragment>
    );
  }
}

export default Logout;
