import React from 'react';
import FloatingActionButton from  'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Header from './Header';
import Maptab from './BottomTab';

const style = {
  position: "fixed",
  bottom: "100px",
  right: "30px"
};

var SOSButton = React.createClass({
  render: function () {
    return (
     <FloatingActionButton style={style}>
       <ContentAdd/>
     </FloatingActionButton>
    );
  }
});

export default SOSButton
