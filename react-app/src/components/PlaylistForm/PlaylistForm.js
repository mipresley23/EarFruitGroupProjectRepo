import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlaylistForm() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [coverUrl, setCoverUrl] = useState('')
    const [errors, setErrors] = useState([])


    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory()


    useEffect(() => {
        const errors = []

        if (!name) errors.push('Name is required')
        if (!description) errors.push('Description is required')
        if (!coverUrl) errors.push('Playlist Cover Url is required')

        setErrors(errors)
    },[name, description, coverUrl])

    return (
		<div>
			<h1>Playlist Form</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        name='name'
                        type='text'
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name='description'
                        value={description}
                    />
                </div>
                <div>
                    <label htmlFor="cover_img_url">Playlist Cover Url</label>
                    <input
                        name='cover_img_url'
                        type='text'
                        value={coverUrl}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
		</div>
	);
}
