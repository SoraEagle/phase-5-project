import React from 'react';
import Binder from './Binder';

function Binders(){
  return (
    <div>
        <h3>My Binders</h3>
        <ul>
            {Binders.map((b) => (
                <Binder key={b.id} binder={b} />
            ))}
        </ul>
    </div>
  )
}

export default Binders;