'use strict';

import React from 'react';
import MessageItem from './MessageItemComponent';

require('styles/message/MessageList.css');

class MessageListComponent extends React.Component {
  render() {
    return (
      <div className="messagelist-component">
        <MessageItem content="在吗" sender="Tom "/>
        <MessageItem content="你好" sender="Mike "/>
        <MessageItem content="你在哪里" sender="Robin"/>
      </div>
    );
  }
}

MessageListComponent.displayName = 'MessageMessageListComponent';

// Uncomment properties you need
// MessageListComponent.propTypes = {};
// MessageListComponent.defaultProps = {};

export default MessageListComponent;
