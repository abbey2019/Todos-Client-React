import React from 'react';
import './App.css';
import Header from './components/header'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
import {Provider} from './context'

function App() {
  return (
    <Provider > 
    <div className="app-container">
      <Header/>
      <AddTodo />
      <Todos />
    </div>
    </Provider>
  );
}

export default App;

