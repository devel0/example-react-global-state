import React from 'react';
import { MyState } from './MyState';
import { useStateNfo } from './StateUtils';

export default function Component2() {
    const myStateNfo = useStateNfo<MyState>("mystore");

    return <div>
        <h3>Component2</h3>
        clicksCount:{myStateNfo.state.clicksCount}<br />
        name:{myStateNfo.state.name}<br />
        <br />
        <button onClick={() => myStateNfo.set((x) => x.clicksCount++)}>click</button><br />
        <input type="text" value={myStateNfo.state.name} onChange={(e) => myStateNfo.set((x) => x.name = e.target.value)} />
    </div>
}
