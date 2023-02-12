import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/users/usersSlice';

function LoginForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector(state => state.users.errorMessages);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userData = {
        username: username,
        password: password,
        errors: null
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(login(userData));
        if(!userData.errors) navigate('/');
    }
  return (
    <div>
        <section className="heading">
            <h1>Log In</h1>
        </section>
        <form id='login-form' onSubmit={handleSubmit}>
            <div>
                <label>Username
                    <input type="text"
                        id='username' value={username} placeholder='Username'
                        autoComplete="on" onChange={e => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>Password
                    <input type="password"
                        id='password' value={password} placeholder='Password'
                        autoComplete="off" onChange={e => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Login</button>
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

export default LoginForm;