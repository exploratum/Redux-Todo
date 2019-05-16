import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Todos from './components/Todos'


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        Todo List
      </header>
    </div>

    <Route path='/' component={Todos}/>
    </>
  );
}

export default App;
