import React from 'react';
import Flex from './flex';

export default ({ orientation, justifyContent, alignItems, alignContent, children }) =>
  <Flex wrap={false} {...{ orientation, justifyContent, alignItems, alignContent }}>{children}</Flex>;
