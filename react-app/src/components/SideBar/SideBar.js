import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {


    return (
        <div>
            <NavLink to='/' exact={true} >
                Home
            </NavLink>
            <NavLink to='/search' exact={true} >
                Search
            </NavLink>
        </div>
    )
}
