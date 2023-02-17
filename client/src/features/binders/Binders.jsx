import React from 'react';
import { useSelector } from 'react-redux';
import BinderLink from './BinderLInk';

function Binders(){
  const binders = useSelector(state => state.binders.entities);
  return (
    <div>
      <h3>Binders</h3>
      {binders ? (
        <ul id='list'>
        {binders?.map((b) => {
          return <BinderLink key={b.id} binder={b} />
        })}
      </ul>
      ) : (
        <h1>Something went wrong!  Please try again.</h1>
      )}
    </div>
  );
}

export default Binders;