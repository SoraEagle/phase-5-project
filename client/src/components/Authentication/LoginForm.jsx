import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/users/usersSlice';

function LoginForm(){
    const dispatch = useDispatch();
    let isLoading = false;

    const userData = {
        username: '',
        password: '',
        errors: null
    }

    console.log(userData.username);
    console.log(userData.password);

    function handleSubmit(e){
        e.preventDefault();
        isLoading = true;
        dispatch(login(userData));
        console.log("userData: ", userData);
        isLoading = false;
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text"
                    id='username' value={userData.username}
                    placeholder='Username'
                    autoComplete="off" onChange={e => userData.username = e.target.value}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password"
                    id='password' value={userData.password}
                    placeholder='Password'
                    autoComplete="off" onChange={e => userData.password = e.target.value}
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