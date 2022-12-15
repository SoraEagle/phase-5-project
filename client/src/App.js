import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import Login from './components/Authentication/Login';
import BindersContainer from './features/binders/BindersContainer';

function App(){
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(() => { // Auto login
    fetch("/me").then((r) => {
      if(r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  if(!currentUser) return (
    <Router>
      <Login currentUser={currentUser} onLogin={setCurrentUser} errors={errors} setErrors={setErrors} isLoading={isLoading} setIsLoading={setIsLoading} />
    </Router>
  )

  return (
    <Router>
      <div id="App" className="App">
      {currentUser ? <h1>Logged In!</h1> : null}
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} setErrors={setErrors} />
      <Routes>
        <Route path={"/"} element={<BindersContainer currentUser={currentUser} />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;