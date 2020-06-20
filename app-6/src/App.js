import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      taskInput: "",
      listInput: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }


  handleInput(val) {
    this.setState({taskInput: val})
  }

  addTodoList() {
    this.setState({
      listInput: [this.state.taskInput, ...this.state.listInput],
      taskInput: ""
    });
  }



  render() {
    let listInput = this.state.listInput.map(function (element, i) {
      return <Todo key={i} task={element} />
    });

    return (
      <div className="App">
        <h1> My to-do List: </h1>
        <div>
        <input value={this.state.taskInput} placeholder="Enter new task" onChange={(e) => this.handleInput(e.target.value)} />
        <button onClick={this.addTodoList}> Add </button>
       </div>
       {listInput}
      </div>
    );
  }
}
