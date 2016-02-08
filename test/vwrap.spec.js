import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Wrap from '../src/wrap';
import VerticalWrap from '../src/vwrap';

describe('VerticalWrap', () => {
  it('should exist', () => { expect(VerticalWrap).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<VerticalWrap />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Wrap:vertical->Flex', () => {
      const horizontalWrapWrapper = shallow(<VerticalWrap />);
      const wrapWrapper = horizontalWrapWrapper.find(Wrap).shallow();
      const flexWrapper = wrapWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'column');
    });
  });
});
