'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';

require('styles/public/Header.css');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <AppBar title="Safe" className="app-bar"/>
        <div className="header-placeholder"></div>
      </div>
    );
  }
}

HeaderComponent.displayName = 'PublicHeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
