var React = require('react');

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = null;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleRefInputEvent = this.handleRefInputEvent.bind(this);
    }
    handleFormSubmit(evt){
        evt.preventDefault();
        this.props.onNewTodoItem(this.inputRef.value);
        this.inputRef.value = '';
    }
    handleRefInputEvent(inputRef){
        this.inputRef = inputRef;
    }
    render(){
        return(
            <form className="form-group" onSubmit = {this.handleFormSubmit}>
                <input className="form-control" type="text" placeholder="Add Todo Item" ref={this.handleRefInputEvent}/>
            </form>
        );
    }
}

module.exports = TodoForm;