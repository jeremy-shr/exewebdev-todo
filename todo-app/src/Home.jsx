import './App.css'
import Task from './Task'

function Home() {

    return (
        <div className='App'>
            <h1>Hello</h1>
            <h3>Welcome to my todo app</h3>
            <div className='container'>
                <Task title="Apply to job" description="Write cover letter, contact hiring manager." />
                <Task title="Catch up on lectures" description="Missing 2 lectures for x module" />
            </div>
        </div>
    )
}

export default Home
