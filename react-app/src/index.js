import React from 'react';
import ReactDOM from 'react-dom';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import AudioListProvider from './context/audioList';

const store = configureStore();

const options = {theme: 'dark'}

ReactDOM.render(
  <React.StrictMode>
    <AudioListProvider>
    <Provider store={store}>
      <ModalProvider>
        <App />
        {/* <ReactJkMusicPlayer {...options} />, */}
      </ModalProvider>
    </Provider>
    </AudioListProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
