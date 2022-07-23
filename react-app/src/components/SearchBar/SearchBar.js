import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './SearchBar.css'

export default function SearchBar(){
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);


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
                <img src={playlist.cover_img_url} width='200'/>
                <p>{playlist.name}</p>
            </div>
        )
    })

    return (
		<div>
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
