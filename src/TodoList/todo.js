import React, { useEffect, useState } from 'react';
import Addtask from './Addtask';
import './todo.css';
import Listtask from './listtask';


export default function Todo() {
  const [task, setTask] = useState([
  
  ]);
  useEffect(()=>{
    document.title=`you have ${task.length} pending task(s)`
  })


  const AddTaskfn=(title)=>{
    const addtaskarr=[...task,{title}]; 
    setTask(addtaskarr);  //{title }  title
    console.log(addtaskarr);
  
  }
  const removeTask=(index)=>{   //event poole index koduthaal index number onclikil kittum 
     const newTask=[...task];
    newTask.splice(index,1);
    setTask(newTask);
  }
 
  


  return (
    <>
      <div className="todo-container">
        <h1><u>Todo List</u></h1>
        <div className='todo-add-task'>
          <Addtask  addtaskfn={AddTaskfn} />
        </div>

        <div className='todo-see-list'>
        {task.map((value,index)=>(
          <Listtask  value={value}  removetask={removeTask}   index={index}/>
        ))}
        </div>
      </div>
    </>
  );
}
