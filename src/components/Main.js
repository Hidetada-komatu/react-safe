require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './homepage/HomePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginBox from './loginpage/LoginBoxComponent';

var AppComponent = React.createClass({
  render() {
    return (
      <div className="sss">
        <MuiThemeProvider>
          <LoginBox/>
        </MuiThemeProvider>
       </div>
    );
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
