import React, { useState, useEffect,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	thunkGetPlaylists,
	thunkDeletePlaylist,
	thunkEditPlaylist,
} from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import "./EachPlaylist.css";
import defaultPlaylistImage from "../assets/my-playlist-img.png";
import { thunkGetPlaylistSongs } from "../../store/songs";
import PlaylistSearchBar from "./PlaylistSearchBar";
import circleLogo from '../assets/circleLogo.jpeg';
import AudioListProvider, { AudioListContext } from '../../context/audioList';

const EachPlaylist = () => {
	const { playlistId } = useParams();
	const dispatch = useDispatch();

	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);
	const editPlaylist = useSelector((state) => state.playlists[playlistId]);
	const playlistSongs = Object.values(useSelector((state) => state.songs));
	// console.log(playlistSongs);
	const [editName, setEditName] = useState(false);
	const [editImage, setEditImage] = useState(false);
	const [editDescription, setEditDescription] = useState(false);
	const [name, setName] = useState(editPlaylist?.name);
	const [description, setDescription] = useState(editPlaylist?.description);
	const [image, setImage] = useState(editPlaylist?.cover_img_url);
	const [imageError, setImageError] = useState(false);
	const isOwner = sessionUser.id == editPlaylist?.user.id;
	const [addSong, setAddSong] = useState(false);
	const {audioList, setAudioList, clearAudioList, setClearAudioList} = useContext(AudioListContext)

	//If you click on another playlist while editing will close edit input
	useEffect(() => {
		setEditName(false);
		setEditImage(false);
		setEditDescription(false);
		setEditImage(false);
		setAddSong(false);
	}, [playlistId]);

	useEffect(() => {
		dispatch(thunkGetPlaylists());
	}, [dispatch]);
	useEffect(() => {
		dispatch(thunkGetPlaylistSongs(playlistId));
	}, [playlistId]);

	useEffect(() => {
		// setIsOwner(sessionUser?.id == editSpot?.userId)
		setName(editPlaylist?.name);
		setImage(editPlaylist?.cover_img_url);
		setDescription(editPlaylist?.description);
	}, [editPlaylist, sessionUser]);

	async function editNameBtn(e) {
		setEditName(true);
	}
	async function editImageBtn(e) {
		setEditImage(true);
	}
	async function editDescriptionBtn(e) {
		setEditDescription(true);
	}

	async function updatePlaylist(e) {
		e.preventDefault();
		const playlist = {
			id: playlistId,
			name,
			description,
			cover_img_url: image,
		};
		// console.log(playlist);
		if (name.length == 0) {
			alert("Playlist must have a name");
		} else {
			await dispatch(thunkEditPlaylist(playlist));
			await dispatch(thunkGetPlaylists());
			await setEditName(false);
			setEditImage(false);
			setEditDescription(false);
		}
	}

	async function cancelEditNameBtn(e) {
		setEditName(false);
	}
	async function cancelEditImageBtn(e) {
		setImage(editPlaylist?.cover_img_url);
		setEditImage(false);
	}
	async function cancelEditDescriptionBtn(e) {
		setEditDescription(false);
	}
	async function onDelete(e) {
		e.preventDefault();
		history.push(`/`);
		await dispatch(thunkDeletePlaylist(playlistId));
	}
	function checkImage(url) {
		var image = new Image();
		image.onload = function () {
			if (this.width > 0) {
				setImageError(false);
				// console.log("image exists");
			}
		};
		image.onerror = function () {
			setImageError(true);
			//   console.log("image doesn't exist");
		};
		image.src = url;
	}
	useEffect(() => {
		checkImage(image);
	}, [image]);
	// console.log(imageError)

	const handlePlaySong = async (value) => {
		console.log(value);
		setClearAudioList(true);
		setAudioList([]);
		if (value[3]) {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: value[3],
					musicSrc: value[2],
				},
			]);
		} else {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: circleLogo,
					musicSrc: value[2],
				},
			]);
		}
	};

	const openSearchBar = () => {
		setAddSong(true);
	};

	const closeSearchBar = () => {
		setAddSong(false);
		dispatch(thunkGetPlaylistSongs(playlistId));
	};

	const removeSongFromPlaylist = async (playlistId, songId) => {
		// await dispatch(thunkAddPlaylistSongs(playlistId, songId))
		await fetch(`/api/playlists/delete-song/${playlistId}/${songId}`);
		dispatch(thunkGetPlaylistSongs(playlistId));
	};
	let songNum = 0;
	const playlistSongList = playlistSongs.map((song) => {
		songNum++;
		return (
			<tr className="search-song-row">
				<td className="search-song-number">{songNum}</td>
				<td className="">
					<div className="search-song-name">{song.name}</div>
					<div className="search-song-artist">{song.artist}</div>
				</td>
				<td className="search-song-album">{song.album}</td>
				<td className="search-song-button-cont">
					<i onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						} class="search-song-button fa fa-play fa-xl"></i>
					<i
						onClick={() => removeSongFromPlaylist(playlistId, song.id)}
						class="search-song-button fa-solid fa-trash fa-xl"
					></i>
				</td>
			</tr>
		);
	});
	if (!editPlaylist) return null;
	return (
		<div className="playlist-cont">
			<div className="playlist-header">
				<div className="playlist-name-cont">
					{isOwner && !editName && (
						<h1 className="playlist-name-owner" onClick={editNameBtn}>
							{editPlaylist?.name}
						</h1>
					)}
					{!isOwner && (
						<h1 className="playlist-name-not-owner">{editPlaylist?.name}</h1>
					)}
					{isOwner && editName && (
						<input
							className="editNameInput"
							value={name}
							autoFocus
							onChange={(e) => setName(e.target.value)}
						/>
					)}
					{isOwner && editName && (
						<button className="update-name-btn" onClick={updatePlaylist}>
							Update Name
						</button>
					)}
					{isOwner && editName && (
						<button onClick={cancelEditNameBtn}>Cancel</button>
					)}
				</div>
				<div className="playlist-description-cont">
					<ul>
						<li className="playlist-description">
							{isOwner && !editDescription && (
								<h3
									className="playlist-description-owner"
									onClick={editDescriptionBtn}
								>
									{editPlaylist?.description}
								</h3>
							)}
							{!isOwner && (
								<h3 className="playlist-description-not-owner">
									{editPlaylist?.description}
								</h3>
							)}

							{isOwner && !editDescription && description?.length == 0 && (
								<button onClick={editDescriptionBtn}>Add a Description</button>
							)}
							{isOwner && editDescription && (
								<input
									className="playlist-description-input"
									autoFocus
									placeholder="Playlist Description"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							)}
							{isOwner && editDescription && (
								<button
									className="playlist-description-edit-btn"
									onClick={updatePlaylist}
								>
									Update Description
								</button>
							)}
							{isOwner && editDescription && (
								<button onClick={cancelEditDescriptionBtn}>Cancel</button>
							)}
						</li>
						<li className="playlist-username">
							{<h3>{editPlaylist?.user.username}</h3>}
						</li>
					</ul>
				</div>
				<div className="playlist-image">
					{/* {console.log(imageError)} */}
					{!imageError && <img src={editPlaylist?.cover_img_url} />}
					{imageError && <img src={defaultPlaylistImage} />}
					{isOwner && !editImage && (
						<button className="edit-image-btn" onClick={editImageBtn}>
							<i class="fa fa-edit fa-lg"></i>
						</button>
					)}
					<div className="edit-image-div">
						{isOwner && editImage && (
							<input
								className="edit-image-input"
								placeholder="Image Url"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
						)}
						{isOwner && editImage && (
							<button
								className="edit-image-update-btn"
								onClick={updatePlaylist}
							>
								Update Image
							</button>
						)}
						{isOwner && editImage && (
							<button
								className="edit-image-cancel-btn"
								onClick={cancelEditImageBtn}
							>
								Cancel
							</button>
						)}
					</div>
				</div>
				{isOwner && (
					<button className="delete-playlist-btn" onClick={onDelete}>
						Delete Playlist
					</button>
				)}
			</div>
			<div className="playlist-search-song">
				{/* {!addSong && <button className="playlist-add-song-btn" onClick={openSearchBar}>Add Song</button>} */}
				{isOwner && !addSong && (
					<i
						onClick={openSearchBar}
						className="playlist-add-song-btn fa fa-plus fa-3x"
					></i>
				)}
				{addSong && <PlaylistSearchBar func={closeSearchBar} />}
			</div>
			<div className="playlist-song-list">
				{!addSong && (
					<table className="search-song-table">
						<thead>
							<tr className="border-white">
								<th className="search-song-number">#</th>
								<th className="">Title</th>
								<th className="">Album</th>
								<th className=""></th>
							</tr>
						</thead>
						<tbody>{playlistSongList}</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default EachPlaylist;
