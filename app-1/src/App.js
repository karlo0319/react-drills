import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
  
    this.state = {
        inputValue: ''
    }
  }

  handleChange(val) {
    this.setState({inputValue: val});
  }

render() {
  return (
    <div className = 'App'>
      <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
      <p> {this.state.inputValue} </p>
    </div>
    );
  }
}

export default App;
