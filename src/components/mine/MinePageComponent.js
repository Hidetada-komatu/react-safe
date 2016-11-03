'use strict';

import React from 'react';
import MineAvatar from './MineAvatarComponent';
import MineMenu from './MineMenuComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('styles/mine/MinePage.css');

class MinePageComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="minepage-component">
          <Header/>
          <MineAvatar/>
          <MineMenu/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

MinePageComponent.displayName = 'MineMinePageComponent';

// Uncomment properties you need
// MinePageComponent.propTypes = {};
// MinePageComponent.defaultProps = {};

export default MinePageComponent;
