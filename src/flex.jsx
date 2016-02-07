import React from 'react';
import Prefixer from 'inline-style-prefixer';
import isFinite from 'lodash.isfinite';

export default ({ orientation, wrap, justifyContent, alignItems, alignContent, prefixer = new Prefixer(), children }) => {
  const flexContainerStyle = {
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'].includes(alignContent) ? alignContent : 'stretch',
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline'].includes(alignItems) ? alignItems : 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: ['flex-end', 'center', 'space-between', 'space-around'].includes(justifyContent) ? justifyContent : 'flex-start',
  };

  return (
    <div style={prefixer.prefix(flexContainerStyle)}>
    {
      React.Children.map(children, (child, i) => {
        const flexItemStyle = {
          flexGrow: isFinite(child.props.grow) ? child.props.grow : 0,
          flexShrink: isFinite(child.props.shrink) ? child.props.shrink : 1,
          flexBasis: isFinite(child.props.basis) ? child.props.basis : 'auto',
          alignSelf: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'].includes(child.props.align) ? child.props.align : 'auto',
        };
        return React.cloneElement(child, { key: i, style: prefixer.prefix(flexItemStyle) });
      })
    }
    </div>
  );
};
