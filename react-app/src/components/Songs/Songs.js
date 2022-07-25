import React from 'react';
import { NavLink } from 'react-router-dom';

const Songs = () => {
    return (
        <div>
            <NavLink to='/add-song'>Add Song</NavLink>
        </div>
    )
}

export default Songs;
