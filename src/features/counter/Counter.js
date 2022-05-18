import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';


const Counter = () => {

  
  const count = useSelector((state) => state.counter.count);
  const [amount,setAmount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
       <button onClick={() => dispatch(increment())}>Increment</button> 
       <button onClick={() => dispatch(decrement())}>Decrement</button> 
       <br/>

       <input value={amount} onChange={dispatch(incrementByAmount())} />
       button

       <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter;