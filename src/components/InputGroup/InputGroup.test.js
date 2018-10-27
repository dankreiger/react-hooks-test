import React from 'react';
import { shallow, render } from 'enzyme';
import InputGroup from './InputGroup';

describe('InputGroup', () => {
  describe('rendering', () => {
    let renderedComponent;
    test('renders as expected', () => {
      renderedComponent = render(<InputGroup />);
      expect(renderedComponent).toBeTruthy();
      expect(renderedComponent).toMatchSnapshot();
    });
  });

  describe('structure', () => {
    let component;
    beforeEach(() => {
      component = shallow(
        <InputGroup
          inputLabel="Puppy"
          inputValue="Wauwau"
          handleChange={jest.fn()}
        />
      );
    });
    test('renders a label with the correct prop data', () => {
      expect(component.find('label')).toBeTruthy();
      expect(component.find('label').text()).toBe('Puppy');
      expect(component.find('label').props().children).toBe('Puppy');
    });

    test('renders an input with the correct prop data', () => {
      let input = component.find('input');

      expect(input).toBeTruthy();
      expect(input.props().value).toBe('Wauwau');
      expect(input.props().onChange).toHaveBeenCalledTimes(0);

      input.simulate('change', { target: { value: 'waggily' } });

      expect(input.props().onChange).toHaveBeenCalledTimes(1);
    });
  });
});
