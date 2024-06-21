import { useState } from 'react'
import Header from './componnets/Header'
import ShowTask from './componnets/ShowTask'
import AddTask from './componnets/AddTask'
import './App.css'

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});



  return (
    <div className='App'>
      <Header />
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask} />
    </div>
  )
}

export default App
