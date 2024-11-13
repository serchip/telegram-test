import React, { useReducer, useEffect } from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Квиз</h1>
      <Quiz />
    </div>
  );
}

export default App;