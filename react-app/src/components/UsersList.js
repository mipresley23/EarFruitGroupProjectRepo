import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUsersThunk } from '../store/Users';

function UsersList() {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.users)

  // console.log('userSelector:', userSelector)
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getUsersThunk())
  }, [dispatch])

  useEffect(() => {
    setUsers(Object.values(userSelector))
  }, [userSelector])
// console.log('users: ', users)

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('/api/users/');
  //     const responseData = await response.json();
  //     setUsers(responseData.users);
  //   }
  //   fetchData();
  // }, []);

if(!users) return null;

  return (
    <>
      <h1>User List: </h1>
      <ul>
        {
         users && users.map(user => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
          </li>
         ))
        }
      </ul>
    </>
  );
}

export default UsersList;
