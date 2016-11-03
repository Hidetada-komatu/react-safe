'use strict';

import React from 'react';
import MessageItem from './MessageItemComponent';

require('styles/message/MessageList.css');

class MessageListComponent extends React.Component {
  render() {
    return (
      <div className="messagelist-component">
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
      </div>
    );
  }
}

MessageListComponent.displayName = 'MessageMessageListComponent';

// Uncomment properties you need
// MessageListComponent.propTypes = {};
// MessageListComponent.defaultProps = {};

export default MessageListComponent;
