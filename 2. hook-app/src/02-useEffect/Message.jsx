import { useState } from 'react';
import { useEffect } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('Event removed');
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <h4>Coordenadas</h4>
      <code>{JSON.stringify(coords)}</code>
    </>
  );
};
