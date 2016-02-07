import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Stack from '../src/stack';
import VerticalStack from '../src/vstack';

describe('VerticalStack', () => {
  it('should exist', () => { expect(VerticalStack).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<VerticalStack />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Stack:vertical->Flex', () => {
      const verticalStackWrapper = shallow(<VerticalStack />);
      const stackWrapper = verticalStackWrapper.find(Stack).shallow();
      const flexWrapper = stackWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'column');
    });
  });
});
