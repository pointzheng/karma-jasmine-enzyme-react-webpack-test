import React from 'react';
import {shallow} from 'enzyme';
import Button from '../src/components/button/index.js';
import add from '../src/components/button/add.js';

describe('Button', () => {
  let wrapper;
  const props = {
    onClick: jasmine.createSpy('onClick'),
    label: 'SAVE'
  };

  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should contain a `button` element', () => {
    expect(wrapper.is('button')).toBe(true);
  });

  it('should contain the label passed to it', () => {
    expect(wrapper.text()).toBe(props.label);
  });

  it('should call the `onClick` handler when the button is clicked', () => {
    wrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalled();
  });
});


describe('Must to be true', () => {
  it('add test should be true', () => {
    expect(add(1, 3)).toBe(4);
  });
});
