import React, { useState } from 'react'
import './TodoInput.css';

const TodoInput = () => {
    const [task, setTask] = useState('');
    const handleSubmit = () => { }
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter task" id="task" name="task"
                value={task} onchange={(e) => setTask(e.target.value)} />

            <button>Add Todo</button>
        </form>
    )
}

export default TodoInput;