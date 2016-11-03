require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './homepage/HomePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chat from './chat/ChatPageComponent';
import MapPage from './map/MapPageComponent';
import Friend from './friend/FriendPageComponent';

var AppComponent = React.createClass({
  render() {
    return (
      <div className="sss">
        <MuiThemeProvider>
         <MapPage/>
        </MuiThemeProvider>
       </div>
    );
  }
});

AppComponent.defaultProps = {
};

export default AppComponent;
