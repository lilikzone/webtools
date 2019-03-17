import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
class VistorChecker extends Component {
  constructor() {
    super();
    this.state = {
      cookies: false,
      url: '/login',
    };
  }

  componentWillMount() {
    const cookiesToken = cookies.get('ssid');
    // console.log(cookiesToken);
    if (cookiesToken !== undefined && cookiesToken !== '') {
      this.setState({url: '/admin'});
    }
  }

  _setDelay() {
    setTimeout(() => {
      const url = this.state.url;
      return (<div style={{display: 'none'}}>{window.location.pathname = url}</div>);
    }, 200);
  }

  render() {
    const data = cookies.get('ssid');
    console.log(data);
    const redirect =  this._setDelay();

    return (redirect);
  }
}

export default VistorChecker;
