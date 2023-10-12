import React from 'react'
import "../common/Header.css";
import { Link,Outlet } from 'react-router-dom';
const HumanR = () => {
  return (
    <>
        <div className='dashmain'> 
          <Link to="dashboard">Dashboard</Link>
          <Link to='studentmom'>StudentMOM</Link>
          <Link to="roomallocation">Room Allocation</Link>
          <Link to ="emailnot">Email Notification</Link>
          <Link to="email">Email</Link>
          <Link to="createuser">Create User</Link>
         
        
       <Outlet />
       </div>
        
    </>
  )
}

export default HumanR;