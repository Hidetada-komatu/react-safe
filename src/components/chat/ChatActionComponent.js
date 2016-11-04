'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

require('styles/chat/ChatAction.css');

const style={
  Text: {
    width: '200px'
  }
};



class ChatActionComponent extends React.Component {


  handleClick = () => {

  };

  render() {
    return (
      <div className="chataction-component">
        <TextField
          style={style.Text}
          hintText="输入内容"
        />
        <FlatButton
          label="发送"
          primary={true}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

ChatActionComponent.displayName = 'ChatChatActionComponent';

// Uncomment properties you need
// ChatActionComponent.propTypes = {};
// ChatActionComponent.defaultProps = {};

export default ChatActionComponent;
