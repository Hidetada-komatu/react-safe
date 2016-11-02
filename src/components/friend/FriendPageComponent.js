'use strict';

import React from 'react';
import FriendList from './FriendListComponent';
import Header from '../public/HeaderComponent';

require('styles/friend/FriendPage.css');

class FriendPageComponent extends React.Component {
  render() {
    return (
      <div className="friendpage-component">
        <Header/>
        <FriendList/>
      </div>
    );
  }
}

FriendPageComponent.displayName = 'FriendFriendPageComponent';

// Uncomment properties you need
// FriendPageComponent.propTypes = {};
// FriendPageComponent.defaultProps = {};

export default FriendPageComponent;