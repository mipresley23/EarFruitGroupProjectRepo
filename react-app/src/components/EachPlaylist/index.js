import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	thunkGetPlaylists,
	thunkDeletePlaylist,
	thunkEditPlaylist,
} from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import "./EachPlaylist.css";

import defaultPlaylistImage from '../assets/my-playlist-img.png';

import { thunkGetPlaylistSongs } from "../../store/songs";
import PlaylistSearchBar from "./PlaylistSearchBar";


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
	const [addSong, setAddSong] = useState(false)
	useEffect(() => {
		dispatch(thunkGetPlaylists());
	}, [dispatch]);
	// dispatch(thunkGetPlaylistSongs())
	useEffect(() => {
		dispatch(thunkGetPlaylistSongs(playlistId));
	}, [playlistId]);

	//If you click on another playlist while editing will close edit input
	useEffect(() => {
		setEditName(false);
		setEditImage(false);
		setEditDescription(false);
		setEditImage(false);
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

		await dispatch(thunkEditPlaylist(playlist));
		await dispatch(thunkGetPlaylists());
		await setEditName(false);
		setEditImage(false);
		setEditDescription(false);
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
	const openSearchBar = () => {
		setAddSong(true)
	}
	const closeSearchBar = () => {
        setAddSong(false)
    }
	if (!editPlaylist) return null;
	return (
		<div>
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
							{<h3>{editPlaylist?.description}</h3>}

							{isOwner && !editDescription && (
								<button onClick={editDescriptionBtn}>Edit Description</button>
							)}
							{isOwner && editDescription && (
								<input
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							)}
							{isOwner && editDescription && (
								<button onClick={updatePlaylist}>Update Description</button>
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
					{imageError && (
						<img src={defaultPlaylistImage} />
					)}
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
			{!addSong && <button onClick={openSearchBar}>Add Song</button>}
			{addSong && <PlaylistSearchBar />}
			{addSong && <button onClick={closeSearchBar}>Cancel</button>}

			<ul>
				{playlistSongs &&
					playlistSongs.map((song) => (
						<li key={song.id}>{song.name}</li>
					))}
			</ul>
		</div>
	);
};

export default EachPlaylist;
