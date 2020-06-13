
import React, { Component } from 'react'
import Todo from './Todo'
import {Consumer} from '../context'


export class Todos extends Component {
    render() {
        return(
        <Consumer>{value =>{
            const {todos} = value
            return todos.map(e=> <Todo todo={e} key={e.id}></Todo>)
        }
            }</Consumer>
        )
        
    }
}

export default Todos
