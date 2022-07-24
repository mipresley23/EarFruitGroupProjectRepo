import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './SideBar.css'
export default function SideBar() {
    return (
        <div className='side-bar-container'>
            <h2>EarFruit</h2>
            <NavLink className='sidebar-link' to='/' exact={true} >
                <i class="fa fa-home"></i>
                Home
            </NavLink>
            <NavLink className='sidebar-link' to='/search' exact={true} >
                <i class="fa fa-search"></i>
                Search
            </NavLink>
        </div>
    )
}
