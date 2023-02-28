import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Task from './Task'

function Allroute() {
  return (
   
   <Routes>
    <Route path="/task" element={<Task/>}></Route>
    <Route path='/' element={<Register/>}/>
   </Routes>
   
  )
}

export default Allroute
