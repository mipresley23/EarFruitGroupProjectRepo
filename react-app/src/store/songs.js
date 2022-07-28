const ADD_SONG = "session/ADD_SONG";
const EDIT_SONG = "session/EDIT_SONG";
const GET_SONGS = "session/GET_SONGS";
const GET_PLAYLIST_SONGS = "session/GET_PLAYLIST_SONGS";
const ADD_PLAYLIST_SONGS = "session/ADD_PLAYLIST_SONGS";
const DELETE_SONG = "session/DELETE_SONG";

const addSong = (song) => ({
	type: ADD_SONG,
	payload: song,
});

const retrieveSongs = (songs) => ({
	type: GET_SONGS,
	payload: songs,
});

const actionGetPlaylistSongs = (songs) => {
	return {
		type: GET_PLAYLIST_SONGS,
		songs,
	};
};
const actionAddPlaylistSongs = (song) => {
	return {
		type: ADD_PLAYLIST_SONGS,
		song,
	};
};

const updateSong = (song) => ({
	type: EDIT_SONG,
	payload: song,
});

const removeSong = (id) => ({
	type: DELETE_SONG,
	payload: id,
});

export const createSong = (song) => async (dispatch) => {
	const response = await fetch("/api/songs/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(song),
	});
	if (response.ok) {
		const song = await response.json();
		dispatch(addSong(song));
	}
};

export const getSongs = () => async (dispatch) => {
	const response = await fetch("/api/songs/");
	if (response.ok) {
		const song = await response.json();
		dispatch(retrieveSongs(song));
		return song;
	}
};

export const thunkGetPlaylistSongs = (playlistId) => async (dispatch) => {
	const res = await fetch(`/api/playlists/songs/${playlistId}`);
	const songs = await res.json();
	// console.log(songs);
	dispatch(actionGetPlaylistSongs(songs));
	return res;
};
export const thunkAddPlaylistSongs = (playlistId,songId) => async (dispatch) => {
	const res = await fetch(`/api/playlists/add-song/${playlistId}/${songId}`);
	const song = await res.json();
	// console.log(songs);
	dispatch(actionAddPlaylistSongs(song));
	return res;
};

export const editSong = (song) => async (dispatch) => {
	// console.log("INSIDE THUNK::", song.id);
	const response = await fetch(`/api/songs/${song.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(song),
	});
	if (response.ok) {
		const updatedSong = await response.json();
		dispatch(updateSong(updatedSong));
	}
};

export const deleteSong = id => async (dispatch) => {
  const response = await fetch(`/api/songs/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: {
      'Content-Type':'application/json'
    }
  })

  // console.log('-----------songs.deleteSong api fetch:---------', response)
  if (response.ok) {
    dispatch(removeSong(id))
    return 'Song Deleted'
  }
}

const initialState = {};

const songReducer = (state = initialState, action) => {
  const newState = { };
	switch (action.type) {
		case GET_SONGS:
			const allSongs = {};
			action.payload.forEach((song) => {
				if (song.id) allSongs[song.id] = song;
			});
			return { ...allSongs };

		case GET_PLAYLIST_SONGS:
			// console.log(action.songs.songs)
			action.songs.songs.forEach((song) => {
				newState[song.id] = song;
			});
			// console.log(newState);
			return newState;

		case ADD_PLAYLIST_SONGS:
			// console.log(action.songs.songs)
			newState[action.song.id] = action.song;
			// console.log(newState);
			return newState;

		case EDIT_SONG:
			const newEditState = {
				...state,
				[action.payload.id]: action.payload,
			};
			// const eventList = newState.map(id => newState[id]);
			// eventList.push(action.payload)
			return newEditState;

		case ADD_SONG:
			// console.log("-----action: ADD_SONG------", action);
			const newAddState = {
				...state,
				[action.payload.id]: action.payload,
			};

			// newState[action.payload.event.id]= action.payload
			// const eventList = newState.map(id => newState[id]);
			// eventList.push(action.payload)
			return newAddState;

		case DELETE_SONG:
			const newDeleteState = { ...state };
			delete newDeleteState[action.payload];
			return newDeleteState;

		default:
			return state;
	}
};

export default songReducer;
