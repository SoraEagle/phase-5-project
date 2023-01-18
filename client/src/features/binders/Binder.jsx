import React from 'react';

function Binder({binder}){
    return (
    <div>
        <li>
            {binder.name}
        </li>
    </div>
  );
}

export default Binder;