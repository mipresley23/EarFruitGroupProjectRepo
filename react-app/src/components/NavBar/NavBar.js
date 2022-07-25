import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import * as sessionActions from "../../store/session";
import "./NavBar.css";
const NavBar = () => {
	const dispatch = useDispatch()
	const isLoggedIn = useSelector((state) => state.session.user);
	const handleDemo = () => {
		return dispatch(sessionActions.loginDemo());
	}
	// console.log(isLoggedIn)
	return (
		<nav className="nav-container">
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
						<button type="button" onClick={handleDemo}>Demo</button>
					</>
				)}
				{isLoggedIn && (
					<>
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
