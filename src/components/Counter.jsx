import React from 'react';
import  useCountStore  from '../app/counterStore';
import { CgAdd } from 'react-icons/cg';
import { CiCircleMinus } from 'react-icons/ci'; // Corrected icon import
import '../index.css';

function CounterApp() {
    const count = useCountStore((state) => state.count);
    const increment = useCountStore((state) => state.addItem);
    const decrement = useCountStore((state) => state.removeItem);

    return (
        <div className='container'>
            <h1>Count: <span>{count}</span></h1>

            <div className="btns">
                <button onClick={increment}><CgAdd /></button>
                <button onClick={decrement}><CiCircleMinus /></button>
            </div>
        </div>
    );
}

export default CounterApp;
