import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    global.innerWidth = 500;
    wrapper = mount(<App />);
  });

  test('renders an incremented value on button click', () => {
    for (let i in [0, 1, 2, 3]) {
      expect(wrapper.find('h3').text()).toBe(`You clicked ${i} times`);
      wrapper.find('button').simulate('click');
      wrapper.update(); // Read: enzyme update
    }
  });

  test('renders the window size on resize', () => {
    expect(wrapper.find('.windowWidth').text()).toBe('Window width: 500');

    global.innerWidth = 1023;
    wrapper = mount(<App />); // only works like this right now - .update() not working on wrapper

    expect(wrapper.find('.windowWidth').text()).toBe('Window width: 1023');
  });
});
