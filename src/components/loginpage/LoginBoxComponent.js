'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

require('styles/loginpage/LoginBox.css');

class LoginBoxComponent extends React.Component {
  render() {
    return (
      <div className="loginbox-component">
        <TextField
          hintText="用户名"
          floatingLabelText="用户名"
        /><br />
        <TextField
          hintText="密码"
          floatingLabelText="密码"
          type="password"
        /><br />
        <FlatButton
          label="登录"
          primary={true}
        />
        <FlatButton
          label="注册"
          secondary={true}
        />
      </div>
    );
  }
}

LoginBoxComponent.displayName = 'LoginpageLoginBoxComponent';

// Uncomment properties you need
// LoginBoxComponent.propTypes = {};
// LoginBoxComponent.defaultProps = {};

export default LoginBoxComponent;
