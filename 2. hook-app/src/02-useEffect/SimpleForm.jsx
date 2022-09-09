import { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  // hooks
  const [formState, setformState] = useState({
    username: 'mmonroy',
    useremail: 'm.m@gmail.com',
  });

  const { username, useremail } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    // console.log(name, value);

    setformState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect
  useEffect(() => {
    // console.log('use effect called');
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="User Name"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        name="useremail"
        className="form-control mt-3"
        placeholder="m.m@gmail.com"
        value={useremail}
        onChange={onInputChange}
      />

      {username === 'mmonroy2' && <Message />}
    </>
  );
};
