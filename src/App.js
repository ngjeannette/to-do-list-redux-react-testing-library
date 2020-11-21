import './App.css';
import React from 'react';
import { ToDo } from './features/Todo/Todo';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <ToDo />
      </div>
    </div>
  );
}

export default App;