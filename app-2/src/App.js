import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      dataArr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    let dataArrMap = this.state.dataArr.map(function (element, index) {
      return (
        <h2 key={index}> {element} </h2>
      )
    })
    return (
      <div className="App">
       {dataArrMap} 
      </div>
    );
  }
}

export default App;
