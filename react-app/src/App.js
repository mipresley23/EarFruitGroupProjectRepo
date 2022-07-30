import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
// import SongForm from './components/SongForm';
import Songs from './components/Songs/Songs';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AllPlaylists from './components/AllPlaylists';
import EachPlaylist from './components/EachPlaylist';
import User from './components/User';
import PlaylistForm from './components/PlaylistForm/PlaylistForm';
import UserProfile from './components/userProfile';
import MusicPlayer from './components/musicPlayer';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage/HomePage';
import SearchBar from './components/SearchBar/SearchBar';
import { authenticate } from './store/session';
import './index.css'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [songPage, setSongPage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }


  return (
    <BrowserRouter>
      <MusicPlayer />
      <div className='nav-bar'>
        <NavBar setSongPage={setSongPage}/>
      </div>
      <div className='side-bar'>
        <SideBar />
      </div>
      <div className='content'>

        <Switch>
          <Route path='/login' exact={true}>
            <LoginForm />

          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <Route path='/search' exact={true}>
            <SearchBar />
          </Route>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <UserProfile />
          </ProtectedRoute>
          <Route path='/' exact={true} >
            <HomePage/>
          </Route>
          <ProtectedRoute path='/songs' exact={true} >
            <Songs songPage={songPage} />
          </ProtectedRoute>
          <Route path='/playlists' exact={true} >
            <AllPlaylists />
          </Route>
          <Route path='/playlists/:playlistId' exact={true} >
            <EachPlaylist />
          </Route>
          <Route>
            <PageNotFound/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
