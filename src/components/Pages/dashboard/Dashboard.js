import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashmain1'>
      <div className="box">
         <div className='smalldash'>
          <div className='dashhead'> 
            <h5> Student  <span><label> 638</label> <button>Data Checker</button>
            </span> <i class="fa-solid fa-arrows-rotate"></i></h5>
          </div>
          <div className=' contained'>

          </div>
         </div>
        <div className='smalldash'>
         <div className='dashhead'>
         <h5> Staff  <span><i class="fa-solid fa-users"></i> <label>New Joinee</label> 
            </span></h5>
          </div>
          <div className='contained'>
            <div>
            <p><i class="fa-solid fa-chalkboard-user"></i>Teaching staff</p>
            <p><i class="fa-solid fa-user-tie"></i>Non Teaching Staff</p>
            <p><i class="fa-solid fa-people-group"></i>Total Staff</p>
            <p><i class="fa-solid fa-sitemap"></i>Staff Hierarchy</p>
            </div>
            <div>
              <p>21</p>
              <p>12</p>
              <p>33</p>
              <p><i class="fa-solid fa-chevron-right"></i></p>
            </div>

          </div>
         
        </div>
        <div className='smalldash'>
        <div className='dashhead'>
            <label><i class="fa-regular fa-comment"></i> SMS</label>
            <label><i class="fa-solid fa-microphone"></i> Voice</label>
            <label><i class="fa-brands fa-whatsapp" style={{color:'#52e01f'}}></i> Whatsapp</label>
          </div>
          <div className=' contained'>
            <div>
             <p><i class="fa-solid fa-chalkboard-user"></i>Sender Id</p>
              <p><i class="fa-solid fa-user-tie"></i>SMS Count</p>
             <p><i class="fa-solid fa-people-group"></i>Sms Balance</p>
            
            </div>
            <div>
              <p></p>
              <p>0</p>
              <p>0</p>
              <p>Sms Plan</p>
            </div> 
          </div>
          <div>
            <label>Recharge</label>
            <label>Uses</label>
            <label>Know DLT</label>
            <label>Need DLT</label>
          </div>
        </div>
            
     </div>


        <div className="box">
        <div className='smalldash'>
          <div className='dashhead'>
         
            <h5>1 Branch  <span><label> 638</label> <button>Data Checker</button>
            </span> <i class="fa-solid fa-arrows-rotate"></i></h5>
          </div>
          <div className=' contained'>
          <div>
          <p>State<i class="fa-solid fa-chalkboard-user"></i></p>
          </div>
          <div>
            <p>1</p>
          </div>

          </div>
         
        </div>
        <div className='smalldash'>
         <div className='dashhead'>
         <h5> Concern  <span><i class="fa-solid fa-users"></i> <label>New Joinee</label> 
            </span></h5>
          </div>
          <div className='contained'>
            <div>
            <p><i class="fa-solid fa-chalkboard-user"></i>Teaching staff</p>
            <p><i class="fa-solid fa-user-tie"></i>Non Teaching Staff</p>
            <p><i class="fa-solid fa-people-group"></i>Total Staff</p>
            <p><i class="fa-solid fa-sitemap"></i>Staff Hierarchy</p>
            </div>
            <div>
              <p>21</p>
              <p>12</p>
              <p>33</p>
              <p><i class="fa-solid fa-chevron-right"></i></p>
            </div>

          </div>
         
        </div>
        <div className='smalldash'>
           <div className='dashhead'>
           <h5>Inventory</h5>
           </div>
          <div className=' contained'>
            <div>
             <p>0</p>
             <p>Item</p>
             <p>0</p> 
             <p>Sub-Category</p> 
            </div>
            <div>
              <p>0</p>
              <p>Category</p>
              <p>0</p>
              <p>Type</p>
            </div> 
          </div>   
        </div>
        <div className='smalldash'>
           <div className='dashhead'>
           
            <label>Login Status</label>
            <label>Never Login list</label>
            
           </div>
          <div className=' contained'>
            <div>
             <p>Staff</p>
              <p>Devices</p>
             
            </div>
            <div>
              
              <p>0</p>
              <p><i class="fa-brands fa-apple"></i></p>
              
            </div> 
          </div>   
        </div>     
       </div>
      <div className='box'>
       <div className='smalldash'>
        <div className='dashhead'>
           <h5>Automated Email Alert<span>
           <label>Login Status</label>
           <label>Never Login list</label>
           </span></h5>
           
          </div>
       </div>
       </div>


        </div> 
  )
}

export default Dashboard;