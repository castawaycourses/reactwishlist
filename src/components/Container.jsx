import { useState } from "react"
import TaskList from "./TaskList"
import TodoForm from "./TodoForm"

const Container = () => {
    const [taskList, setTaskList] = useState([]);

    const addItem = (item) => {
        setTaskList([...taskList, item]);
    }

    return (
        <div>
            <h2>Container</h2>
            <TodoForm addItemHandler={ addItem } />
            <TaskList list={ taskList } setList={ setTaskList } />
        </div>
    )
}

export default Container