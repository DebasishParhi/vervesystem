import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Register from './components/Register'
import { Routes,Route } from 'react-router-dom'
import Task from './components/Task'
import Allroute from './components/Allroute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Register/> */}
      <Allroute/>
    </div>
  )
}

export default App
