import React, {useState} from 'react';
import LoginForm from './LoginForm';
import UserInput from '../../features/users/UserInput';

function Login(){
    const [showLogin, setShowLogin] = useState(true);

    return (
    <div>
        {showLogin ? (
            <div>
                <LoginForm />
                <p>Don't have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </div>
        ) : (
            <div>
                <UserInput />
                <p>Already have an account? &nbsp;</p>
                <button onClick={() => setShowLogin(true)}>Log In</button>
            </div>
        )}
    </div>
  );
}

export default Login;