import React from 'react';
import './App.css';
import { createStore } from 'react-hookstore';
import Component1 from './Component1';
import Component2 from './Component2';
import { MyState } from './MyState';

createStore("mystore", new MyState());

const App: React.FC = () => {
  return (
    <div className="App">
      <Component1 />
      <hr />
      <Component2 />
    </div>
  );
}

export default App;
