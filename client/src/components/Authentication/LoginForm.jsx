import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/users/usersSlice';

function LoginForm({username, setUsername, password, setPassword}){
    const dispatch = useDispatch();
    const errors = useSelector((state) => state.users.errorMessages);
    let isLoading = false;

    const userData = {
        username: username,
        password: password,
        errors: null
    }

    function handleSubmit(e){
        e.preventDefault();
        isLoading = true;
        console.log(userData);
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
                    autoComplete="on" onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password"
                    id='password' value={password}
                    placeholder='Password'
                    autoComplete="off" onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
            <div>
                {
                    errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))
                }
            </div>
        </form>
    </div>
  );
}

export default LoginForm;