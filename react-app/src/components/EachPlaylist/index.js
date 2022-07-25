import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPlaylists } from "../../store/playlists";
import { useParams } from 'react-router-dom';


const EachPlaylist = () => {

  const { playlistId } = useParams();
  console.log('id:', playlistId)
  const dispatch = useDispatch()

  const [playlists, setPlaylists] = useState();
  const playlistsSelector = useSelector(state => state.playlists)
  const thisPlaylist = playlists && playlists.find(playlist => playlist.id === +playlistId)
  console.log('thisPlaylist: ', thisPlaylist)
  useEffect(() => {
    dispatch(thunkGetPlaylists())
  }, [dispatch])

  useEffect(() => {
    setPlaylists(Object.values(playlistsSelector))
  }, [playlistsSelector])


  if(!thisPlaylist) return null;
  return(
    <div>
      <h1>{thisPlaylist && thisPlaylist.name}</h1>
      <img src={thisPlaylist.cover_img_url} alt='playlist cover'></img>
    </div>
  )
}

export default EachPlaylist
