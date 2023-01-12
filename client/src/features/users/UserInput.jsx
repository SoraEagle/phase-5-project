import React from 'react';
import { signup } from './usersSlice';
import { useDispatch } from 'react-redux';

// This is basically the Signup form
function UserInput({username, setUsername, password, setPassword}){
  const dispatch = useDispatch();

  const userData = {
    username: username,
    password: password,
    errors: null
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(signup(userData));
  }
  return (
    <div>
      <section className="heading">
        <h1>
          <p>Please create an account</p>
        </h1>
      </section>
      <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <input type="text" 
            id='username' name="username" value={userData.username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" 
            id='password' name="password" value={userData.password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
        <button type="submit">Create Account</button>
      <div>
                {
                  userData.errors ?
                    (userData.errors?.map((err) => (
                      <p key={err}>{err}</p>
                    ))) : (userData.errors = null)
                }
            </div>
    </form>
    </div>
  );
}

export default UserInput;