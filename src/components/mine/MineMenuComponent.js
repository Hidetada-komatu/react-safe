'use strict';

import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

require('styles/mine/MineMenu.css');

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

class MineMenuComponent extends React.Component {
  render() {
    return (
      <div className="minemenu-component">
        <Paper style="{style}">
          <Menu>
            <MenuItem primaryText="天气" />
            <Divider/>
            <MenuItem primaryText="围栏设置" />
            <MenuItem primaryText="报警设置" />
            <Divider/>
            <MenuItem primaryText="校车预约" />
            <MenuItem primaryText="安全出行" />
          </Menu>
        </Paper>
      </div>
    );
  }
}

MineMenuComponent.displayName = 'MineMineMenuComponent';

// Uncomment properties you need
// MineMenuComponent.propTypes = {};
// MineMenuComponent.defaultProps = {};

export default MineMenuComponent;
