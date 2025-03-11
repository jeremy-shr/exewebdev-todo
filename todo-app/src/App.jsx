import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddTask from './AddTask'
import { useState } from 'react'

function App() {
  // Use state hook => Variable to store our tasks
  const [tasks, setTasks] = useState([
    { title: "Apply to job", description: "Write cover letter, contact hiring manager." },
    { title: "Catch up on lectures", description: "Missing 2 lectures for x module" },
    { title: "Buy groceries", description: "Milk, eggs, bread, butter" }
  ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/add" element={<AddTask setTasks={setTasks} tasks={tasks} />} />
      </Routes >
    </>
  )
}

export default App
