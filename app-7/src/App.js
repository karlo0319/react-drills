import React, { Component } from 'react';
import NewTask from './Component/NewTask';
import List from './Component/List';
import './App.css';

export default class App extends Component {
  constructor() {

    super();
    this.state ={
      taskArr: []
    }
  }

  addTask = (val) => {
    this.setState({taskArr: [...this.state.taskArr, val]})
  }
  
  render() {
  return (
    <div className="App">
      <h1> My to-do list </h1>
      <NewTask addTask={this.addTask} />
      <List taskArr={this.state.taskArr} />
    </div>
    );
  }
}
