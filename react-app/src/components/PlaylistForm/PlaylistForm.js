import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkAddPlaylist } from "../../store/playlists";

export default function PlaylistForm() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [coverUrl, setCoverUrl] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted,setHasSubmitted] = useState(false)

    const sessionUser = useSelector((state) => state.session.user);
    const p = useSelector((state) => state.playlists)
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const errors = [];

		if (!name) errors.push("Name is required");
		if (!description) errors.push("Description is required");
		if (!coverUrl) errors.push("Playlist Cover Url is required");

		setValidationErrors(errors);
	}, [name, description, coverUrl]);

    const onSubmit = async(e) => {
        e.preventDefault()
        setHasSubmitted(true)
        if (validationErrors.length) return alert('Cannot Submit')
        setHasSubmitted(false)
        const playlist = {
            name,
            description,
            cover_img_url: coverUrl
        }
        // dispatch(thunkAddPlaylist(playlist))
        const newPlaylist = await dispatch(thunkAddPlaylist(playlist))
        // console.log('ADD PLAYLIST RESPONSE!!!!!!!!!!!!!!!:',newPlaylist)
        if (newPlaylist) {
            history.push(`/playlists/${newPlaylist.id}`)
        }
    }

	return (
		<div>
            <h1>Playlist Form</h1>
            {hasSubmitted && validationErrors.length > 0 && (
                <div className='new-listing-error'>
                    Before you can submit a new listing:
                    <ul>
                        {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor="name">Name</label>
					<input name="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" value={description} onChange={e => setDescription(e.target.value)}/>
				</div>
				<div>
					<label htmlFor="cover_img_url">Playlist Cover Url</label>
					<input name="cover_img_url" type="text" value={coverUrl} onChange={e => setCoverUrl(e.target.value)}/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
