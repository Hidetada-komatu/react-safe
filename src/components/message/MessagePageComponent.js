'use strict';

import React from 'react';
import MessageList from './MessageListComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('styles/message/MessagePage.css');

class MessagePageComponent extends React.Component {
  render() {
    return (
        <div className="messagepage-component">
          <Header title="消息"/>
          <MessageList/>
        </div>
    );
  }
}

MessagePageComponent.displayName = 'MessageMessagePageComponent';

// Uncomment properties you need
// MessagePageComponent.propTypes = {};
// MessagePageComponent.defaultProps = {};

export default MessagePageComponent;
