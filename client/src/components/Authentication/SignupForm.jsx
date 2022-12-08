import React from 'react';
import {headers} from "../../Globals";

function SignupForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){
    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({user: {username, password}})
        }).then((user) => {
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
    <div id="signup">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input type="text" id="username" value={username}
                    autoComplete="off"
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="text" id="password" value={password}
                    autoComplete="off"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input type="submit" value={isLoading ? "Loading..." : "Sign Up"} />
            <div>
                {errors?.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    </div>
  );
}

export default SignupForm;