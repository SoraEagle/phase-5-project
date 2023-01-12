import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/users/usersSlice';

function LoginForm({username, setUsername, password, setPassword}){
    const dispatch = useDispatch();
    let isLoading = false;

    const userData = {
        username: username,
        password: password,
        errors: null
    }

    function handleSubmit(e){
        e.preventDefault();
        isLoading = true;
        dispatch(login(userData));
        isLoading = false;
    }
  return (
    <div>
        <section className="heading">
            <h1>
            <p>Log In</p>
            </h1>
        </section>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text"
                    id='username' value={username}
                    placeholder='Username'
                    autoComplete="off" onChange={e => {userData.username = e.target.value}}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password"
                    id='password' value={password}
                    placeholder='Password'
                    autoComplete="off" onChange={e => {userData.password = e.target.value}}
                />
            </div>
            <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
            <div>
                {
                    userData.errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))
                }
            </div>
        </form>
    </div>
  );
}

export default LoginForm;