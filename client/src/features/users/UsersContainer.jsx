import React from 'react';
import { useDispatch } from 'react-redux';
import UserInput from './UserInput';
import { userAdded } from './usersSlice';

function UsersContainer({currentUser, onLogin, username, setUsername, password, setPassword, errors, setErrors}){
  const dispatch = useDispatch();

  function handleUserSubmit(user){
    console.log(user.errors);
    dispatch(userAdded({user: {username, password}}));
    if(user.errors) setErrors(user.errors);
    else{
      setErrors(null);
      onLogin(user);
    }
  }
  return (
    <div>
        <UserInput 
          onUserSubmit={handleUserSubmit}  
          onLogin={onLogin} 
          username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          errors={errors} setErrors={setErrors}
        />
    </div>
  )
}

export default UsersContainer;