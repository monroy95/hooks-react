import { useState } from 'react';

export const CounterApp = () => {
  const [stateCounter, setCounter] = useState({
    counter1: 0,
    counter2: 10,
    counter3: 20,
  });

  const { counter1, counter2, counter3 } = stateCounter;

  return (
    <>
      <h2>
        Counter #1: <code>{counter1}</code>
      </h2>
      <h2>
        Counter #2: <code>{counter2}</code>
      </h2>
      <h2>
        Counter #3: <code>{counter3}</code>
      </h2>

      <hr />

      <button type="button" className="btn btn-danger">
        -
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          setCounter({
            ...stateCounter,
            counter1: counter1 + 1,
          })
        }>
        +
      </button>
    </>
  );
};
