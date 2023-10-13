import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../redux/action/counter.action';

function Counter(props) {

    const c1 = useSelector((state) => state.counter)

    const Dispatch = useDispatch()

    const handleIncrement = () => {
        Dispatch(Increment())
    }

    const handleDecrement = () => {
        Dispatch(Decrement())
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            {c1.count}
            <button onClick={handleDecrement}>-</button>
        </div>
    );
}

export default Counter;