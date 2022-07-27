import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import AudioListProvider, {AudioListContext} from '../../context/audioList';
import { getUsersThunk, editUserThunk } from '../../store/Users';
import { thunkGetPlaylists } from '../../store/playlists';
import { getSongs } from '../../store/songs';
import './userProfile.css'

const UserProfile = () => {
  const dispatch = useDispatch()

  const [users, setUsers] = useState([]);
  const [songs, setSongs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [showNewPicForm, setShowNewPicForm] = useState(false)
  const [playlists, setPlaylists] = useState([]);

  const { userId } = useParams();

 const {audioList, setAudioList, clearAudioList, setClearAudioList} = useContext(AudioListContext)

  const songSelector = useSelector(state => state.songs);
  const userSelector = useSelector((state) => state.users)
  const playlistSelector = useSelector(state => state.playlists)





  const user = users && users.find(user => user.id === +userId)

  const thisUsersPlaylists = playlists && playlists.filter(playlist => playlist.user.id === +userId)
  const thisUsersSongs = songs && songs.filter(song => song.userId.id == +userId)

  console.log('profile songs: ', songs)
  console.log('thisUsersSongs: ', thisUsersSongs)
  console.log('thisUsersPlaylists: ', thisUsersPlaylists)

  useEffect(() => {
    dispatch(getSongs())
  }, [dispatch])

  useEffect(() => {
    setSongs(Object.values(songSelector))
  }, [songSelector])

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

  const handlePlaySong = async(e) => {
    e.preventDefault();
    setClearAudioList(true)
    const audioArr = e.target.value.split(',')
    console.log('audioArr: ', audioArr)
    setAudioList([])
    await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: require('../Songs/circleLogo.jpeg'), musicSrc: audioArr[2]}])
}
 const handleAddToQueue = async(e) => {
    e.preventDefault();
    setClearAudioList(false)
    const audioArr = e.target.value.split(',')
    console.log('audioArr: ', audioArr)
    console.log(audioList !== null)
    console.log('audioListinQueueFunc: ', audioList)
    if(audioList){
        setAudioList([{name: audioArr[0], singer: audioArr[1], cover: require('../Songs/circleLogo.jpeg'), musicSrc: audioArr[2]}])
    }
}




  if (!user) return null;
  return (
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
                    <img className='profile-playlist-cover-art' src={playlist.cover_img_url} alt='album cover' />
                    <p>{playlist.name}</p>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
        <div id='users-songs-container'>
          <h2 id='users-songs-header'>{user.username}'s Songs</h2>
          {
            thisUsersSongs && thisUsersSongs.map(song => (
              <div id='users-songs-list'>
                <p>{song.name}</p>
                <button value={[song.name, song.artist, song.source]} type='button' onClick={handlePlaySong}>play</button>
                <button value={[song.name, song.artist, song.source]} type='button' onClick={handleAddToQueue}>Add to Queue</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
