import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Stack from '../src/stack';
import HorizontalStack from '../src/hstack';

describe('HorizontalStack', () => {
  it('should exist', () => { expect(HorizontalStack).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<HorizontalStack />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Stack:vertical->Flex', () => {
      const verticalStackWrapper = shallow(<HorizontalStack />);
      const stackWrapper = verticalStackWrapper.find(Stack).shallow();
      const flexWrapper = stackWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'row');
    });
  });
});
