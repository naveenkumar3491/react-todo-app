var React = require('react');

var TodoItem = function (props) {
    return (
        <li className="list-group-item">
            <h3>{props.todo}
            <button onClick={props.onDeleteBtnClick} 
                    value={props.index}
                    className="btn btn-default btn-danger pull-right">
                Delete
            </button>
            </h3>
        </li>
    );
}

module.exports = TodoItem;