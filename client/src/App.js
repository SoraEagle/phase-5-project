import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from './features/users/usersSlice';
import { fetchBinders } from './features/binders/bindersSlice';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import BindersContainer from './features/binders/BindersContainer';
import Flashcards from './features/flashcards/Flashcards';
import LoginForm from './components/Authentication/LoginForm';
import UserInput from './features/users/UserInput';
import Binder from './features/binders/Binder';
import Deck from './features/decks/Deck';

function App(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchBinders());
  }, [dispatch]);

  return (
    <Router>
      <div id='container'>
        <NavBar />
        <Routes>
          <Route exact path={"/login"} element={<LoginForm />} />
          <Route exact path={"/signup"} element={<UserInput />} />
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/binders"} element={<BindersContainer />} />
          <Route path={"/binders/:id"} element={<Binder />} />
          <Route path={"/binders/:binder_id/decks/:id"} element={<Deck />} />
          <Route path={"/flashcards"} element={<Flashcards />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;