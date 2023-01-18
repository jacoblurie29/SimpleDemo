import React from 'react';
import './App.css';
import ReactCounter from './features/ReactCounter/ReactCounter';
import ReduxCounter from './features/ReduxCounter/ReduxCounter';

function App() {
  return (
    <div className="App">
       <ReactCounter />
       <ReduxCounter />
    </div>
  );
}

export default App;
