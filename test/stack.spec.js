import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Stack from '../src/stack';

describe('Stack', () => {
  it('should exist', () => { expect(Stack).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<Stack />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Flex', () => {
      const stackWrapper = shallow(<Stack />);
      const flexWrapper = stackWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.eql({
        alignContent: 'stretch',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
      });
    });

    it('should pass an orientation', () => {
      const stackWrapper = shallow(<Stack orientation={'vertical'} />);
      const flexWrapper = stackWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'column');
    });
  });
});
