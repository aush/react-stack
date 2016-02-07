import React from 'react';
import Stack from './stack';

export default ({ justifyContent, alignItems, alignContent, children }) =>
  <Stack {...{ justifyContent, alignItems, alignContent }}>{children}</Stack>;
