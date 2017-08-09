import React from 'react';

const TodosCount = ({ todosCount }) => {
    return (
        <div className="well well-small">
            <h4>Total Todos: {todosCount}</h4>
        </div>
    );
}

export default TodosCount;