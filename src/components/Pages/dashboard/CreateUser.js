import React from 'react';
import { useState } from 'react';
import "../dashboard/Dashboard.css";

const CreateUser = () => {
    const [data, setData] = useState(undefined);
 
    const options = [
        "Admin",
        "SIS Admin",
        "Tech Admin",
        "React",
        "Redux",
    ];
    const onOptionChangeHandler = (event) => {
        setData(event.target.value);
      
    };

  return (
    <>
    <div className='dashmain1'>
    <div className="userContainer">
      <div>
      <select onChange={onOptionChangeHandler}>
                <option>-Select User Type -</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>
                            {option}
                        </option>
                    );
                })}
            </select>
            </div>
       <div className='userBox'>
        <div className='box1'>
            <label>Name :</label>
            <input type='text' placeholder='Name'></input>
        </div>
        <div className='box1'>
            <label>Mobile No.</label>
            <input type='text' placeholder='Phone No'></input>
        </div>
        <div className='box1'>
            <label> Email ID :</label>
            <input type='text' placeholder='Email'></input>
        </div>
        <button type='submit'>GO</button>
        </div>

</div>
    </div>

    </>
  )
}

export default CreateUser;