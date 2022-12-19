import React, {useState} from 'react';

function BinderInput({onBinderSubmit}){
  const [name, setName] = useState("");

  function handleInputChange(e){
    setName(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    onBinderSubmit(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Binder Name
        <input 
          type="text" name="name"
          value={name} onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Binder</button>
    </form>
  )
}

export default BinderInput;