import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";

import './HomePage.css'

function HomePage() {

	const sessionUser = useSelector((state) => state.session.user);
	if(sessionUser){
		return (
			<div className="home-container">
				<h1>Welcome Back!</h1>
			</div>
		);
	}else{
		return(
			<h1>Welcome to EarFruit!</h1>
		)
	}

	}

export default HomePage;
