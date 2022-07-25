import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUserThunk } from '../../store/Users';

const UserProfile = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [showNewPicForm, setShowNewPicForm] = useState(false)
  const { userId }  = useParams();


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const editUser = {
      id: userId,
      username: user.username,
      email: user.email,
      password: user.password,
      photo_url: photoUrl
    }
    console.log('editUser: ', editUser)
    await dispatch(editUserThunk(editUser))
    setShowNewPicForm(false)
  }



  return(
    <div>
      <h1>{user.username}</h1>
      <img src={user.photo_url} alt='user image' />
      <button type='button' onClick={() => setShowNewPicForm(true)} >New Photo</button>
      {showNewPicForm && <form onSubmit={handleEdit}>
          <input type='text' value={photoUrl} placeholder={user.photo_url} onChange={(e) => setPhotoUrl(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>}
    </div>
  )
}

export default UserProfile;
