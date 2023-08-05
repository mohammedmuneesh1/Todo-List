import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ({addtaskfn}) {
  const [value,setValue]=useState("");

  const check=(e)=>{
    e.preventDefault();
    console.log(value);
    setValue("");
  }
  const additem=()=>{
    addtaskfn(value);

  }
  return (
    <div className='add-task'>
      <form onSubmit={check}>
         <input type="text" id="t1" value={value} placeholder="Add A New Task"
         onChange={(e)=>setValue(e.currentTarget.value)} 
         required
         />

        <Button onClick={additem} type="submit" variant="primary" id="add-task-btn" >Add Task</Button>
        </form>
    </div>
  )
}


