import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import AddTask from './AddTask'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
      </Routes >
    </>
  )
}

export default App
