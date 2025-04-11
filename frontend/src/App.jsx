import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
function App() {

  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={[{
      title:"Class",
      description:"8AM to 2PM",
      completed:false
    },{
      title:"Coaching",
      description:"3AM to 5PM",
      completed:false
    },{
      title:"Ground",
      description:"5PM to 7PM",
      completed:false
    }]}></Todos>
    </div>
  )
}

export default App
