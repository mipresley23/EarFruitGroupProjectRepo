import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {
    const [search, setSearch] = useState('')

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`/api/playlists/${search}`);
          const responseData = await response.json();
          console.log(responseData)
        }
        fetchData();
    }, [search]);

    async function onSubmit(e) {
        e.preventDefault();
        console.log(search)
    }

    return (
        <div>
            <h1>Home</h1>
            <form onSubmit={onSubmit}>
                <input type="search" id="search" name="search" onChange={e=>setSearch(e.target.value)}/>
                <button>Search</button>
            </form>
            <h1>Search Results: </h1>
            {/* <ul>{playlistComponents}</ul> */}
        </div>
    )
}

export default HomePage
