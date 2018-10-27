import React from 'react';
import { func, string } from 'prop-types';
import { InputGroupContainer } from './styles';

export default function InputGroup({ inputLabel, stateHook }) {
  return (
    <InputGroupContainer>
      <label>{inputLabel}</label>
      <input {...stateHook} />
    </InputGroupContainer>
  );
}

InputGroup.propTypes = {
  handleChange: func,
  inputLabel: string,
  inputValue: string
};
