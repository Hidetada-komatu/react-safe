'use strict';

import React from 'react';
import Message from './ChatMessageComponent';

require('styles/chat/ChatMessageList.css');

class ChatMessageListComponent extends React.Component {
  render() {
    return (
      <div className="chatmessagelist-component">

      </div>
    );
  }
}

ChatMessageListComponent.displayName = 'ChatChatMessageListComponent';

// Uncomment properties you need
// ChatMessageListComponent.propTypes = {};
// ChatMessageListComponent.defaultProps = {};

export default ChatMessageListComponent;
