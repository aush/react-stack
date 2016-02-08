import React from 'react';
import Prefixer from 'inline-style-prefixer';
import isFinite from 'lodash.isfinite';
import includes from 'lodash.includes';

export default ({ orientation, wrap, justifyContent, alignItems, alignContent, prefixer = new Prefixer(), children }) => {
  const flexContainerStyle = {
    alignContent: includes(['flex-start', 'flex-end', 'center', 'space-between', 'space-around'], alignContent) ? alignContent : 'stretch',
    alignItems: includes(['flex-start', 'flex-end', 'center', 'baseline'], alignItems) ? alignItems : 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: includes(['flex-end', 'center', 'space-between', 'space-around'], justifyContent) ? justifyContent : 'flex-start',
  };

  return (
    <div style={prefixer.prefix(flexContainerStyle)}>
    {
      React.Children.map(children, (child, i) => {
        const flexItemStyle = {
          flexGrow: isFinite(child.props.grow) ? child.props.grow : 0,
          flexShrink: isFinite(child.props.shrink) ? child.props.shrink : 1,
          flexBasis: isFinite(child.props.basis) ? child.props.basis : 'auto',
          alignSelf: includes(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'], child.props.align) ? child.props.align : 'auto',
        };
        return React.cloneElement(child, { key: i, style: prefixer.prefix(flexItemStyle) });
      })
    }
    </div>
  );
};
