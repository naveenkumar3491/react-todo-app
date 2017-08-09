import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodosCount from './TodosCount';
import FilterLinks from './FilterLinks';
import constants from '../constants';

const { ALL, ACTIVE, COMPLETED } = constants;

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
        this.state = {
            searchTerm: '',
            currentFilter: ALL,
            todos: []
        }
    }
    handleNewTodoItem() {
        this.setState(({ searchTerm, todos }) => {
            const todoItem = {
                todo: searchTerm,
                id: Date.now().toString(),
                completed: false
            }
            // todos = todos.concat(todoItem);
            todos = [...todos, todoItem];
            return {
                todos: todos,
                searchTerm: ''
            }
        })
    }
    handleDeleteBtnClick(evt) {
        const id = evt.target.value;
        this.setState(({ todos }) => {
            todos = todos.filter(({ id: todoId }) => todoId !== id);
            return {
                todos: todos
            }
        });
    }
    handleCheckboxClick(evt) {
        const id = evt.target.value;
        this.setState(({ todos }) => {
            const index = todos.findIndex(({ id: todoId }) => todoId === id);
            const { todo, completed } = todos[index];
            todos = [
                ...todos.slice(0, index),
                {
                    todo: todo,
                    id: id,
                    completed: !completed
                },
                ...todos.slice(index + 1)
            ];
            return {
                todos: todos
            }
        });
    }
    handleFilterChange(evt, currentFilter) {
        evt.preventDefault();
        this.setState(() => ({currentFilter: currentFilter}));
    }
    filterTodos() {
        const { todos, currentFilter, searchTerm } = this.state;
        const filteredTodos = todos.filter(({ todo, completed }) => {
            if (todo.indexOf(searchTerm) === -1 || currentFilter === COMPLETED && !completed || currentFilter === ACTIVE && completed) {
                return false;
            }
            return true;
        });
        return filteredTodos;
    }
    handleSearchTerm(searchTerm) {
        this.setState(() => ({searchTerm: searchTerm}));
    }
    render() {
        const todos = this.filterTodos();
        const {
            state: { searchTerm, currentFilter },
            handleSearchTerm,
            handleNewTodoItem,
            handleFilterChange,
            handleDeleteBtnClick,
            handleCheckboxClick
        } = this;
        return (
            <div>
                <TodoForm todoText={searchTerm} searchonField={handleSearchTerm} onNewTodoItem={handleNewTodoItem} />
                <FilterLinks currentFilter={currentFilter} onFilterChange={handleFilterChange} />
                <TodoList todos={todos} onDelteBtnClick={handleDeleteBtnClick} onCheckboxClick={handleCheckboxClick} />
                <TodosCount todosCount={todos.length} />
            </div>
        );
    }
}

export default Todo;