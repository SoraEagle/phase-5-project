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
          <p>
            <Link id='linkStyles' className='link' to="/" >Home</Link>
            <Link id='linkStyles' className='link' to="/binders">My Binders</Link>
            <Link id='linkStyles' className='link' to="/flashcards">My Flashcards</Link>
            <button onClick={handleLogoutClick}>Log Out</button>
          </p>
        </div>
      ) : (
        <div>
          {!(window.location.href.indexOf("/login") > -1) ? (
            <Link id='linkStyles' onClick={() => dispatch(reset())} to='/login'>Login</Link>
          ) : (null)}
           {!(window.location.href.indexOf("/signup") > -1) ? (
            <Link id='linkStyles' onClick={() => dispatch(reset())} to='signup'>Signup</Link>
          ) : (null)}
        </div>
      )}
    </div>
  )
}

export default NavBar;