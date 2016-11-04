'use strict';

import React from 'react';

require('styles/map/MapBg.css');


class MapBgComponent extends React.Component {

  componentDidMount(){
    this.componentDidUpdate();
  }

  componentDidUpdate(){

    var map = new GMaps({
      el: '#map',
      lat: 30.541093,
      lng: 114.360734
    });

    map.drawCircle({
      lat: 30.541093,
      lng: 114.360,
      radius: 100,
      fillColor: "#ff0000",
      fillOpacity: 0.2,
      strokeColor: "#ff0000",
      strokeOpacity: 0.54
    });

    // map.drawCircle({
    //   lat: 30.53933,
    //   lng: 114.350,
    //   radius: 100,
    //   fillColor: "#ff0000",
    //   fillOpacity: 0.2,
    //   strokeColor: "#ff0000",
    //   strokeOpacity: 0.54
    // });
    //
    // map.addMarker({
    //   lat: 30.541093,
    //   lng: 114.360
    // });
    // map.addMarker({
    //   lat: 30.451093,
    //   lng: 114.360
    // });

    // map.drawPolyline({
    //   path: [[30.541093,114.360],[30.5412,114.361]]
    // })
  }

  render(){

    return (
      <div className="map-holder" style={{height: '100%'}}>
        <div id="map" style={{height: '100%'}}></div>
      </div>
    );
  }
}

MapBgComponent.displayName = 'MapMapBgComponent';

// Uncomment properties you need
// MapBgComponent.propTypes = {};
// MapBgComponent.defaultProps = {};

export default MapBgComponent;
