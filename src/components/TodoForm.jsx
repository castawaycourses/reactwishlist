import { useState } from "react"

import * as uuid from "uuid";

const TodoForm = ({ addItemHandler }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addItemHandler({
            id: uuid.v4(),
            taskName,
            done: false
        });

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