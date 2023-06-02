import React from 'react';
import { Link } from 'react-router-dom';

function BinderLink({binder}){
    return (
        <div id='link'>
            <img id='image' 
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