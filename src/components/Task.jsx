import React, { useState } from 'react'


const Task = () => {
    const [value,setValue]=useState()
    const [task,setTask]=useState([])
    const[option,setOption]=useState()
    let options=[
        {value:"complete"},
        {value:"pending"},

    ]

    const addtask=()=>{
        if(value!=="" && task!==""){
            setTask([...task,value])
        }

    }

    const setoption=(e)=>{
       setValue(e.target.value)
    }
   

  return (
    <div>

        <div style={{marginLeft:"35%",marginTop:"3%"}}>
            <input type="text" placeholder='enter task here' onChange={e=>setValue(e.target.value)} value={value}/>
            {/* <select name="" id="" onClick={setvalue}>
            <option value="pending">pending</option>
            <option value="completed">completed</option>
            </select> */}
            <button onClick={addtask}>Add Task</button>
        </div>
    <div style={{display:"flex"}}>


        
       

       <div className=''>
        <h1 className='completed'>completed Task</h1>
        <div style={{display:"flex"}}>

        <div>
        <ol style={{marginLeft:"450%",marginTop:"10%"}}>
            {task.map((tasks)=>(<li>{tasks}</li>))}
        </ol>
        
        </div>

        <div style={{marginLeft:"200%"}}>
            <select name="" id="" onChange={setoption}></select>
            {options.map(option=>(<option value={option.value}></option>))}
        </div>

        </div>
        
       </div>
       <div className=''>
        <h1 className='pending'>Pending Task</h1>
        
       </div>

      
    </div>
    </div> 
  )
}

export default Task
