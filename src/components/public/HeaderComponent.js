'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

require('styles/public/Header.css');

class HeaderComponent extends React.Component {

  static defaultProps = {
    title: "Safe"
  };


  render() {
    return (
      <div className="header-component">
        <AppBar
          title={this.props.title}
          className="app-bar"
          showMenuIconButton={false}
        />
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
