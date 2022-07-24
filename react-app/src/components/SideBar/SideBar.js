import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'
export default function SideBar() {


    return (
        <div className='side-bar-container'>
            <h2>EarFruit</h2>
            <NavLink to='/' exact={true} >

                Home
            </NavLink>
            <NavLink to='/search' exact={true} >
                <i class="fa fa-search"></i>
                Search
            </NavLink>
        </div>
    )
}
