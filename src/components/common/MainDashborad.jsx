import React from 'react';
import "./Header.css";

import DashHeader from './DashHeader';
import Dashboard from '../Pages/dashboard/Dashboard';
import StudentMOM from '../Pages/dashboard/StudentMOM';
import RoomAllocation from '../Pages/dashboard/RoomAllocation';
import EmailNotification from '../Pages/dashboard/EmailNotification';
import ClassInProgress from '../Pages/dashboard/ClassInProgress';
import Email from '../Pages/dashboard/Email';
import { Outlet, Route, Routes ,Link} from 'react-router-dom';
const MainDashborad = () => {

  return (
    <>
    <div>
    
     <Routes>
        <Route path="/" index element={<Dashboard />} exact/>
        <Route path="/studentmom" element={<StudentMOM />} />
        <Route path="/roomallocation" element={<RoomAllocation />} />
        <Route path="/emailnot" element={<EmailNotification />} />
        <Route path="/email" element={<Email />} />
        <Route path="/classprogress" element={<ClassInProgress />} />    
       </Routes>  
       
       </div>

        
    </>
  )
}

export default MainDashborad;