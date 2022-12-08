import React from 'react';
import {headers} from "../../Globals";

function LoginForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){
    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({username, password})
        }).then((user) => {
            setIsLoading(false);
            user.json().then((user) => {
                if(user.errors) setErrors(user.errors);
                else{
                    setErrors(null);
                    onLogin(user);
                }
            });
        });
    }
  return (
    <div onSubmit={handleSubmit}>
        <form>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text"
                    id='username' value={username}
                    autoComplete="off" onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="text"
                    id='password' value={password}
                    autoComplete="off" onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">
                {isLoading ? "Loading..." : "Login"}
            </button>
            <div>
                {errors?.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    </div>
  );
}

export default LoginForm;