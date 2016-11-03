'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

require('styles/chat/ChatAction.css');

const style={
  Text: {
    width: '40%'
  }
};


class ChatActionComponent extends React.Component {
  render() {
    return (
      <div className="chataction-component">
        <TextField
          style={style.Text}
          hintText="输入内容"
        />
        <FlatButton label="发送" primary={true}/>
        <FlatButton label="共享位置" secondary={true} />
      </div>
    );
  }
}

ChatActionComponent.displayName = 'ChatChatActionComponent';

// Uncomment properties you need
// ChatActionComponent.propTypes = {};
// ChatActionComponent.defaultProps = {};

export default ChatActionComponent;