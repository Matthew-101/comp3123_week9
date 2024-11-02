import React, { useState } from 'react';
import './App.css';

function App() {
  // Using state to store information
  const [info, setInfo] = useState({
    title: 'Welcome to Lab Week 09',
    description: 'This is an exercise to learn about state and props in React.'
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </header>
    </div>
  );
}

export default App;