'use strict';

import React from 'react';
import ChatAction from './ChatActionComponent';
import ChatMessage from './ChatMessageComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

require('styles/chat/ChatPage.css');
require('styles/chat/ChatAction.css');

const style={
  Text: {
    width: '200px'
  }
};

class ChatPageComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      messageList:[
        {content:"在吗", align:"chipl"},
      ],
      value:''
    }
  }

  handleChange = (e) => {
    this.setState({value:e.target.value});
  };

  addMessage = () => {
    let m = this.state.messageList;
    m.push({content:this.state.value, align:"chipr"});
    this.setState({
      messageList:m,
      value:''
    });
    console.log(m);
  };


  render() {

    let value = this.state.value;
    let m = this.state.messageList;

    return (
      <div className="chatpage-component">
        <Header title="Tom" />
        <div className="pagecontent">
          {
            m.map((m) => {
              return <ChatMessage
                content={m.content}
                align={m.align}
              />
            })

          }
          <div className="chataction-component">
            <TextField
              style={style.Text}
              hintText="输入内容"
              value={value}
              onChange={this.handleChange}
            />
            <FlatButton
              label="发送"
              primary={true}
              onClick={this.addMessage}
            />
          </div>
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
