import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from './usersSlice';

function UserInput(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.users.entities);
  const errors = useSelector(state => state.users.errorMessages);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userData = {
    username: username,
    password: password,
    errors: null
  }

  useEffect(() => {
    if(user && !user.errors){
      navigate('/');
      setUsername('');
      setPassword('');
    }
  }, [user, navigate]);

  function handleSubmit(e){
    e.preventDefault();
    dispatch(signup(userData));
  }
  return (
    <div id='content'>
      <section>
        <h1>Please create an account</h1>
      </section>
      <form id='input-form' onSubmit={handleSubmit}>
        <div>
          <label>Username
            <input type="text" 
              value={userData.username} placeholder='Username'
              autoComplete="on" onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Password
            <input type="password" 
              value={userData.password} placeholder='Password'
              autoComplete='off' onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create Account</button>
        <div>
          {errors?.map((err) => (
            <p id='errors' key={err}>{err}</p>
            ))
          }
        </div>
      </form>
    </div>
  );
}

export default UserInput;