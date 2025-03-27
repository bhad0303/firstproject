import React, { useContext } from 'react'
import Context from '../services/Context';
import { Navigate } from 'react-router-dom';

function ProudctDetails() {

    const {teacher} = useContext(Context);
    

    if(!teacher){
         return <Navigate to='/product' />
    }

  return (
    <div style={{
       
        
    }}>
      <img src={teacher.avatar} alt="" />
      <h2>{teacher.name}</h2>
      <p>{teacher.email}</p>
    </div>
  )
}

export default ProudctDetails;
