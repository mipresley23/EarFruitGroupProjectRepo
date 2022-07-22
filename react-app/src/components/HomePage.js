import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

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
        </div>
    )
}

export default HomePage
