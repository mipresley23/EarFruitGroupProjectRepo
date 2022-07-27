// import { csrfFetch } from "./csrf";
const GET_PLAYLISTS = "playlists/GET_PLAYLISTS";
const ADD_PLAYLIST = "playlists/ADD_PLAYLIST";
const EDIT_PLAYLIST = "playlists/EDIT_PLAYLIST";
const DELETE_PLAYLIST = "playlists/DELETE_PLAYLIST";

const actionGetPlaylists = (playlists) => {
	return {
		type: GET_PLAYLISTS,
		playlists,
	};
};

const actionAddPlaylist = (playlist) => {
	return {
		type: ADD_PLAYLIST,
		playlist,
	};
};

const actionEditPlaylist = (playlist) => {
	return {
		type: EDIT_PLAYLIST,
		playlist,
	};
};

const actionDeletePlaylist = (playlistId) => {
	return {
		type: DELETE_PLAYLIST,
		playlistId,
	};
};

export const thunkGetPlaylists = (playlists) => async (dispatch) => {
	const res = await fetch("/api/playlists/");
	const playlists = await res.json();
	// console.log(playlists)
	dispatch(actionGetPlaylists(playlists));
	return res;
};


export const thunkAddPlaylist = (playlist) => async (dispatch) => {
	const response = await fetch("/api/playlists/", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(playlist),
	});
	const data = await response.json();
	// console.log('ADD PLAYLIST RESPONSE!!!!!!!!!!!!!!!:', data)
	dispatch(actionAddPlaylist(data));
	return data;
};

export const thunkEditPlaylist = (playlist) => async (dispatch) => {
	// console.log(playlist)
	const response = await fetch(`/api/playlists/${playlist.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(playlist),
	});

	const data = await response.json();
	// console.log(data)
	// console.log([data[1]])
	dispatch(actionEditPlaylist(data));
	return data;
};

export const thunkDeletePlaylist = (playlistId) => async (dispatch) => {
	const response = await fetch(`/api/playlists/${playlistId}`, {
		method: "DELETE",
	});
	dispatch(actionDeletePlaylist(playlistId));
	return response;
};

const playlistReducer = (state = {}, action) => {
	const newState = { ...state };
	switch (action.type) {
		case GET_PLAYLISTS:
			action.playlists.playlists.forEach((playlist) => {
				newState[playlist.id] = playlist;
			});
			return newState;

		case ADD_PLAYLIST:
			newState[action.playlist.id] = action.playlist;
			return newState;

		case DELETE_PLAYLIST:
			delete newState[action.playlistId];
			return newState;

		default:
			return state;
	}
};

export default playlistReducer;
