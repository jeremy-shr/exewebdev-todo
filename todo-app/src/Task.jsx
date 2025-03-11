import './Task.css'
import { useState } from 'react';

const Task = ({ title, description }) => {
    // Use state is like a variable for the component which is dynamic

    const [completed, setCompleted] = useState(false);
    console.log(completed)

    return (
        <div className={`${completed ? 'taskContainerCompleted' : 'taskContainer'}`}>
            <p className='title'>{title}</p>
            <p>{description}</p>
            <div className='button' onClick={() => { setCompleted(!completed) }}>
                Click to complete
            </div>
        </div>
    );
}

export default Task;

// Tailwind CSS for styling