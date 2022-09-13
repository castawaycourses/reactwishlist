const Checkbox = ({ taskId, data, done, onChange }) => {
    return (
        <div className="todoBlock">
            <label className="todoItem">{data}
                <input 
                    className="todoCheck" 
                    type="checkbox"
                    name={ taskId }
                    defaultChecked={done}
                    onChange={onChange}
                    />
                <span className="checkMark"></span>
            </label>
        </div>
    )
}

export default Checkbox