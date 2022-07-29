import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetPlaylists } from "../../store/playlists";
import SearchBar from "../SearchBar/SearchBar";

import './HomePage.css'

function HomePage() {

	const dispatch = useDispatch()

	const [playlists, setPlaylists] = useState([])

	const playlistSelector = useSelector(state => state.playlists)

	useEffect(() => {
		dispatch(thunkGetPlaylists())
	}, [dispatch])

	useEffect(() => {
		setPlaylists(Object.values(playlistSelector))
	}, [playlistSelector])


	const sessionUser = useSelector((state) => state.session.user);
	if(sessionUser){
		return (
			<div className="home-container">
				<h1>Welcome Back {sessionUser.username}!</h1>

			</div>
		);
	}else{
		return(
			<div>
				<h1>Welcome to EarFruit!</h1>
				<div id="generic-playlist-header-container">
					<div id="generic-playlist-container">
						<h3>Check Out These Awesome Playlists!</h3>
						{
							playlists && playlists.map(playlist => (
								<div className='each-playlist-container'>
									<NavLink to={`playlists/${playlist.id}`}>
										<img id='each-playlist-image' src={playlist.cover_img_url} alt={playlist.name}/>
									</NavLink>
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}

	}

export default HomePage;
