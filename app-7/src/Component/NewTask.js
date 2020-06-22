import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor() {
        
        super();
        this.state = {
            taskInput:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addTaskButton = () => {
        const {addTask} = this.props
        //replacing this.props.addTask below by destructuring
        addTask(this.state.taskInput)
        this.setState({taskInput: ''})
    }

    render() {
        return (
            <div>
                <input 
                    name='taskInput'
                    value= {this.state.taskInput}
                    placeholder='Enter new task' 
                    onChange={(e) => this.handleChange(e)} />
                <button onClick={this.addTaskButton} > Add </button>
            </div>
        )
    }
}
