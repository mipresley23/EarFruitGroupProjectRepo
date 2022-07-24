const GET_PLAYLISTS = 'playlists/GET_PLAYLISTS';
const CREATE_PLAYLIST = 'playlists/CREATE_PLAYLIST';
const EDIT_PLAYLIST = 'playlists/EDIT_PLAYLIST';
const DELETE_PLAYLIST = 'playlists/DELETE_PLAYLIST';


const actionGetPlaylists = (playlists) => {
  return {
    type: GET_PLAYLISTS,
    playlists
  }
}

const actionCreatePlaylist = (playlist) => {
  return {
    type: CREATE_PLAYLIST,
    playlist
  }
}

const actionEditPlaylist = (playlist) => {
  return {
    type: EDIT_PLAYLIST,
    playlist
  }
}

const actionDeletePlaylist = (playlist) => {
  return {
    type: DELETE_PLAYLIST,
    playlist
  }
}


export const thunkGetPlaylists = (playlists) => async (dispatch) => {
  const res = await fetch('/api/playlists');
  const playlists = await res.json();
  dispatch(actionGetPlaylists(playlists));
  return res;
}









 const playlistReducer = (state = {}, action) => {
  let newState = { ...state }
  switch (action.type) {
    case GET_PLAYLISTS:
      action.playlists.playlists.forEach(playlist => {
        newState[playlist.id] = playlist
      })
      return newState;

    default:
      return state
  }
 }

 export default playlistReducer
