import React from 'react';
import BinderLink from './BinderLInk';

function Binders({binders}){
  return (
    <div>
        <h3>Binders</h3>
        <ul>
            {binders.map((b) => {
                return <BinderLink key={b.id} binder={b} />
            })}
        </ul>
    </div>
  );
}

export default Binders;