import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/users/usersSlice';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import Login from './components/Authentication/Login';
import BindersContainer from './features/binders/BindersContainer';

function App(){

  const dispatch = useDispatch();
  const user = useSelector((state) => state.entities);

  useEffect(() => { // Auto login
    dispatch(fetchUser());
  }, []);

  if(!user) return (
    <Router>
      <Login />
    </Router>
  )

  return (
    <Router>
      <div id="App" className="App">
      {user ? <h1>Logged In!</h1> : null}
      <NavBar />
      <Routes>
        <Route path={"/"} element={<BindersContainer />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;