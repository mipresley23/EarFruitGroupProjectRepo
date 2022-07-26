import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	thunkGetPlaylists,
	thunkDeletePlaylist,
	thunkEditPlaylist,
} from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";
import './EachPlaylist.css'

const EachPlaylist = () => {
	const { playlistId } = useParams();
	const dispatch = useDispatch();

	const history = useHistory();

	const sessionUser = useSelector((state) => state.session.user);
	const editPlaylist = useSelector((state) => state.playlists[playlistId]);
	const [editName, setEditName] = useState(false);
	const [editImage, setEditImage] = useState(false);
	const [editDescription, setEditDescription] = useState(false);
	const [name, setName] = useState(editPlaylist?.name);
	const [description, setDescription] = useState(editPlaylist?.description);
	const [image, setImage] = useState(editPlaylist?.cover_img_url);
	const isOwner = sessionUser.id == editPlaylist?.user.id;
	useEffect(() => {
		dispatch(thunkGetPlaylists());
	}, [dispatch]);

	//If you click on another playlist while editing will close edit input
	useEffect(() => {
		setEditName(false);
		setEditImage(false);
		setEditDescription(false);
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
    console.log(playlist)

		await dispatch(thunkEditPlaylist(playlist));
		setEditName(false);
		setEditImage(false);
		setEditDescription(false);
		dispatch(thunkGetPlaylists());
	}

	async function cancelEditNameBtn(e) {
		setEditName(false);
	}
	async function cancelEditImageBtn(e) {
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

	// if(!editPlaylist) return null;
	return (
		<div className="playlist-header">
			<div className="playlist-name-cont">
        {isOwner && !editName && (<h1 className="playlist-name" onClick={editNameBtn}>{editPlaylist?.name}</h1>)}
        {!isOwner && (<h1>{editPlaylist?.name}</h1>)}
				{isOwner && editName && (
					<input value={name} onChange={(e) => setName(e.target.value)} />
				)}
				{isOwner && editName && (
					<button onClick={updatePlaylist}>Update Name</button>
				)}
				{isOwner && editName && (
					<button onClick={cancelEditNameBtn}>Cancel</button>
				)}
			</div>
			<div className="playlist-description">
				{<h3>{editPlaylist?.description}</h3>}
				{isOwner && !editDescription && (
					<button onClick={editDescriptionBtn}>Edit Description</button>
				)}
				{isOwner && editDescription && (
					<input value={description} onChange={(e) => setDescription(e.target.value)} />
				)}
				{isOwner && editDescription && (
					<button onClick={updatePlaylist}>Update Description</button>
				)}
				{isOwner && editDescription && (
					<button onClick={cancelEditDescriptionBtn}>Cancel</button>
				)}
			</div>
			<div className="playlist-image">
				<img src={editPlaylist?.cover_img_url} />
				{isOwner && !editImage && (
					<button className="edit-image-btn" onClick={editImageBtn}><i class="fa fa-edit fa-lg"></i></button>
				)}
				{isOwner && editImage && (
					<input value={image} onChange={(e) => setImage(e.target.value)} />
				)}
				{isOwner && editImage && (
					<button onClick={updatePlaylist}>Update Image</button>
				)}
				{isOwner && editImage && (
					<button onClick={cancelEditImageBtn}>Cancel</button>
				)}
			</div>
			{isOwner && <button className="delete-playlist-btn" onClick={onDelete}>Delete Playlist</button>}
		</div>
	);
};

export default EachPlaylist;
