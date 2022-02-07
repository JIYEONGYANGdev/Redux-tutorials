import React from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from './actions'

function App() {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hi this is learning redux time</h1>
        <p>Counter {counter}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        {isLogged ? <h3>happy to see u :)</h3> : <h3>'nothing you can see'</h3>}
    </div>
  );
}

export default App;
