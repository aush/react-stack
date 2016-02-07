import React from 'react';
import Stack from './stack';

export default ({ justifyContent, alignItems, alignContent, children }) =>
  <Stack orientation={'vertical'} {...{ justifyContent, alignItems, alignContent }}>{children}</Stack>;
