import React            from 'react';
import { expect }       from 'chai';
import { shallow }      from 'enzyme';
import AnimakitElastic  from '../lib/AnimakitElastic.js';

describe('AnimakitExpander', () => {
  it('shallow', () => {
    const root = shallow(<AnimakitElastic />);
    expect(root.is('div')).to.equal(true);
  });

  it('has wrapper', () => {
    const root = shallow(<AnimakitElastic />);
    expect(root.children()).to.have.length(1);
  });

  it('has children', () => {
    const root = shallow(<AnimakitElastic><div>1</div></AnimakitElastic>);
    const wrapper = root.childAt(0);
    const container = wrapper.childAt(0);
    expect(container.children()).to.have.length(1);
  });
});