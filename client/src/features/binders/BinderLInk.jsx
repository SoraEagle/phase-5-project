import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BinderLink({binder}){
    const navigate = useNavigate();
    return (
    <div> {/* Clicking on either the <img> or text MUST navigate the User to an page that shows only that binder's decks */}
        <li id='binder'> {/* Add an <img> that navigates to that binder's route */}
            <div> {/* `/binders/${binder.id}/decks */}
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
        </li>
    </div>
  );
}

export default BinderLink;