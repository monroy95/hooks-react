import { memo } from 'react';

export const Code = memo(({ value }) => {
  console.log('Se genero de nuevo');
  return <code>{value}</code>;
});
