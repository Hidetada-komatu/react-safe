'use strict';

import React from 'react';
import MineAvatar from './MineAvatarComponent';
import MineMenu from './MineMenuComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('styles/mine/MinePage.css');

class MinePageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    }
  }

  componentWillMount() {
    console.log('dasdasdasdas');
  }

  render() {
    return (
        <div className="minepage-component">
          <Header/>
          <MineAvatar/>
          <h1>{this.props.params.userId}</h1>
          <MineMenu/>
        </div>
    );
  }
}

MinePageComponent.displayName = 'MineMinePageComponent';

// Uncomment properties you need
// MinePageComponent.propTypes = {};
// MinePageComponent.defaultProps = {};

export default MinePageComponent;
