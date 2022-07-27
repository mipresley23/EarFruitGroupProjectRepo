import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import AudioListProvider, {AudioListContext} from '../../context/audioList';
import { getUsersThunk, editUserThunk } from '../../store/Users';
import { thunkGetPlaylists } from '../../store/playlists';
import { getSongs } from '../../store/songs';
import playButton from '../assets/play_button.png';
import addToPlaylistButton from '../assets/addtoPlaylist.png';
import circleLogo from '../assets/circleLogo.jpeg';
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
    console.log('play song target:', e.target.value)
    const audioArr = e.target.value.split(',')
    console.log('play song audioArr: ', audioArr)
    setAudioList([])
    await setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
}
 const handleAddToQueue = async(e) => {
    e.preventDefault();
    setClearAudioList(false)
    const audioArr = e.target.value.split(',')
    console.log('queue audioArr: ', audioArr)
    if(audioList){
        setAudioList([{name: audioArr[0], singer: audioArr[1], cover: circleLogo, musicSrc: audioArr[2]}])
    }
}




  if (!user) return null;
  return (
    <div>
      <div id='user-profile-header'>
        <h1>{user && user.username}</h1>
        <img id='user-profile-image' src={user && user.photo_url} alt='user image' />
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
                    <p id='playlist-nav-link-text'>{playlist.name}</p>
                  </div>
                </NavLink>
              </div>
            ))
          }
        </div>
        <div id='users-songs-container'>
          <h2 id='users-songs-header'>{user.username}'s Songs</h2>
          <ol>

          {
            thisUsersSongs && thisUsersSongs.map(song => (
              <div id='users-songs-list'>
                <div id='song-info'>
                  <li>
                    <p id='song-title'>{song.name}</p>
                    <p id='song-artist'>{song.artist}</p>
                  </li>
                </div>
                <div id='song-buttons-container'>
                  <input className='song-buttons' id='user-profile-play-button' type='image' src={playButton} value={[song.name, song.artist, song.source]} onClick={handlePlaySong}/>
                  <input className='song-buttons' id='user-profile-queue-button' value={[song.name, song.artist, song.source]} type='image' src={addToPlaylistButton} onClick={handleAddToQueue}/>
                </div>
              </div>
            ))
          }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
