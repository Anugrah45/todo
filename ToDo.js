import React from 'react'
import { useState } from 'react'
import Addtask from './Addtask'
import Listtask from './Listtask'

import './ToDo.css'
function ToDo() {
    const[task,setTask]=useState([
        {title:"Learn html"},
        {title:"Learn Css"},
        {title:"Learn java"},
  
    ])
    const addTask=(title)=>
    {
         const newtask=[...task,{title}]
         setTask(newtask)
    }
    const removeTask=(index)=>
    {
        const newtask=[...task]
        newtask.splice(index,1)
        setTask(newtask)
    }



  return (
    <div className='container'>
        <div className='todo-container'>
            <div className='header'>
                  ToDo APP
            </div>
            <div className='add-task'>
                <Addtask addTask={addTask}/>
            </div>
            <div className='list-task'>
            {
                task.map((task,index)=>(
                    <Listtask data={task} removeTask={removeTask} index={index} key={index} />

                )          
                )
            }
                
                 
            </div> 
        </div>
    </div>
  )
}

export default ToDo
