import React, { Component } from 'react';

export default class Todo extends Component {
    render() {
        return <h4> {this.props.task} </h4>;
    }
}