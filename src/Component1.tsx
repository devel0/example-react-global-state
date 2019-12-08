import React from 'react';
import { useStore } from 'react-hookstore';
import { MyState } from './MyState';
import { updateMyState } from './App';

export default function Component1() {
    const [myState, setMyState] = useStore<MyState>("store1");

    return <div>
        <h3>Component1</h3>
        clicksCount:{myState.clicksCount}<br />
        name:{myState.name}<br />
        <br />
        <button onClick={() => updateMyState(myState, setMyState, (x) => x.clicksCount++)}>click</button><br />
        <input type="text" value={myState.name} onChange={(e) => updateMyState(myState, setMyState, (x) => x.name = e.target.value)} />
    </div>
}
