import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    // const wrapper = shallow(<App />); // shallow working yet with hooks
    wrapper = mount(<App />);
  });

  it('increments', () => {
    for(let i in [0, 1, 2, 3]) {
      expect(wrapper.find('p').text()).toBe(`You clicked ${i} times`);
      wrapper.find('button').simulate('click');
      wrapper.update(); // Read: enzyme update
    }
  });
})

