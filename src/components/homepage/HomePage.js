import React from 'react';
import Header from './Header';
import MapTab from './BottomTab';
import SOSButton from './SOSButton';
import Map from './Map';
import FriendItem from '../friend/FriendItemComponent';

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <FriendItem/>
      </div>
    );
  }
});

export default HomePage;
