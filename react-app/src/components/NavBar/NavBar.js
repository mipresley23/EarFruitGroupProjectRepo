import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import * as sessionActions from "../../store/session";
import "./NavBar.css";
const NavBar = ({setSongPage}) => {
	const dispatch = useDispatch()
	const location = useLocation()
	const isLoggedIn = useSelector((state) => state.session.user);

	const [isSongs, setIsSongs] = useState(location.pathname.includes('songs'));

	useEffect(() => {
		if (location.pathname.includes('songs')) setIsSongs(true);
		else setIsSongs(false);
	}, [location]);

	const handleDemo = () => {
		return dispatch(sessionActions.loginDemo());
	}

	return (
		<nav className="nav-container">
			{isLoggedIn && isSongs && (
				<div id='song-menu-buttons'>
					<button onClick={e => setSongPage('artists')}>Artists</button>
					<button onClick={e => setSongPage('albums')}>Albums</button>
				</div>
			)}
			<ul className="nav-list">
				{!isLoggedIn && (
					<>
						<li>
							<NavLink to="/login" exact={true} activeClassName="active">
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to="/sign-up" exact={true} activeClassName="active">
								Sign Up
							</NavLink>
						</li>
						<button id="demo-button" type="button" onClick={handleDemo}>Demo</button>
					</>
				)}
				{isLoggedIn && (
					<>
						<div id="nav-bar-user-info">
							<NavLink id="nav-bar-user-link" to={`/users/${isLoggedIn.id}`}>
								<img id='nav-bar-user-img' src={isLoggedIn.photo_url} alt='navbar profile photo'/>
								<li>{isLoggedIn.username}</li>
							</NavLink>
						</div>
						<li>
							<NavLink to="/users" exact={true} activeClassName="active">
								Users
							</NavLink>
						</li>
						<li>
							<LogoutButton />
						</li>
					</>)
				}
			</ul>
		</nav>
	);
};

export default NavBar;
