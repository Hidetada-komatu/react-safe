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
      <MuiThemeProvider>
        <div className="messagepage-component">
          <Header/>
          <MessageList/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

MessagePageComponent.displayName = 'MessageMessagePageComponent';

// Uncomment properties you need
// MessagePageComponent.propTypes = {};
// MessagePageComponent.defaultProps = {};

export default MessagePageComponent;
