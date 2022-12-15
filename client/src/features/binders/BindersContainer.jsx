import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import BinderInput from './BinderInput';
import { binderAdded } from './bindersSlice';

function BindersContainer(){
  const dispatch = useDispatch();
  const binders = useSelector((state) => state.binders.binders);

  function handleBinderSubmit(name){
    dispatch(binderAdded(name));
  }
  return (
    <div>
      <BinderInput onBinderSubmit={handleBinderSubmit} />
      <ul></ul> {/* Map out a list of the User's Binder objects, with each rendering as an image */}
    </div>
  )
}

export default BindersContainer;