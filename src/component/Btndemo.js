import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useState } from "react";
import { decrement, increment, incrementAsync,selectCount} from "./counterSlice";

const Btndemo=()=>{
    const count = useSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState('2');
    const dispatch=useDispatch()
    return(
        <>
            <button onClick={ ()=>{ dispatch(increment()) } }>+</button>

            <button onClick={ ()=>{ dispatch(decrement()) } }>-</button>

            <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)}></input>
            <button onClick={ ()=>{ dispatch(increment(Number(incrementAmount)) )} }>Add</button>


            <button onClick={ ()=> dispatch(incrementAsync(Number(incrementAmount)) ) }>async</button>









 
         
       
        
        
   
        </>
    )
}
export default Btndemo