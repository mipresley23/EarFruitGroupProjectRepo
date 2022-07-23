import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";

function HomePage() {

	return (
		<div>
			<h1>Home</h1>
			<SearchBar/>
		</div>
	);
}

export default HomePage;
