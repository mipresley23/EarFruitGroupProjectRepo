import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPlaylists, thunkDeletePlaylist, thunkEditPlaylist } from "../../store/playlists";
import { useHistory, useParams } from "react-router-dom";

const EachPlaylist = () => {
  const { playlistId } = useParams();
  const dispatch = useDispatch();

	const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const editPlaylist = useSelector((state)=>state.playlists[playlistId])
  const [editName, SetEditName] = useState(false);
  const [name, setName] = useState(editPlaylist?.name)
  // console.log(name)
  const [description, setDescription] = useState(editPlaylist?.description);
  const [coverUrl, setCoverUrl] = useState(editPlaylist?.cover_img_url);
  const isOwner = sessionUser.id == editPlaylist?.user.id;

  useEffect(() => {
		dispatch(thunkGetPlaylists());
  }, [dispatch]);


  //If you click on another playlist while editing will close edit input
  useEffect(() => {
    SetEditName(false)
  },[playlistId])


  useEffect(() => {
    // setIsOwner(sessionUser?.id == editSpot?.userId)
    setName(editPlaylist?.name)
    setCoverUrl(editPlaylist?.cover_img_url)
    setDescription(editPlaylist?.description)
  }, [editPlaylist, sessionUser])


  async function editNameBtn(e) {
		SetEditName(true)
  }

  async function updateName(e) {
    e.preventDefault();
    const playlist = {
      id: playlistId,
      name,
      description,
      cover_img_url: coverUrl
  }
    await dispatch(thunkEditPlaylist(playlist))
    SetEditName(false)
		dispatch(thunkGetPlaylists());
  }

  async function cancelEditNameBtn(e) {
		SetEditName(false)
  }
	async function onDelete(e) {
		e.preventDefault();
		history.push(`/`);
		await dispatch(thunkDeletePlaylist(playlistId));
	}

	// if(!editPlaylist) return null;
	return (
		<div>
			<div className="playlist-name">
        {<h1>{editPlaylist?.name}</h1>}
        {isOwner && !editName && <button onClick={editNameBtn}>Edit Name</button>}
        {isOwner && editName && <input value={name} onChange={e => setName(e.target.value)} />}
        {isOwner && editName && <button onClick={updateName}>Update Name</button>}
        {isOwner && editName && <button onClick={cancelEditNameBtn}>Cancel</button>}
			</div>

			<img src={editPlaylist?.cover_img_url} alt="" />
			{isOwner && <button onClick={onDelete}>Delete Playlist</button>}
		</div>
	);
};

export default EachPlaylist;
