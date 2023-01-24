import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../features/users/usersSlice';

function NavBar(){
  const user = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    function handleLogoutClick(){
      dispatch(logout(user));
      navigate('/');
    }
  return (
    <div id="nav">
      {(user && !user.errors) ? (
        <div>
          <div>Hello, {user.username}</div>
          <div>
            <Link id='linkStyles' to="/" >Home</Link>
            <Link id='linkStyles' to="/binders">My Binders</Link>
            <Link id='linkStyles' to="/decks">My Decks</Link> {/* All of the decks */}
            <button onClick={handleLogoutClick}>Log Out</button>
          </div>
        </div>
      ) : (
        <div>
          <Link id='linkStyles' to='/login'>Login</Link>
          <Link id='linkStyles' to='signup'>Signup</Link>
        </div>
      )}
    </div>
  )
}

export default NavBar;