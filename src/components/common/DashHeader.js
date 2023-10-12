import React, { useState } from 'react';
import { Dashmenus} from './Menuitems';
import { Link, Outlet } from 'react-router-dom';
import "./Header.css";

const DashHeader = () => {
    const [click , setClick] = useState(false)
    
  return (
    <>
        <div className='dashmain'>
        
            
          {/* <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            {Dashmenus.map((item, index) => {
              return(
                <li key={index}>
                <Link to={item.url} className={item.cName}>{item.title}</Link>

                </li>
              );

            })}
                  
            </ul>
            </nav> */}
      </div>
    </>
  )
}

export default DashHeader;