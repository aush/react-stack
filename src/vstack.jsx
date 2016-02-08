import React from 'react';
import Stack from './stack';

export default ({ justifyContent, alignItems, alignContent, children, ...rest }) =>
  <Stack orientation={'vertical'} {...{ justifyContent, alignItems, alignContent, ...rest }}>{children}</Stack>;
