import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Prefixer from 'inline-style-prefixer';
import Flex from '../src/flex';

describe('Flex', () => {
  it('should exist', () => { expect(Flex).to.be.ok; });

  describe('exist', () => {
    it('should render', () => {
      const wrapper = shallow(<Flex />);

      expect(wrapper).to.be.ok;
    });
  });

  describe('props', () => {
    describe('default', () => {
      it('should pass a style prop with flex properties to the container', () => {
        const wrapper = shallow(<Flex />);

        expect(wrapper.prop('style')).to.eql({
          alignContent: 'stretch',
          alignItems: 'stretch',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
        });
      });

      it('should pass a style prop with flex properties to the children', () => {
        const wrapper = shallow(<Flex><div /></Flex>);
        const firstChild = wrapper.children().first();

        expect(firstChild.prop('style')).to.eql({
          flexGrow: 0,
          flexShrink: 1,
          flexBasis: 'auto',
          alignSelf: 'auto',
        });
      });

      it('should pass a style prop with vendor prefixes', () => {
        const customUserAgent = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36';
        const prefixer = new Prefixer({ userAgent: customUserAgent });

        const wrapper = shallow(<Flex prefixer={prefixer} />);

        expect(wrapper.prop('style')).to.eql({
          alignContent: 'stretch',
          alignItems: 'stretch',
          boxSizing: 'border-box',
          display: '-webkit-flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: 'flex-start',
        });
      });
    });

    describe('custom', () => {
      it('should pass an orientation', () => {
        const wrapper = shallow(<Flex orientation={'vertical'} />);

        expect(wrapper.prop('style')).to.have.property('flexDirection', 'column');
      });

      it('should pass a wrap', () => {
        const wrapper = shallow(<Flex wrap={true} />);

        expect(wrapper.prop('style')).to.have.property('flexWrap', 'wrap');
      });

      it('should pass a justifyContent', () => {
        const wrapper = shallow(<Flex justifyContent={'center'} />);

        expect(wrapper.prop('style')).to.have.property('justifyContent', 'center');
      });

      it('should pass an alignItems', () => {
        const wrapper = shallow(<Flex alignItems={'end'} />);

        expect(wrapper.prop('style')).to.have.property('alignItems', 'flex-end');
      });

      it('should pass an alignContent', () => {
        const wrapper = shallow(<Flex alignContent={'space-between'} />);

        expect(wrapper.prop('style')).to.have.property('alignContent', 'space-between');
      });

      it('should pass a grow to children', () => {
        const wrapper = shallow(<Flex><div grow={3} /></Flex>);
        const firstChild = wrapper.children().first();

        expect(firstChild.prop('style')).to.have.property('flexGrow', 3);
      });

      it('should pass a shrink to children', () => {
        const wrapper = shallow(<Flex><div shrink={2} /></Flex>);
        const firstChild = wrapper.children().first();

        expect(firstChild.prop('style')).to.have.property('flexShrink', 2);
      });

      it('should pass a basis to children', () => {
        const wrapper = shallow(<Flex><div basis={30} /></Flex>);
        const firstChild = wrapper.children().first();

        expect(firstChild.prop('style')).to.have.property('flexBasis', 30);
      });

      it('should pass an align to children', () => {
        const wrapper = shallow(<Flex><div align={'baseline'} /></Flex>);
        const firstChild = wrapper.children().first();

        expect(firstChild.prop('style')).to.have.property('alignSelf', 'baseline');
      });
    });
  });
});
