import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/users/usersSlice';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import BindersContainer from './features/binders/BindersContainer';
import DecksContainer from './features/decks/DecksContainer';
import LoginForm from './components/Authentication/LoginForm';
import UserInput from './features/users/UserInput';

function App(){
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.entities);

  useEffect(() => { // Auto login
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <div id="App" className="App">
        {(user && !user.errors) ? <h1>Logged In!</h1> : null}
        <NavBar />
        <Routes>
          <Route exact path={"/login"} element={<LoginForm />} />
          <Route exact path={"/signup"} element={<UserInput />} />
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/binders"} element={<BindersContainer />} />
          <Route path={"/decks"} element={<DecksContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;