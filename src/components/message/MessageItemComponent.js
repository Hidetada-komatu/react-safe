'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


require('styles/message/MessageItem.css');

class MessageItemComponent extends React.Component {

  handleClick = () => {
    window.location.href="#/chat/";
  };

  render() {
    return (
      <div className="messageitem-component">
        <Card>
          <CardHeader
            title={this.props.content}
            subtitle={this.props.sender}
            avatar="images/yeoman.png"
            onClick={this.handleClick}
          />
        </Card>
      </div>
    );
  }
}

MessageItemComponent.displayName = 'MessageMessageItemComponent';

// Uncomment properties you need
// MessageItemComponent.propTypes = {};
// MessageItemComponent.defaultProps = {};

export default MessageItemComponent;
