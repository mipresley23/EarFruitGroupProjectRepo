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
    body: JSON.stringify({
      song,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addSong(data))
    return null;
  } else {
    return ['An error occurred. Please try again.']
  }
}

const initialState = {};

const songReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS:
          const allSongs = {}
            action.payload.forEach((event) => {
                if (event.id) allSongs[event.id] = event
            })
            return { ...allSongs }

        case EDIT_SONG:
            const newEditState = {
              ...state,
              [action.payload.song.id]: action.payload.song
            }
            // const eventList = newState.map(id => newState[id]);
            // eventList.push(action.payload)
            return newEditState

        case ADD_SONG:
            const newAddState = {
              ...state,
              [action.payload.song.id]: action.payload.song
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
