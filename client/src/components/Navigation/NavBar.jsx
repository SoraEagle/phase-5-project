import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/users/usersSlice';

function NavBar(){
  const user = useSelector((state) => state.entities);
  const dispatch = useDispatch();

    function handleLogoutClick(){
      dispatch(logout(user));
    }
  return (
    <div id="nav">
      <div>Hello, {user.username}</div>
        <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  )
}

export default NavBar;