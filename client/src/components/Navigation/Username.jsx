import React from 'react';
import { useSelector } from 'react-redux';

function Username(){
  const user = useSelector(state => state.users.entities);
  return (
    <div id='username'>
      {(user) ? (<div>
        <p>
          {user.username}
        </p>
      </div>) : (null)}
    </div>
  )
}

export default Username;