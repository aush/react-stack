import React from 'react';
import Wrap from './wrap';

export default ({ justifyContent, alignItems, alignContent, children }) =>
  <Wrap orientation={'vertical'} {...{ justifyContent, alignItems, alignContent }}>{children}</Wrap>;
