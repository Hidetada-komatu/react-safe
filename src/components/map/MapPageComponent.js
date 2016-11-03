'use strict';

import React from 'react';
import MapBg from './MapBgComponent';
import Header from '../public/HeaderComponent';
import Footer from '../public/FooterComponent';
import SOSButton from './SosbuttonComponent';
import MapTab from './MapTabComponent';


require('styles/map/MapPage.css');

class MapPageComponent extends React.Component {
  render() {
    return (
      <div className="mappage-component">
        <div className="page-content">
          <MapTab/>
          <MapBg/>
        </div>
        <SOSButton/>
      </div>
    );
  }
}

MapPageComponent.displayName = 'MapMapPageComponent';

// Uncomment properties you need
// MapPageComponent.propTypes = {};
// MapPageComponent.defaultProps = {};

export default MapPageComponent;
