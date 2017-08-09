import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);  
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputTextChangeEvt = this.handleInputTextChangeEvt.bind(this);
    }
    handleFormSubmit(evt){
        evt.preventDefault();
        this.props.onNewTodoItem();
    }
    handleRefInputEvent(inputRef){
        inputRef.focus();
    }   
    handleInputTextChangeEvt(evt){
        const todoText = evt.target.value;
        this.props.searchonField(todoText);
    }
    render(){
        const { todoText } = this.props;
        return(
            <form className="form-group" onSubmit = {this.handleFormSubmit}>
                <input 
                className="form-control" 
                type="text" placeholder="Add or Search Todo Item" 
                ref={this.handleRefInputEvent}
                value={todoText}
                onChange={this.handleInputTextChangeEvt}/>
            </form>
        );
    }
}

export default TodoForm;