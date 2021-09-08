import React from 'react';

import Header from './component/header/header';
import Content from './component/content/content';

import {AppWrap} from './appStyles.js';

function MyApp() {
  return (
    <AppWrap>
        <Header/>
        <Content/>
    </AppWrap>
  );
}

export default MyApp