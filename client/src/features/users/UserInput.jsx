import React from 'react';
import { signup } from './usersSlice';
import { useDispatch } from 'react-redux';

// This is basically the Signup form
function UserInput({onLogin, username, setUsername, password, setPassword, errors, setErrors}){
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault();

    const user = {
      username: username,
      password: password,
      errors: null
    }

    dispatch(signup(user));
    debugger
    if(user.errors){
      setErrors(user.errors);
    }
    else{
      setErrors(null);
      onLogin(user);
    }
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
            id='username' name="username" value={username}
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" 
            id='password' name="password" value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="submit">Create Account</button>
      </div>
      <div>
                {
                  errors ?
                (errors?.map((err) => (
                    <p key={err}>{err}</p>
                  ))) : (setErrors(null))
                }
            </div>
    </form>
    </div>
  );
}

export default UserInput;