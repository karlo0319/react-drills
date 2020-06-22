import React, { Component } from 'react';
import Todo from './Todo';

export default class List extends Component {
   render() {
        const {taskArr} = this.props
        const mappedTaskArr = taskArr.map((element, i) => {
            return <Todo key={i} task={element} />
        })
        return (
            <p> {mappedTaskArr} </p>
        )
    }
}