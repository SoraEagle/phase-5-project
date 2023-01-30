import React from 'react';
import { useSelector } from 'react-redux';
import BinderLink from './BinderLInk';

function Binders(){
  const binders = useSelector((state) => state.binders.entities);
  return (
    <div>
      <h3>Binders</h3>
      <ul id='binder-list'>
        {binders.map((b) => {
          return <BinderLink key={b.id} binder={b} />
        })}
      </ul>
    </div>
  );
}

export default Binders;