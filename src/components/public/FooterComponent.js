import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { Link } from 'react-router'

const mapIcon = <FontIcon className="fa fa-map"></FontIcon>;
const messageIcon = <FontIcon className="fa fa-comment"></FontIcon>;
const friendIcon = <FontIcon className="fa fa-list-ul"></FontIcon>;
const mineIcon = <FontIcon className="fa fa-user"></FontIcon>


require('styles/public/Footer.css');
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  //select = (index) => this.setState({selectedIndex: index});

  select(index){
    this.setState({selectedIndex: index});
    switch(index)
    {
      case 0:
        window.location.href="#/map";
        break;
      case 1:
        window.location.href="#/message/";
        break;
      case 2:
        window.location.href="#/friend";
        break;
      case 3:
        window.location.href="#/mine";
    }

  }

  render() {
    return (
      <div className="footer-component">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="地图"
                icon={mapIcon}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="消息"
                icon={messageIcon}
                onClick={() => this.select(1)}
              />
              <BottomNavigationItem
                label="好友"
                icon={friendIcon}
                onClick={() => this.select(2)}
              />
              <BottomNavigationItem
                label="我的"
                icon={mineIcon}
                onClick={() => this.select(3)}
              />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}


// Uncomment properties you need
// MineMenuComponent.propTypes = {};
// MineMenuComponent.defaultProps = {};

export default BottomNavigationExampleSimple;
