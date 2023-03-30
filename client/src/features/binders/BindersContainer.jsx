import React, {useEffect} from 'react';
import { useDispatch } from "react-redux";
import { fetchBinders } from './bindersSlice';
import BinderInput from './BinderInput';
import Binders from './Binders';

function BindersContainer(){
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBinders());
  }, [dispatch]);
  return (
    <div id='content'>
      <BinderInput />
      <Binders />
    </div>
  );
}

export default BindersContainer;