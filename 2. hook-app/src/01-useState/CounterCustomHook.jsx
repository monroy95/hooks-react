import { useCounter } from '../hooks/useCounter';

export const CounterCustomHook = () => {
  const { counter } = useCounter();

  return (
    <>
      <hr />
      <h1>Counter With Custom Hook: {counter}</h1>
      <hr />

      <button type="button" className="btn btn-danger">
        -
      </button>

      <button type="button" className="btn btn-secondary">
        Reset
      </button>

      <button type="button" className="btn btn-success">
        +
      </button>
    </>
  );
};
