'use strict';

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


require('styles/message/MessageItem.css');

class MessageItemComponent extends React.Component {
  render() {
    return (
      <div className="messageitem-component">
        <Card>
          <CardHeader
            title="这是一条消息"
            subtitle="小漠"
            avatar="images/jsa-128.jpg"
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
