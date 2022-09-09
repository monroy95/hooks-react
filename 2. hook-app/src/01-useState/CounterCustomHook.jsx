import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <hr />
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />

      <button type="button" className="btn btn-danger" onClick={() => decrement(2)}>
        -
      </button>

      <button type="button" className="btn btn-secondary" onClick={reset}>
        Reset
      </button>

      <button type="button" className="btn btn-success" onClick={() => increment(2)}>
        +
      </button>
    </>
  );
};
