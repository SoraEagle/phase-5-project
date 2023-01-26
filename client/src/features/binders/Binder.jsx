import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBinders } from './bindersSlice';
import DeckLink from '../decks/DeckLink';
import DeckInput from '../decks/DeckInput';

function Binder(){
    const dispatch = useDispatch();
    const params = useParams();
    const binders = useSelector((state) => state.binders.entities);
    
    useEffect(() => {
      dispatch(fetchBinders());
      // Grab the specific Binder object
    }, [dispatch]);

    const myBinder = binders.filter(b => {
      return (b.id.toString() === params.id);
    })
    console.log(myBinder);

    binders.map((b) => {
      console.log(b);
    });
  return (
    <div>
      {binders.map((b) => {
        if(b.id.toString() === params.id){ // Check for the corresponding Binder
          console.log("This Binder's Decks: ", b.decks);
          return (
              <div>
                {/* <h3>{b.name}</h3>
                <DeckInput binder={b} />
                  <p key={b.decks}>{b.decks}</p>
                  {(b.decks).map((deck) => {
                    <DeckLink key={deck.id} deck={deck} />
                  })} */}
              </div>
          );
        }
      })}
    </div>
  )
}

export default Binder;