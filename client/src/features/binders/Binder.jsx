import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Binder(){
    const params = useParams();
    const binders = useSelector((state) => state.binders.entities); // Find the Binder User is viewing!!!

    console.log(params);
  return (
    <div>
        Binder
    </div>
  )
}

export default Binder;