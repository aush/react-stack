import React from 'react';
import Prefixer from 'inline-style-prefixer';
import isFinite from 'lodash.isfinite';
import includes from 'lodash.includes';

export default ({ orientation, wrap, justifyContent, alignItems, alignContent, style, prefixer = new Prefixer(), children, ...rest }) => {
  const flexContainerStyle = {
    alignContent: includes(['start', 'end'], alignContent) ?
      'flex-' + alignContent :
      includes(['center', 'space-between', 'space-around'], alignContent) ? alignContent : 'stretch',
    alignItems: includes(['start', 'end'], alignItems) ?
      'flex-' + alignItems :
      includes(['center', 'baseline'], alignItems) ? alignItems : 'stretch',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justifyContent === 'end' ?
      'flex-' + justifyContent :
      includes(['center', 'space-between', 'space-around'], justifyContent) ? justifyContent : 'flex-start',
  };

  return (
    <div style={{ ...prefixer.prefix(flexContainerStyle), ...style }} {...rest}>
    {
      React.Children.map(children, (child, i) => {
        const flexItemStyle = {
          flexGrow: isFinite(child.props.grow) ? child.props.grow : 0,
          flexShrink: isFinite(child.props.shrink) ? child.props.shrink : 1,
          flexBasis: isFinite(child.props.basis) ? child.props.basis : 'auto',
          alignSelf: includes(['start', 'end'], child.props.align) ?
            'flex-' + child.props.align :
            includes(['center', 'baseline', 'stretch'], child.props.align) ? child.props.align : 'auto',
        };
        return React.cloneElement(child, { key: i, style: { ...prefixer.prefix(flexItemStyle), ...child.props.style } });
      })
    }
    </div>
  );
};
