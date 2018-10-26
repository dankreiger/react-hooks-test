import React, { useState, useEffect } from 'react';
import { AppContainer } from './styles';
import useWindowWidth from '../../functions/useWindowWidth';

export default function App() {
  const [count, setCount] = useState(0);
  const windowWidth = useWindowWidth();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const handleClick = () => setCount(count + 1);

  return (
    <AppContainer>
      <h3>You clicked {count} times</h3>
      <button onClick={handleClick}>Click me</button>
      <p className="windowWidth">Window width: {windowWidth}</p>
    </AppContainer>
  );
}
