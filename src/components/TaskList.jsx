import Checkbox from "./Checkbox"

const TaskList = ( { list, setList } ) => {

    const onChangeStatus = (e) => {
        const { name, checked } = e.target;

        const updatedList = list.map( item => ({
            ...item,
            done: item.id === name ? checked: item.done

        }));

        setList(updatedList);    
    }

    const onClickRemoveTask = (e) => {
        e.preventDefault();
        const updatedList = list.filter(item => !item.done);

        setList(updatedList);
    }

    const checkBoxes = list.map((item) => <Checkbox 
                                            key={ item.id } 
                                            taskId={item.id} 
                                            data={ item.taskName } 
                                            done={ item.done } 
                                            onChange={onChangeStatus}/> );

    return (
        <div>
            <h2>TaskList</h2>
            <div className="taskList">
                { list.length ? checkBoxes : <p>"No tasks"</p> }

                { list.length ? (<button className="button blue" onClick={onClickRemoveTask}>Delete all done</button>) : null }
            </div>
        </div>
    )
}

export default TaskList