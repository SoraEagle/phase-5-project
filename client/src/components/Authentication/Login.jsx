import React, {useState} from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UserInput from '../../features/users/UserInput';

function Login({currentUser, onLogin, errors, setErrors, isLoading, setIsLoading}){
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div>
        {showLogin ? (
            <div>
                <LoginForm onLogin={onLogin}
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword}
                    errors={errors} setErrors={setErrors}
                    isLoading={isLoading} setIsLoading={setIsLoading}
                />
                <p>Don't have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </div>
        ) : (
            <div>
                {/* <SignupForm onLogin={onLogin}
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword}
                    errors={errors} setErrors={setErrors}
                    isLoading={isLoading} setIsLoading={setIsLoading}
                /> */}
                <UserInput currentUser={currentUser} onLogin={onLogin} 
                    username={username} setUsername={setUsername}
                    password={password} setPassword={setPassword}
                    errors={errors} setErrors={setErrors}
                />
                <p>Already have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(true)}>Log In</button>
            </div>
        )}
    </div>
  );
}

export default Login;