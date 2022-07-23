import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import './HomePage.css'

function HomePage() {

	return (
		<div className="home-container">
			<h1>Home</h1>
			<SearchBar/>
		</div>
	);
}

export default HomePage;
