import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './component/counterSlice'
import Btndemo from './component/Btndemo';


function App() {
  const count = useSelector(state => state.counter.value)
  const count1= useSelector(state => state.counter.text)
  const dispatch = useDispatch()
  return (
    <div className="App">
      
        <h1>{count}</h1>
        <h1>{count1}</h1>
        
        <Btndemo/>
      
  
      </div>
  
  );
}

export default App;
