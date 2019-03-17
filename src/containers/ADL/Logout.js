import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }
  componentWillMount() {
    cookies.remove('ssid');
    cookies.remove('npaccess');
    cookies.remove('rdata');

    setTimeout(() => {
      this.setState({redirect: true});
    }, 3000);
  }
  render() {
    const redirect = this.state.redirect;
    if (redirect) {
      return (
        <div style={{display: 'none'}} >
          {window.location.pathname = '/login'}
        </div>
      );
    } else {
      return (
        <div>
          {'Please Wait ...'}
        </div>
      );
    }
  }
}

export default Logout;
