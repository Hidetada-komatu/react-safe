'use strict';

import React from 'react';
import ChatAction from './ChatActionComponent';
import ChatMessage from './ChatMessageComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';

require('styles/chat/ChatPage.css');

class ChatPageComponent extends React.Component {
  render() {
    return (
      <div className="chatpage-component">
        <Header/>
        <div className="pagecontent">
          <ChatMessage content="hello" isLeft='true' />
          <ChatMessage content="hello" isLeft="false"/>
          <ChatAction></ChatAction>
        </div>
      </div>
    );
  }
}

ChatPageComponent.displayName = 'ChatChatPageComponent';

// Uncomment properties you need
// ChatPageComponent.propTypes = {};
// ChatPageComponent.defaultProps = {};

export default ChatPageComponent;
