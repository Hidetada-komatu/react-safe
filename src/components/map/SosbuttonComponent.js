'use strict';

import React from 'react';
import FloatingActionButton from  'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

require('styles/map/Sosbutton.css');

const style = {
  position: "fixed",
  bottom: "100px",
  right: "30px"
};

class SosbuttonComponent extends React.Component {
  render() {
    return (
      <div className="sosbutton-component">
        <FloatingActionButton style={style}>
          <ContentAdd/>
        </FloatingActionButton>
      </div>
    );
  }
}

SosbuttonComponent.displayName = 'MapSOSButtonComponent';

// Uncomment properties you need
// SosbuttonComponent.propTypes = {};
// SosbuttonComponent.defaultProps = {};

export default SosbuttonComponent;
