import React from 'react';
import { useSelector } from "react-redux";
import BinderInput from './BinderInput';
import Binders from './Binders';

function BindersContainer(){
  const binders = useSelector((state) => state.binders.binders);
  return (
    <div>
      <BinderInput />
      <Binders binders={binders} />
    </div>
  );
}

export default BindersContainer;