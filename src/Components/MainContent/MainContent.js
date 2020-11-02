import { Hidden } from '@material-ui/core';
import React from 'react';

import Slider from '../Slider/Slider';
import MainCategoryCards from './MainCategoryCards/MainCategoryCards';

function MainContent() {
  return (
    <React.Fragment>
      <Hidden smDown>
        <Slider />
      </Hidden>

      <MainCategoryCards />
    </React.Fragment>
  );
}

export default MainContent;
