import React from 'react';
import Wrap from './wrap';

export default ({ justifyContent, alignItems, alignContent, children, ...rest }) =>
  <Wrap {...{ justifyContent, alignItems, alignContent, ...rest }}>{children}</Wrap>;
