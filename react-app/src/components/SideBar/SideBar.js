import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { thunkGetPlaylists } from '../../store/playlists';
import './SideBar.css'


export default function SideBar() {

  const dispatch = useDispatch();
  const [playlists, setPlaylists] = useState([])

  const playlistsSelector = useSelector(state => state.playlists)
  const sessionUser = useSelector(state => state.session.user)
  let usersPlaylists;
  if(sessionUser){
      usersPlaylists = playlists && playlists.filter(playlist => playlist.user.id === sessionUser.id)
    }

    console.log('users playlists sidebar: ', usersPlaylists)

  useEffect(() => {
    dispatch(thunkGetPlaylists())
  }, [dispatch])

  useEffect(() => {
    setPlaylists(Object.values(playlistsSelector))
  }, [playlistsSelector])

  console.log('sidebar playlists: ', playlists)

  if (!playlists) return null;
    return (
        <div className='side-bar-container'>
            <h2>EarFruit</h2>
            <NavLink className='sidebar-link' to='/' exact={true} >
                <i class="fa fa-home"></i>
                Home
            </NavLink>
            <NavLink className='sidebar-link' to='/search' exact={true} >
                <i class="fa fa-search"></i>
                Search
            </NavLink>
            <div id='sidebar-playlists-container'>
                {
                    usersPlaylists.map(playlist => (
                        <p>{playlist.name}</p>
                    ))
                }
            </div>
        </div>
    )
}
