import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBinder } from './bindersSlice';

function BinderInput(){
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.entities);
  const errors = useSelector(state => state.binders.errorMessages);
  const [userID, setUserID] = useState(null);
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    setUserID(currentUser.id);
    dispatch(newBinder({
      user_id: userID,
      name: name
    }));
    setName("");
  }
  return (
    <div>
      <section>
        <h1>
          <p>Create a new binder here</p>
        </h1>
      </section>
      <form id='binder-input' onSubmit={handleSubmit}>
        <label>
          Binder Name
          <input id='binder-input-name'
            type="text" name="name" value={name} 
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type="submit">Create Binder</button>
        <div>
          {errors?.map((err) => (
            <p id='errors' key={err}>{err}</p>
          ))}
        </div>
      </form>
    </div>
  )
}

export default BinderInput;