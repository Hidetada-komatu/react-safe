'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

require('styles/friend/FriendItem.css');

class FriendItemComponent extends React.Component {

  handleClick = () => {
    window.location.href="#/chat/";
  };

  render() {
    return (
      <div className="frienditem-component">
        <Card>
          <CardHeader
            title={this.props.name}
            avatar="images/yeoman.png"
            onClick={this.handleClick}
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
