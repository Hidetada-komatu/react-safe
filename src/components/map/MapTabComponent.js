'use strict';

import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const TabsExampleSimple = () => (

  <Tabs>
    <Tab label="危险区" value="one">
    </Tab>
    <Tab label="我的围栏" value="two">
    </Tab>
    <Tab label="轨迹" value="three">
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;
