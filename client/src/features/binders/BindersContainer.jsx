import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBinders } from './bindersSlice';
import BinderInput from './BinderInput';
import Binders from './Binders';

function BindersContainer(){
  const dispatch = useDispatch();
  const binders = useSelector((state) => state.binders.entities);

  useEffect(() => {
    dispatch(fetchBinders());
  }, [dispatch]);
  return (
    <div>
      <BinderInput />
      <Binders binders={binders} />
    </div>
  );
}

export default BindersContainer;