'use strict';

import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

require('styles/public/Footer.css');

class FooterComponent extends React.Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div className="footer-component">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Recents"
              onTouchTap={() => this.select(0)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

FooterComponent.displayName = 'PublicFooterComponent';

// Uncomment properties you need
// FooterComponent.propTypes = {};
// FooterComponent.defaultProps = {};

export default FooterComponent;
