import { useEffect } from 'react';

import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, useremail, pwd } = useForm({
    username: '',
    useremail: '',
    pwd: '',
  });

  // const { username, useremail, pwd } = formState;

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
      <input type="password" name="pwd" className="form-control mt-3" value={pwd} onChange={onInputChange} />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>
    </>
  );
};
