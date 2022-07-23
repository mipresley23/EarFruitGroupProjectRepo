import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {

  const [user, setUser] = useState({});
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

const photo = user.photo_url
console.log('photo: ', photo)



  return(
    <div>
      <h1>{user.username}</h1>
      <img src={user.photo_url} alt='user image' />
      <button type='button' onClick={() => setShowNewPicForm(true)} >New Photo</button>
      {showNewPicForm && <form onSubmit={() => setShowNewPicForm(false)}>
          <input type='text' value={photo} onChange={(e) => photo = e.target.value}></input>
          <button type='submit'>Submit</button>
        </form>}
    </div>
  )
}

export default UserProfile;
