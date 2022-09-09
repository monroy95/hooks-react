import { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Sirve para memorizar funciones
  const increment = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
