import React, { useState } from 'react';
import { AppContainer } from './styles';
import { useWindowWidth } from '../../functions/useWindowWidth';
import { useDocumentTitle } from '../../functions/useDocumentTitle';
import InputGroup from '../InputGroup/InputGroup';
import { useFormInput } from '../../functions/useFormInput';

export default function App() {
  const name = useFormInput('Dan');
  const surname = useFormInput('Kreiger');
  useDocumentTitle(`${name.value} ${surname.value}`);

  const [count, setCount] = useState(0);
  const windowWidth = useWindowWidth();
  const handleClick = () => setCount(count + 1);

  return (
    <AppContainer>
      <h3>You clicked {count} times</h3>
      <button onClick={handleClick}>Click me</button>
      <p className="windowWidth">Window width: {windowWidth}</p>

      <InputGroup inputLabel="Name" stateHook={name} />
      <InputGroup inputLabel="Surname" stateHook={surname} />
    </AppContainer>
  );
}
