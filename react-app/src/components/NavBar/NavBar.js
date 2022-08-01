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
	const [showMenu, setShowMenu] = useState(false)
	const [imageError, setImageError] = useState(false);
	const [image, setImage] = useState();
	const [imagewidth, setImageWidth] = useState(0);



	const profileImg = isLoggedIn && isLoggedIn.photo_url


	useEffect(() => {
		if (location.pathname.includes('songs')) setIsSongs(true);
		else setIsSongs(false);
	}, [location]);

	useEffect(() => {
		if (profileImg){
		 setImage(profileImg)
		}else{
			setImage("https://as1.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg")
		}
	}, [])


	const handleDemo = () => {
		return dispatch(sessionActions.loginDemo());
	}

	// function checkImage(url) {
  //   var image = new Image();
  //   image.src = url
	// 	return image.width
  //   }


	return (
		<nav className="nav-container">
			{isLoggedIn && isSongs && (
				<div id='song-menu-buttons'>
					<button onClick={e => setSongPage('')}>Songs</button>
					<button onClick={e => setSongPage('artists')}>Artists</button>
					<button onClick={e => setSongPage('albums')}>Albums</button>
				</div>
			)}
			<ul className="nav-list">
				{!isLoggedIn && (
					<>
						<li>
							<NavLink to="/login" exact={true} activeClassName="active">
								Log In
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
						<div id="nav-bar-user-info" onClick={e => setShowMenu(!showMenu)}>
								<img id='nav-bar-user-img' src={image} alt='navbar profile photo'/>
								<li>{isLoggedIn.username}</li>
							{showMenu && (
								<ul id='profile-menu'>
									<li>
										<NavLink id="nav-bar-user-link" to={`/users/${isLoggedIn.id}`}>Account</NavLink>
									</li>
									<LogoutButton />
								</ul>
							)}
						</div>

					</>)
				}
			</ul>
		</nav>
	);
};

export default NavBar;
