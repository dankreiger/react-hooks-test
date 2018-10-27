import React from 'react';
import { func, string } from 'prop-types';
import { InputGroupContainer } from './styles';

export default function InputGroup({ handleChange, inputLabel, inputValue }) {
  return (
    <InputGroupContainer>
      <label>{inputLabel}</label>
      <input onChange={handleChange} value={inputValue} />
    </InputGroupContainer>
  );
}

InputGroup.propTypes = {
  handleChange: func,
  inputLabel: string,
  inputValue: string
};
