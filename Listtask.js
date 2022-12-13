import React from 'react'

import {MdDelete} from 'react-icons/md'
function Listtask({data,index,removeTask}) {
  return (
    <div>
        <div className='listtask'>
            {data.title}
             <MdDelete onClick={()=>{removeTask(index)}} className='delete-btn'/>

        </div>
    </div>
  )
}

export default Listtask
//hi
