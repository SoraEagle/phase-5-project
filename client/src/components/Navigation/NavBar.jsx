import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../features/users/usersSlice';
import Username from './Username';

function NavBar(){
  const user = useSelector(state => state.users.entities);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogoutClick(){
    dispatch(logout(user));
    navigate('/');
  }
  return (
    <div id='nav'>
      <Username />
      {(user && !user.errors) ? (
        <div>
          <Link id='linkStyles' to="/" >Home</Link>
          <Link id='linkStyles' to="/binders">My Binders</Link>
          <Link id='linkStyles' to="/flashcards">My Flashcards</Link>
          <button onClick={handleLogoutClick}>Log Out</button>
        </div>
      ) : (
        <div>
          <Link id='linkStyles' onClick={() => dispatch(reset())} to='/login'>Login</Link>
          <Link id='linkStyles' onClick={() => dispatch(reset())} to='signup'>Signup</Link>
        </div>
      )}
    </div>
  )
}

export default NavBar;