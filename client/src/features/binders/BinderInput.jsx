import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newBinder } from './bindersSlice';

function BinderInput(){
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.binders.errorMessages);
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    dispatch(newBinder({
      name: name
    }));
  }
  return (
    <div id='binder-input'>
      <section>
        <h1>
          <p>Create a new binder here</p>
        </h1>
      </section>
      <form id='binder-form' onSubmit={handleSubmit}>
        <label>
          Binder Name
          <input id='binder-input-input'
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