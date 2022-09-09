import { useState } from 'react';
import { useCounter } from '../hooks';
import { Code } from './Code';

export const Memorize = () => {
  const { counter, increment, decrement } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Code value={counter} />
      </h1>
      <hr />
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
