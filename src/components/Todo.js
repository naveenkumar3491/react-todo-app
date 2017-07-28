var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');
var TodosCount = require('./TodosCount');

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
        this.state = {
            todos: []
        }
    }
    handleNewTodoItem(todo){
        this.setState(function(prevState){
            var todos = prevState.todos.concat(todo);
            return{
                todos: todos
            }
        })
    }
    handleDeleteBtnClick(evt){
        var index = +(evt.target.value);
        this.setState(function(prevState){
            var todos = prevState.todos;
            //todos.splice(index, 1);  //prefer not to mutate the state object
            todos = todos.slice(0, index).concat(todos.slice(index + 1));
            return{
                todos: todos
            }
        });
    }
    render(){
        var todos = this.state.todos;
        return(
            <div>
                <TodoForm onNewTodoItem = {this.handleNewTodoItem}/>
                <TodoList todos={todos} onDelteBtnClick={this.handleDeleteBtnClick}/>
                <TodosCount todosCount = {todos.length}/>
            </div>
        );
    }
}

module.exports = Todo;