import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Wrap from '../src/wrap';
import HorizontalWrap from '../src/hwrap';

describe('HorizontalWrap', () => {
  it('should exist', () => { expect(HorizontalWrap).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<HorizontalWrap />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Wrap:vertical->Flex', () => {
      const verticalWrapWrapper = shallow(<HorizontalWrap />);
      const wrapWrapper = verticalWrapWrapper.find(Wrap).shallow();
      const flexWrapper = wrapWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'row');
    });
  });
});
