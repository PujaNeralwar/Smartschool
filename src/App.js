import React from 'react';
import "./App.css";

import {Link, Route, Routes} from 'react-router-dom';

import Admission from './components/Pages/Admission';



// import MainDashborad from './components/common/MainDashborad';
import Dashboard from './components/Pages/dashboard/Dashboard';
import StudentMOM from './components/Pages/dashboard/StudentMOM';
import HumanR from './components/Pages/HumanR';
import Finance from './components/Pages/Finance';
import GradeBook from './components/Pages/GradeBook';
import Transport from './components/Pages/Transport';
import Communication from './components/Pages/Communication';
import Concern from './components/Pages/Concern';
import SIS from './components/Pages/SIS';
import Head1 from './components/common/Head1';
import { useState } from 'react';
import { Menuitems } from './components/common/Menuitems';
import Footer from './components/common/Footer';
import EmailNotification from './components/Pages/dashboard/EmailNotification';
import Email from './components/Pages/dashboard/Email';
import RoomAllocation from './components/Pages/dashboard/RoomAllocation';
import CreateUser from './components/Pages/dashboard/CreateUser';






const App = () => {
  const [click, setClick] = useState(false)
    
  return (
    <>
     
      <div>
      <Head1 /> 
      <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            {Menuitems.map((items, index) => {
              return(
                <li key={index}>
                <Link to={items.url} className={items.cName}>{items.icons}{items.title}</Link>

                </li>
              );

            })}
                  
            </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>

            </nav>
       <Routes>
        <Route path="/" index  element={<SIS />} />
         
        <Route path="/hr" element={<HumanR/>}>
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='studentmom' element={<StudentMOM/>} />
          <Route path='emailnot' element={<EmailNotification/>} />
          <Route path='email' element={<Email/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='roomallocation' element={<RoomAllocation/>} />
          <Route path ='createuser' element={<CreateUser/>} />
          
          
        </Route>
        <Route path="/finance" element={<Finance />} />
        <Route path="/gradebook" element={<GradeBook />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/transport" element={<Transport />} />
        <Route path='/communication' element={<Communication />} /> 
        <Route path ='/concern' element={<Concern />} /> 

       </Routes> 
       
      
      <Footer />
    
     
     </div>
  
      
    </>
  )
}

export default App;