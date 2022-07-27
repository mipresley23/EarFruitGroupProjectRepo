import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getUsersThunk, editUserThunk } from '../../store/Users';
import { thunkGetPlaylists } from '../../store/playlists';
import './userProfile.css'

const UserProfile = () => {
  const dispatch = useDispatch()

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [showNewPicForm, setShowNewPicForm] = useState(false)
  const [playlists, setPlaylists] = useState([]);
  const { userId }  = useParams();

  const userSelector = useSelector((state) => state.users)
  const playlistSelector = useSelector(state => state.playlists)



  const user = users && users.find(user => user.id === +userId)

  const thisUsersPlaylists = playlists && playlists.filter(playlist => playlist.user.id === +userId)

  // console.log('thisUsersPlaylists: ',thisUsersPlaylists)

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

  useEffect(() => {
    setUsers(Object.values(userSelector))
  }, [userSelector])

  useEffect(() => {
    dispatch(thunkGetPlaylists())
  }, [dispatch])

  useEffect(() => {
    setPlaylists(Object.values(playlistSelector))
  }, [playlistSelector])


  const handleEdit = async (e) => {
    e.preventDefault();
    const editUser = {
      id: userId,
      photo_url: photoUrl
    }
    // console.log('editUser: ', editUser)
    await dispatch(editUserThunk(editUser))
    setShowNewPicForm(false)
  }
if(!user) return null;
  return(
    <div>
      <div id='user-profile-header'>
        <h1>{user && user.username}</h1>
        <img id='user-profile-image' src={user && user.photo_url} alt='user image' />
          <button type='button' onClick={() => setShowNewPicForm(true)} >New Photo</button>
          {showNewPicForm && <form onSubmit={handleEdit}>
              <input type='text' value={photoUrl} placeholder={user.photo_url} onChange={(e) => setPhotoUrl(e.target.value)}></input>
              <button type='submit'>Submit</button>
            </form>}
      </div>
      <div id='user-profile-playlists-container'>
        <h2>{user.username}'s Playlists</h2>
        <div id='all-users-playlist-container'>
        {
          thisUsersPlaylists && thisUsersPlaylists.map(playlist => (
            <div>
              <NavLink to={`/playlists/${playlist.id}`}>
                <div className='profile-playlists-container'>
                  <img className='profile-playlist-cover-art' src={playlist.cover_img_url} alt='album cover'/>
                  <p>{playlist.name}</p>
                </div>
              </NavLink>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
