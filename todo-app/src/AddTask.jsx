import './App.css'
import { NavLink } from 'react-router-dom';

const AddTask = () => {
    return (
        <>
            <h1>This is the Add Task Page</h1>
            <NavLink className='addTaskButton' to='/'>
                Go Back
            </NavLink>
        </>
    );
}

export default AddTask;