import './App.css'
import Task from './Task'
import { NavLink } from 'react-router-dom'

function Home({ tasks }) {
    console.log(tasks);
    return (
        <div className='App'>
            <h1>Welcome to my todo app</h1>
            <NavLink className='addTaskButton' to='/add'>
                Add
            </NavLink>
            <div className='container'>
                {tasks.map((task, index) => (
                    <Task key={index} title={task.title} description={task.description} />
                ))}
            </div>
        </div>
    )
}

export default Home
