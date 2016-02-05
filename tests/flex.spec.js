import React from 'react';
import sd from 'skin-deep';
import { expect } from 'chai';
import Flex from '../src/flex';

describe('Flex', () => {
  it('should exist', () => { expect(Flex).to.be.ok; });

  describe('exist', () => {
    const tree = sd.shallowRender(<Flex />);
    const vdom = tree.getRenderOutput();

    it('should render', () => {
      expect(tree).to.be.ok;
      expect(vdom).to.be.ok;
    });

    it('should render a react component', () => {
      expect(vdom).to.have.property('type', 'div');
    });
  });
});
