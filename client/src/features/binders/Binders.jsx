import React from 'react';
import Binder from './Binder';

function Binders({binders}){
  return (
    <div>
        <h3>Binders</h3>
        <ul>
            {binders.map((b) => {
                return <Binder key={b.id} binder={b} />
            })}
        </ul>
    </div>
  );
}

export default Binders;