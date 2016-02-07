import React from 'react';
import Wrap from './wrap';

export default ({ justifyContent, alignItems, alignContent, children }) =>
  <Wrap {...{ justifyContent, alignItems, alignContent }}>{children}</Wrap>;
