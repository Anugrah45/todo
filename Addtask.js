import React from 'react'
import { useState } from 'react'

function Addtask({addTask}) {
    const[value,setValue]=useState("")

    const addItem=()=>
    {
        addTask(value)
        setValue("")
    }
  return (
    <div>
        <input className='input' type="text"value={value} placeholder='Add new task here...' onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={addItem} className='button'>Add</button>
        
    </div>
  )
}

export default Addtask