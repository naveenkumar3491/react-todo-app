import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelteBtnClick, onCheckboxClick }) => {
    const todoList = todos.map(todo => (
        <TodoItem
            todoItem={todo}
            key={todo.id}
            onDeleteBtnClick={onDelteBtnClick}
            onCheckboxClick={onCheckboxClick} />
    ))
    return (
        <ul className="list-group">
            {todoList}
        </ul>
    )
}

export default TodoList;