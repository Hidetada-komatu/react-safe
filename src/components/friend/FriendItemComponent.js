'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

require('styles/friend/FriendItem.css');

class FriendItemComponent extends React.Component {
  render() {
    return (
      <div className="frienditem-component">
        <Card>
          <CardHeader
            title="小明"
            avatar="images/jsa-128.jpg"
          />
        </Card>
      </div>
    );
  }
}

FriendItemComponent.displayName = 'FriendFriendItemComponent';

// Uncomment properties you need
// FriendItemComponent.propTypes = {};
// FriendItemComponent.defaultProps = {};

export default FriendItemComponent;
