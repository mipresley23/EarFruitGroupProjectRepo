import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
   
console.log(validateEmail('anystring@anystring.anystring'));

  useEffect(() => {
    const errors = [];
    if (!username) errors.push('A username is required.');
    if (!email) errors.push('An email is required.');
    if (!validateEmail(email)) errors.push('Must be a valid email address.');
    if (!password) errors.push('A password is required.');
    if (password.length < 6) errors.push('Password length must be at least 6 characters.')
    if (!repeatPassword) errors.push('Please repeat the password.');
    if (password !== repeatPassword) errors.push('Password and repeated password must match.');

    setErrors(errors);
  }, [username, email, password, repeatPassword]);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (!errors.length) {
      const data = await dispatch(signUp(username, email, password, photoUrl));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhotoUrl = (e) => {
    setPhotoUrl(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='song_form_div'>
      <form onSubmit={onSignUp} className='song_form'>
        { errors.length > 0 && <div className='song_form_errors'>
          {errors.map((error, ind) => (
            <div key={ind} className='song_form_error'>{error}</div>
          ))}
        </div> }
        <div className='song_form_divs'>
          <div className='sf_label'><label>User Name</label></div>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Email</label></div>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Profile Picture Url</label></div>
          <input
            type='text'
            name='photoUrl'
            onChange={updatePhotoUrl}
            value={photoUrl}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Password</label></div>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Repeat Password</label></div>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type='submit' className='song_form_divs sf_submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
