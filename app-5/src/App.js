import React, { Component } from 'react';
import './App.css';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={'https://coleandmarmalade.com/wp-content/uploads/2019/06/cat-4052454_640.jpg'}/>
      </div>
    );
  }
}

export default App;
