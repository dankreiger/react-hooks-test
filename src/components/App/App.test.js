import React from 'react';
import App from './App';
import { mount, render } from 'enzyme';

describe('App', () => {
  describe('rendering', () => {
    let renderedComponent;
    test('renders as expected', () => {
      renderedComponent = render(<App />);
      expect(renderedComponent).toBeTruthy();
      expect(renderedComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    let component;
    beforeEach(() => {
      component = mount(<App />); // Enzyme's shallow not working with React state hooks
    });
    test('renders 1 button html element with the text "Click me"', () => {
      expect(component.find('button').length).toBe(1);
      expect(component.find('button').text()).toBe('Click me');
    });
    test('renders 2 <InputGroup /> components', () => {
      expect(component.find('InputGroup').length).toBe(2);
    });

    test('renders a div.windowWidth that displays the current window width information', () => {
      expect(component.find('.windowWidth').length).toBe(1);
      expect(component.find('.windowWidth').text()).toBe('Window width: 1024'); // 1024 is the JSDOM default
    });
  });

  describe('behavior', () => {
    let component;
    beforeEach(() => {
      global.innerWidth = 500;
      component = mount(<App />); // Enzyme's shallow isn't working with state hooks
    });

    test('renders an incremented value on button click', () => {
      for (let i in [0, 1, 2, 3]) {
        expect(component.find('h3').text()).toBe(`You clicked ${i} times`);
        component.find('button').simulate('click');
        component.update(); // Read: enzyme update
      }
    });

    test('renders the window size on resize', () => {
      expect(component.find('.windowWidth').text()).toBe('Window width: 500');
      global.innerWidth = 1023;
      component = mount(<App />); // only works like this right now - .update() not working on component
      expect(component.find('.windowWidth').text()).toBe('Window width: 1023');
    });
  });
});
