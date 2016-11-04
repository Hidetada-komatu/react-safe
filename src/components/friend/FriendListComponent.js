'use strict';

import React from 'react';
import FriendItem from './FriendItemComponent';

require('styles/friend/FriendList.css');

class FriendListComponent extends React.Component {
  render() {
    return (
      <div className="friendlist-component">
        <FriendItem name="Tom"/>
      </div>
    );
  }
}

FriendListComponent.displayName = 'FriendFriendListComponent';

// Uncomment properties you need
// FriendListComponent.propTypes = {};
// FriendListComponent.defaultProps = {};

export default FriendListComponent;
