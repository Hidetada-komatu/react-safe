'use strict';

import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

require('styles/loginpage/LoginBox.css');

class LoginBoxComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '123',
      password: '123',
      opens: false,
      openf: false
    };
  }


  changName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  changPass = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  register = (e) => {
    console.log(this.state);
    var id=1;
    $.ajax({
      url : 'http://127.0.0.1:7777/user/',
      type : 'POST',
      dataType:"json",
      async:false,
      contentType:"application/json;charset=utf-8",
      data: JSON.stringify({
          name: this.state.name,
        password: this.state.password
      }),
    }).done(function (data) {
      id = data.id;
      console.log(id);
      console.log(data);
    });
    console.log(id);
    this.setState({id:id});
    //window.location.href="#/map/";
  };

  login = (e) => {
    // var id
    // $.ajax({
    //   url : 'http://127.0.0.1:7777/user/?name='+this.state.name+'&password='+this.state.password,
    //   type : 'GET',
    //   async:false,
    // }).done(function (data) {
    //   if(typeof data[0] == "undefined"){
    //     id = 0;
    //   }
    //   else {
    //     id = data[0].id;
    //   }
    // });
    // this.setState({
    //   id: id
    // });
    //
    // if(id==0){
    //   this.setState({
    //     openf: true,
    //   });
    // }
    // else {
      this.setState({
        opens: true,
      });
      setTimeout("toIndex.toIndex()",1000);
    //}

    //setTimeout("window.location.href='#/map/'",1000);
    //window.location.href="#/map/";
  };

  handleRequestClose = () => {
    this.setState({
      opens: false,
      openf: false
    });
  };

  render() {
    return (
      <div className="loginbox-component">
        <TextField
          hintText="用户名"
          floatingLabelText="用户名"
          value={this.state.name}
          onChange={this.changName}
        /><br />
        <TextField
          hintText="密码"
          floatingLabelText="密码"
          type="password"
          value={this.state.password}
          onChange={this.changPass}
        /><br />
        <FlatButton
          label="登录"
          primary={true}
          onClick={this.login}
        />
        <FlatButton
          label="注册"
          secondary={true}
          onClick={this.register}
        />
        <Snackbar
          open={this.state.opens}
          message="登录成功"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        <Snackbar
          open={this.state.openf}
          message="登录失败"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
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
