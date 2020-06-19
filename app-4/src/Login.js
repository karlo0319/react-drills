import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super()
        this.events = {
            username: '',
            password: ''
        }
        this.userLogin = this.userLogin.bind(this)
    }

    userInput(val) {
        this.setState({username: val})
    }

    passInput(val) {
        this.setState({password: val})
    }

    userLogin(val) {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    
    render() {
        return (
            <div>
               <input className='inputLine' onChange={(e) => this.userInput(e.target.value)} />
               <input className='inputLine' onChange={(e) => this.passInput(e.target.value)} />
               <button className ="confirmationButton" onClick={this.userLogin}> Login </button>   
            </div>
        )
    }
}