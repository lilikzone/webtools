import React from 'react';
import './404.scss';
import {browserHistory} from 'react-router';

function go() {
  browserHistory.push('/');
}


const NotFoundPage = () => {
  return (
    <div className="bodyWrap">

      <h1>404</h1>
      <p>Ooooops! Page Not Found</p>
      <br />
      <a onClick={go} className="gobtn">Go Back to Dashboard</a>
    </div>
  );
};

export default NotFoundPage;
