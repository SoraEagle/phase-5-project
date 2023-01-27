import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDecks } from './decksSlice';

function Deck(){
    const dispatch = useDispatch();
    const params = useParams();
    const decks = useSelector((state) => state.decks.entities);

    useEffect(() => {
        dispatch(fetchDecks());
    }, [dispatch]);
  return (
    <div>
        Deck
    </div>
  )
}

export default Deck;