import React from 'react';
import ReactDOM from 'react-dom';
import { Vertical, Horizontal } from '../../dist/index';

const BuggedComponent = ({ children }) => <div className="box5">{children}</div>;
const NotBuggedComponent = ({ children, ...rest }) => <div className="box6" { ...rest }>{children}</div>;

ReactDOM.render(
  <Horizontal>
    <div className="box1">1</div>
    <div className="box2">2</div>
    <Vertical>
      <div className="box3">3</div>
      <Horizontal grow={1}>
        <div className="box4" align={'end'}>4</div>
        <BuggedComponent align={'end'}>5</BuggedComponent>
        <NotBuggedComponent align={'end'}>6</NotBuggedComponent>
      </Horizontal>
    </Vertical>
  </Horizontal>,
  document.getElementById('app')
);
