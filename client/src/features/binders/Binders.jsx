import React from 'react';
import { useSelector } from 'react-redux';
import BinderLink from './BinderLInk';

function Binders(){
  const binders = useSelector(state => state.binders.entities);
  console.log(binders);
  return (
    <div>
      <h3>Binders</h3>
      {(binders.length > 0) ? (
        <ul id='list'>
        {binders.map((b) => {
          return <BinderLink key={b.id} binder={b} />
        })}
      </ul>
      ) : (
        <h1>You have no Binders. Please create some!</h1>
      )}
    </div>
  );
}

export default Binders;