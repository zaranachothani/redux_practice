import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, demoapp } from './App/reducer/counterSlice';

function App() {

  const count= useSelector((state) => state.counter.value);
  // const name= useSelector((state) => state.counter.name);
  // const email= useSelector((state) => state.counter.email);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <span>Count : {count}</span>
        {/* <span>Count : {name}</span> */}
        {/* <span>Count : {email}</span> */}

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(demoapp())}>increment by 5</button>
    </div>
  );
}

export default App;
