import Checkbox from "./Checkbox"

const TaskList = ( { list, taskList } ) => {

    const checkBoxes = list.map((item, idx) => <Checkbox key={ idx } data={ item }/> );

    return (
        <div>
            <h2>TaskList</h2>
            <div className="taskList">
                { list.length ? checkBoxes : <p>"No tasks"</p> }

                { list.length ? (<button className="button blue">Delete all done</button>) : null }
            </div>
        </div>
    )
}

export default TaskList