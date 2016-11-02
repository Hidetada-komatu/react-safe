import React from 'react';
import AppBar from 'material-ui/AppBar';

var Header = React.createClass({
  render: function () {
    return (
        <AppBar
          title="Safe"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
    );
  }
});

export default Header;
