import React, {useState} from 'react';
import LoginForm from './LoginForm';
import UserInput from '../../features/users/UserInput';

function Login(){
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div>
        {showLogin ? (
            <div>
                <LoginForm username = {username} setUsername = {setUsername} password = {password} setPassword = {setPassword} />
                <p>Don't have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </div>
        ) : (
            <div>
                <UserInput username = {username} setUsername = {setUsername} password = {password} setPassword = {setPassword} />
                <p>Already have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(true)}>Log In</button>
            </div>
        )}
    </div>
  );
}

export default Login;