import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { thunkGetPlaylists, thunkAddPlaylist } from "../../store/playlists";
import "./SideBar.css";

export default function SideBar() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [playlists, setPlaylists] = useState([]);
	const [myPlaylistNumber, setMyPlaylistNumber] = useState(1);

	const playlistsSelector = useSelector((state) => state.playlists);
	const sessionUser = useSelector((state) => state.session.user);
	let usersPlaylists;
	useEffect(() => {
		dispatch(thunkGetPlaylists());
	}, [dispatch]);

	useEffect(() => {
		setPlaylists(Object.values(playlistsSelector));
	}, [playlistsSelector]);

	if (sessionUser) {
		usersPlaylists =
			playlists &&
			playlists.filter((playlist) => playlist.user.id === sessionUser.id);
	}

	const userPlaylistNameArray = [];
	usersPlaylists?.map((playlists) =>
		userPlaylistNameArray.push(playlists.name)
	);
	// console.log(userPlaylistNameArray)
	let i = 1;
	// console.log(userPlaylistNameArray.includes(`My Playlist #${i}`))
	while (userPlaylistNameArray.includes(`My Playlist #${i}`)) {
		i++;
	}
	useEffect(() => {
		setMyPlaylistNumber(i);
	}, [i]);
	const onSubmit = async (e) => {
		if (!sessionUser) {
			history.push("/login");
		}
		if (sessionUser) {
			e.preventDefault();
			setMyPlaylistNumber(i);
			// console.log(myPlaylistNumber)
			const playlist = {
				name: `My Playlist #${myPlaylistNumber}`,
				description: `${sessionUser.username}'s Playlist`,
				cover_img_url: "",
			};
			const newPlaylist = await dispatch(thunkAddPlaylist(playlist));
			if (newPlaylist) {
				history.push(`/playlists/${newPlaylist.id}`);
			}
		}
	};
	return (
		<div className="side-bar-container">
			{/* <h2>EarFruit</h2> */}
			<div id="side-bar-logo-imgs">
				<img
					id="side-bar-circle-logo"
					src={require("./circleLogo.jpeg").default}
					alt="circle logo"
				/>
				<img
					id="side-bar-word-logo"
					src={require("./earfruit-logo.png").default}
					alt="word logo"
				/>
			</div>
			<NavLink className="sidebar-link" to="/" exact={true}>
				<i class="fa fa-home"></i>
				Home
			</NavLink>
			<NavLink className="sidebar-link" to="/search" exact={true}>
				<i class="fa fa-search"></i>
				Search
			</NavLink>
			<NavLink className="sidebar-link" to="/songs" exact={true}>
				<i class="fa fa-music"></i>
				Songs
			</NavLink>
			<div className="sidebar-link" onClick={onSubmit}>
				<i class="fa fa-plus"></i>
				Create Playlist
			</div>
			<div className="side-bar-playlist-list">
				{sessionUser &&
					usersPlaylists.map((playlist) => (
						<NavLink
							className="sidebar-link sidebar-playlist-link"
							to={`/playlists/${playlist.id}`}
						>
							{playlist.name}
						</NavLink>
					))}
			</div>
		</div>
	);
}
