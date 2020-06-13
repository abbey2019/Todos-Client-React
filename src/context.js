import React, { Component } from 'react'

const Context = React.createContext()

const reducer =(prevState , action) =>{
    switch(action.type){
        case "TOOGLE":
        return{ todos : prevState.todos.map(e=>{if(e.id=== action.payload){e.complete = !e.complete}; return e})}

        default:
            return   prevState
    }
}

export class Provider extends Component {

    state={
        todos:[
            {
                id:1,
                title:"check mails",
                complete : true
            },
            {
                id:2,
                title:"check mails",
                complete : false
            },
            {
                id: 3,
                title:"check mails",
                complete : false
            }
    ],
    dispatch:(action)=>this.setState(prevState=> reducer(prevState,action))
    }
    render() {
        return (
            <Context.Provider value={this.state}>


                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer

