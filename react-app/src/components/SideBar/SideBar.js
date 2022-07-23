import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBar() {


    return (
        <div>
            <NavLink to='/' exact={true} activeClassName='active'>
                Home
            </NavLink>
        </div>
    )
}
