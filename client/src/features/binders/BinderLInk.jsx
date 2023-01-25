import React from 'react';
import { Link } from 'react-router-dom';

function BinderLink({binder}){
    return (
    <div id='binder'> {/* Clicking on either the <img> or text MUST navigate the User to an page that shows only that binder's decks */}
        <img id='binder-image' 
            // onClick={handleClick}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR19DFLsrFz_7D9N_yGiBNugav84-FEsNjm3Q&usqp=CAU'
            alt={binder.name}
        />
        <p>&nbsp;</p>
        <Link id='linkStyles' to={`/binders/${binder.id}`}>
            {binder.name}
        </Link>
    </div>
  );
}

export default BinderLink;