import React, { Component } from 'react';
import './App.css';

export default class Image extends Component {
    render() {
     return (
      <div className="App">
        <img src= {this.props.url} />
        <h1> 409 </h1>
        <h3> Conflict </h3>
      </div>
    );
  }
}
