const ADD_SONG = 'session/ADD_SONG';
const EDIT_SONG = 'session/EDIT_SONG';
const GET_SONGS = 'session/GET_SONGS';
const DELETE_SONG = 'session/DELETE_SONG';

const addSong = (song) => ({
    type: ADD_SONG,
    payload: song
  })

const retrieveSongs = (songs) => ({
  type: GET_SONGS,
  payload: songs
})

const deleteSong = () => ({
  type: DELETE_SONG,
})

export const createSong = (song) => async (dispatch) => {
  const response = await fetch('/api/songs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song)
  });
  if (response.ok) {
    const song = await response.json();
    dispatch(addSong(song))
}}

export const getSongs = () => async (dispatch) => {
  const response = await fetch('/api/songs/');
  if (response.ok) {
    const song = await response.json();
    dispatch(retrieveSongs(song))
    return song;
  }}

const initialState = {};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS:
          const allSongs = {}
            action.payload.forEach((song) => {
                if (song.id) allSongs[song.id] = song
            })
            return { ...allSongs }

        case EDIT_SONG:
            const newEditState = {
              ...state,
              [action.payload.id]: action.payload
            }
            // const eventList = newState.map(id => newState[id]);
            // eventList.push(action.payload)
            return newEditState

        case ADD_SONG:
          console.log(action)
          const newAddState = {
            ...state,
            [action.payload.id]: action.payload
          }

            // newState[action.payload.event.id]= action.payload
            // const eventList = newState.map(id => newState[id]);
            // eventList.push(action.payload)
            return newAddState

        case DELETE_SONG:
          const newDeleteState = {...state}
          delete newDeleteState[action.payload]
          return newDeleteState

        default:
            return state;
    }
};

export default songReducer;
