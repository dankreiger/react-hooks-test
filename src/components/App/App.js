import React, { useState } from 'react';
import { AppContainer } from './styles';
import useWindowWidth from '../../functions/useWindowWidth';
import useDocumentTitle from '../../functions/useDocumentTitle';
import InputGroup from '../InputGroup/InputGroup';

export default function App() {
  const [name, setName] = useState('Dan');
  const [surname, setSurname] = useState('Kreiger');

  const [count, setCount] = useState(0);
  const windowWidth = useWindowWidth();

  useDocumentTitle(`${name} ${surname}`);

  const handleClick = () => setCount(count + 1);
  const handleName = e => setName(e.target.value);
  const handleSurname = e => setSurname(e.target.value);

  return (
    <AppContainer>
      <h3>You clicked {count} times</h3>
      <button onClick={handleClick}>Click me</button>
      <p className="windowWidth">Window width: {windowWidth}</p>

      <InputGroup
        inputLabel="Name"
        handleChange={handleName}
        inputValue={name}
      />
      <InputGroup
        inputLabel="Surname"
        handleChange={handleSurname}
        inputValue={surname}
      />
    </AppContainer>
  );
}
