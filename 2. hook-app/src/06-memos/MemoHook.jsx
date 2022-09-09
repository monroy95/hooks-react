import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = (iterNumber = 100) => {
  for (let index = 0; index < iterNumber; index++) {
    console.log('Wenas wenas', index);
  }
  return `${iterNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment, decrement } = useCounter(5000);
  const [show, setShow] = useState(true);

  // la funcion debe regresar algo: se recomienda cuando hay tareas pesadaspara que no se ejecuten nuevamente
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <code>{counter}</code>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button type="button" className="btn btn-danger" onClick={() => decrement()}>
        -
      </button>
      <button type="button" className="btn btn-success" onClick={() => increment()}>
        +
      </button>

      <button type="button" className="btn btn-secondary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
