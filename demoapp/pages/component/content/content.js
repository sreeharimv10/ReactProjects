import React from 'react';
import {ContentWrap} from './contentStyles';

function Content() {
  return (
    <ContentWrap>
        <h3>Hello</h3>
        <div className="cardbox">
            <div className="cardone"/>
            <div className="cardtwo"/>
        </div>
    </ContentWrap>
  );
}

export default Content