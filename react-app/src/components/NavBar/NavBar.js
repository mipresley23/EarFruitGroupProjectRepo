import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import "./NavBar.css";
const NavBar = () => {
	const isLoggedIn = useSelector((state) => state.session.user);
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
					</>
				)}
				<li>
					<NavLink to="/users" exact={true} activeClassName="active">
						Users
					</NavLink>
				</li>
				<li>
					<LogoutButton />
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
