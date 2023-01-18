import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../users/usersSlice';
import { newBinder } from './bindersSlice';

function BinderInput(){
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.entities);
  const errors = useSelector((state) => state.binders.errorMessages);
  const [name, setName] = useState("");

  useEffect(() => { // Auto login
    dispatch(fetchUser());
  }, []);

  console.log(user);

  const binder = {
    name: name,
    errors: null
  }

  function handleSubmit(e){
    e.preventDefault();
    dispatch(newBinder(binder));
  }
  return (
    <div>
      <section>
        <h1>
          <p>Create a new binder here</p>
        </h1>
      </section>
      <form id='binders-input' onSubmit={handleSubmit}>
        <label>
          Binder Name
          <input 
            type="text" name="name" value={name} 
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type="submit">Create Binder</button>
        <div>
          {errors?.map((err) => (
              <p id='errors' key={err}>{err}</p>
            ))
          }
        </div>
      </form>
    </div>
  )
}

export default BinderInput;