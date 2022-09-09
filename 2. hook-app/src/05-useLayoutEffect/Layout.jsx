import { useFetch, useCounter } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  console.log('El valor del contado es', counter);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  // Si la data tiene valor toma data[0]
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {/* Refactor */}
      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button className="btn btn-primary" disabled={isLoading} onClick={() => decrement()}>
        Back Quote
      </button>
      <button className="btn btn-secondary" disabled={isLoading} onClick={() => increment()}>
        Next Quote
      </button>
    </>
  );
};
