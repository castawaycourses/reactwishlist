import { useState } from "react"

const TodoForm = () => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskName);
        setTaskName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todoList">
                <div className="taskInput">
                    <input 
                        type="text"
                        className="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>
                <button 
                    className="button pink"
                    disabled={taskName ? "": "disabled"}>
                    Add
                </button>

            </div>
        </form>
    )
}

export default TodoForm