import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

var styles = {
  position: "fixed",
  width: "100%",
  bottom: "0",
};

var BottomTab = React.createClass({
  render: function () {
    return (
      <Tabs style={styles}>
        <Tab
          label="地图"
        />
        <Tab
          label="好友"
        />
        <Tab
          label="消息"
        />
        <Tab
          label="我的"
        />
      </Tabs>
    )
  }
});

export default BottomTab;
