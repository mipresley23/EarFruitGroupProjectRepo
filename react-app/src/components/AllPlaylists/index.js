import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPlaylists } from "../../store/playlists";


const AllPlaylists = ()  => {
  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState([])

  const playlistsSelector = useSelector(state => state.playlists)
  const sessionUser = useSelector(state => state.session.user)

  const usersPlaylists = playlists && playlists.filter(playlist => playlist.user.id === sessionUser.id)

  console.log('users playlists: ', usersPlaylists)

  useEffect(() => {
    dispatch(thunkGetPlaylists())
  }, [dispatch])

  useEffect(() => {
    setPlaylists(Object.values(playlistsSelector))
  }, [playlistsSelector])

  return(
    <div>
      <h1>Playlists</h1>
      <ul>
        {
          playlists && playlists.map(playlist => (
            <li key={playlist.id}>{playlist.name}</li>
          ))
        }
      </ul>
      <ul>
        {
          usersPlaylists.map(playlist => (
            <div>
              <li>{playlist.name}</li>
              <li>
                <img src={playlist.cover_img_url}></img>
              </li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default AllPlaylists
