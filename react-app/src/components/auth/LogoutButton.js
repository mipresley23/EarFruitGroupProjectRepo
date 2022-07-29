import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useAudioList } from "../../context/audioList";
import { logout } from '../../store/session';
import '../NavBar/NavBar.css'

const LogoutButton = () => {
  const {audioList, setAudioList} = useAudioList()


  const dispatch = useDispatch()
  const onLogout = async (e) => {
    setAudioList([]);
    await dispatch(logout());
  };

  return <button className='logout-btn' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
