'use strict';

import React from 'react';
import FriendList from './FriendListComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('styles/friend/FriendPage.css');

class FriendPageComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="friendpage-component">
          <Header/>
          <FriendList/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

FriendPageComponent.displayName = 'FriendFriendPageComponent';

// Uncomment properties you need
// FriendPageComponent.propTypes = {};
// FriendPageComponent.defaultProps = {};

export default FriendPageComponent;
