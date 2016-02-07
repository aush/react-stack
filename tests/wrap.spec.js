import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Flex from '../src/flex';
import Wrap from '../src/wrap';

describe('Wrap', () => {
  it('should exist', () => { expect(Wrap).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<Wrap />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    it('should default to Flex', () => {
      const wrapWrapper = shallow(<Wrap />);
      const flexWrapper = wrapWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.eql({
        alignContent: 'stretch',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      });
    });

    it('should pass an orientation', () => {
      const wrapWrapper = shallow(<Wrap orientation={'vertical'} />);
      const flexWrapper = wrapWrapper.find(Flex).shallow();

      expect(flexWrapper.prop('style')).to.have.property('flexDirection', 'column');
    });
  });
});
