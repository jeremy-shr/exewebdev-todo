import './App.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const AddTask = ({ setTasks, tasks }) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { title, description };
        console.log(newTask);
        setTasks([...tasks, newTask]);
        setTitle("");
        setDescription("");
    };

    return (
        <>
            <h1>This is the Add Task Page</h1>
            <NavLink className='addTaskButton' to='/'>
                Go Back
            </NavLink>
            <form className='addTaskContainer' onSubmit={handleSubmit}>
                <input type='text' value={title} placeholder='Enter Task Title' onChange={(e) => setTitle(e.target.value)} />
                <input type='text' value={description} placeholder='Enter Task Description' onChange={(e) => setDescription(e.target.value)} />
                <button type='submit'>Add Task</button>
            </form>
        </>
    );
}

export default AddTask;