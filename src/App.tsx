import React from 'react';
import './App.css';
import { createStore, useStore, SetStateType, DispatchType } from 'react-hookstore';
import Component1 from './Component1';
import Component2 from './Component2';
import { MyState } from './MyState';
import * as _ from 'lodash';

createStore("store1", new MyState());

export const updateMyState = (state: MyState, setState: SetStateType<MyState> | DispatchType<MyState>, stateChanger: (state: MyState) => void) => {
  const q = _.cloneDeep(state) as MyState;
  stateChanger(q);
  setState(q);
}

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
