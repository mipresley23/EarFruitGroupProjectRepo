import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPlaylists, thunkDeletePlaylist } from "../../store/playlists";
import { useHistory, useParams } from 'react-router-dom';


const EachPlaylist = () => {

  const { playlistId } = useParams();
  const dispatch = useDispatch()
  const history = useHistory();

  const [playlists, setPlaylists] = useState();
  const sessionUser = useSelector(state=>state.session.user)
  const playlistsSelector = useSelector(state => state.playlists)
  const thisPlaylist = playlists && playlists.find(playlist => playlist.id === +playlistId)
  console.log('sessionUser: ', sessionUser.id)
  const isOwner = sessionUser.id == thisPlaylist?.user.id
  console.log('isOWner',isOwner)
  useEffect(() => {
    dispatch(thunkGetPlaylists())
  }, [dispatch])

  useEffect(() => {
    setPlaylists(Object.values(playlistsSelector))
  }, [playlistsSelector])

  async function onDelete(e) {
    e.preventDefault();
    history.push(`/`)
    await dispatch(thunkDeletePlaylist(playlistId))
  }


  // if(!thisPlaylist) return null;
  return(
    <div>
      <h1>{thisPlaylist?.name}</h1>
      <img src={thisPlaylist?.cover_img_url} alt=''></img>
      {isOwner && <button onClick={onDelete}>Delete Playlist</button>}
    </div>
  )
}

export default EachPlaylist
