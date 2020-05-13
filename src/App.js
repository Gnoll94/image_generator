import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <canvas id="stockGraph" width="150" height="150">
            current stock price: $3.15 + 0.15
        </canvas>
    </div>
  );
}

export default App;
