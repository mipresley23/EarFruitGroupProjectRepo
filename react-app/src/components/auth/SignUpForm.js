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
  const [firstSubmit, setFirstSubmit] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const validateImg = (url) => {
    let re = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
    return re.test(url);
  }

  useEffect(() => {
    const errors = [];
    if (!username) errors.push('A username is required.');
    if (!email) errors.push('An email is required.');
    if (!validateEmail(email)) errors.push('Must be a valid email address.');
    if (photoUrl.length > 0 && !(validateImg(photoUrl))) errors.push('Image url must a url and to a png, jpg, or jpeg.')
    if (!password) errors.push('A password is required.');
    if (password.length < 6) errors.push('Password length must be at least 6 characters.')
    if (!repeatPassword) errors.push('Please repeat the password.');
    if (password !== repeatPassword) errors.push('Password and repeated password must match.');

    setErrors(errors);
  }, [username, email, password, repeatPassword, photoUrl]);

  const onSignUp = async (e) => {
    e.preventDefault();
    setFirstSubmit(true);

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
        { (errors.length > 0 && firstSubmit) && <div className='song_form_errors'>
          {errors.map((error, ind) => (
            <div key={ind} className='song_form_error'>{error}</div>
          ))}
        </div> }
        <div className='song_form_divs'>
          <div className='sf_label'><label>User Name</label></div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Email</label></div>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Profile Picture Url</label></div>
          <input
            type='text'
            name='photoUrl'
            placeholder='(Optional) Profile Photo URL'
            onChange={updatePhotoUrl}
            value={photoUrl}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Password</label></div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='song_form_divs'>
          <div className='sf_label'><label>Repeat Password</label></div>
          <input
            type='password'
            name='repeat_password'
            placeholder='Repeated Password'
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
