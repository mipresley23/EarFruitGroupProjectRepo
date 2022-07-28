import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../../store/songs";
import { useParams } from "react-router-dom";
import { thunkAddPlaylistSongs } from "../../store/songs";

export default function PlaylistSearchBar({func}) {
    const dispatch = useDispatch();
    const { playlistId } = useParams()
	const songs = useSelector((state) => state?.songs);
	const songsArray = Object.values(songs);
	const [search, setSearch] = useState("");
	const searchSongs = songsArray.filter(
		(song) =>
			song.name.toUpperCase().includes(search.toUpperCase()) ||
			song.artist.toUpperCase().includes(search.toUpperCase())
	);
	// console.log(searchSongs);

	useEffect(() => {
		dispatch(getSongs());
	}, [dispatch]);

    const addSongToPlaylist = async(playlistId, songId) => {
        // await dispatch(thunkAddPlaylistSongs(playlistId, songId))
        await fetch(`/api/playlists/add-song/${playlistId}/${songId}`)
        func()
    }
	const songSearchResults = searchSongs.map((song) => {
		// console.log(playlist);
		return (
			<div className="song-card" key={song.name}>
				<div className="song-card-contents">
					<p id="song-name">{song.name}</p>
					<p id="song-name">{song.artist}</p>
					<p id="song-name">{song.id}</p>
					<p>By {song.userId.username}</p>
					<button onClick={()=>addSongToPlaylist(playlistId,song.id)}>
						<i class="fa fa-plus"></i>
					</button>
				</div>
			</div>
		);
	});

	async function onSubmit(e) {
		e.preventDefault();
		// console.log(search);
		dispatch(getSongs());
	}

	return (
		<div className="search-container">
			<form className="search-bar" onSubmit={onSubmit}>
				<i class="search-icon fa fa-search"></i>
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Artists, songs, or playlists"
					onChange={(e) => setSearch(e.target.value)}
				/>
				{/* <button>Search</button> */}
			</form>
			{searchSongs.length > 0 && (
				<>
					<h2>Songs: </h2>
					<div className="songs-container">{songSearchResults}</div>
				</>
			)}
		</div>
	);
}
