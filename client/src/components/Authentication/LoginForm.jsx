import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/users/usersSlice';

function LoginForm(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.users.errorMessages);
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
        if(!userData.errors) navigate('/binders');
    }
  return (
    <div>
        <section id='heading' className="heading">
            <h1>
            <p>Log In</p>
            </h1>
        </section>
        <form id='login-form' onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
            <div>
                {errors?.map((err) => (
                    <p id='errors' key={err}>{err}</p>
                ))}
            </div>
        </form>
    </div>
  );
}

export default LoginForm;