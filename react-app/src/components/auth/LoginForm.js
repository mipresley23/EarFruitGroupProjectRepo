import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import '../songForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const errorConverter = (err) => {
    if (err === 'Email is not found.') {
      return 'Email is incorrect.';
    } else if (err === 'Email is required.') {
      return 'Email/Username is required.'
    } else {
      return err
    }
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='song_form_div'>
      <form onSubmit={onLogin} className='song_form'>
        { errors.length > 0 && <div className='song_form_errors'>
          {errors.map((error, ind) => (
            <div key={ind} className='song_form_error'>{errorConverter(error)}</div>
          ))}
        </div> }
        <div className='song_form_divs'>
          <div className='sf_label'><label htmlFor='email'>Email</label></div>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label htmlFor='email'>Password</label></div>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit' className='song_form_divs sf_submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
