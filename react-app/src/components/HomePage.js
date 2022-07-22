import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	// useEffect(() => {
	//     async function fetchData() {
	//       const response = await fetch(`/api/playlists/${search}`);
	//       const responseData = await response.json();
	//       console.log(responseData)
	//     }
	//     fetchData();
	// }, [search]);

	async function onSubmit(e) {
		e.preventDefault();
		// console.log(search);
		async function fetchData() {
			const response = await fetch(`/api/playlists/${search}`);
            const responseData = await response.json();
            // console.log(responseData.playlists)
            setSearchResults(responseData.playlists)
		}
		fetchData();
    }

    const playlistSearchResults = searchResults.map((playlist) => {
        // console.log(playlist.name)
        return (
            <div key={playlist.name}>
                {playlist.name}
            </div>
        )
    })
	return (
		<div>
			<h1>Home</h1>
			<form onSubmit={onSubmit}>
				<input
					type="search"
					id="search"
					name="search"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button>Search</button>
			</form>
			<h1>Search Results: </h1>
            <div>{playlistSearchResults}</div>
		</div>
	);
}

export default HomePage;
