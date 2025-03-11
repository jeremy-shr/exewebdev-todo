import './App.css'
import Task from './Task'
import { NavLink } from 'react-router-dom'

function Home() {

    return (
        <div className='App'>
            <h1>Welcome to my todo app</h1>
            <NavLink className='addTaskButton' to='/add'>
                Add
            </NavLink>
            <div className='container'>
                <Task title="Apply to job" description="Write cover letter, contact hiring manager." />
                <Task title="Catch up on lectures" description="Missing 2 lectures for x module" />
            </div>
        </div>
    )
}

export default Home
