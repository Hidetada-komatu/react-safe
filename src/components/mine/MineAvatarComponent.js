'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


require('styles/mine/MineAvatar.css');

class MineAvatarComponent extends React.Component {
  render() {
    return (
      <div className="mineavatar-component">
        <Card>
          <CardHeader
            title="jsceoz"
            subtitle="武汉大学"
            avatar="images/yeoman.png"
          />
        </Card>
      </div>
    );
  }
}

MineAvatarComponent.displayName = 'MineMineAvatarComponent';

// Uncomment properties you need
// MineAvatarComponent.propTypes = {};
// MineAvatarComponent.defaultProps = {};

export default MineAvatarComponent;
