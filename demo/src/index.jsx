import React from 'react';
import ReactDOM from 'react-dom';
import { Vertical, Horizontal } from '../../dist/index';

ReactDOM.render(
  <Horizontal>
    <div className="item box1" />
    <div className="item box2" />
    <Vertical>
      <div className="item box3" />
      <div className="item box4" />
      <div className="item box5" />
    </Vertical>
  </Horizontal>,
  document.getElementById('app')
);
