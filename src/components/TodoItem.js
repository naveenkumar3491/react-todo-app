import React from 'react';

const TodoItem = ({ todoItem: { todo, id, completed }, onCheckboxClick, onDeleteBtnClick}) => {
    return (
        <li className="list-group-item">
            <h3>
            <input type="checkbox" className="pull-left" checked={completed} value={id} onChange={onCheckboxClick}/>
            {todo}
                <button onClick={onDeleteBtnClick}
                    value={id}
                    className="btn btn-default btn-danger pull-right">
                    Delete
            </button>
            </h3>
        </li>
    );
}


export default TodoItem;