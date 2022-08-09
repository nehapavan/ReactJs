import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import ConditionalRendering from './components/ConditionalRendering';
// import ListRendering from './components/ListRendering';
// import HookArray from './useStateHook/HookArray';
// import UpdateName from './useEffectHook/UpdateName';
// import UseContextHook from './useContext/UseContextHook';
// import LoginForms from './react-redux/LoginForms';
// import BankApp from './Bank/BankApp';
// import RoutingScreens from './components/RoutingScreens';
// import ClassComponents from './components/ClassComponents';
// import Names from './components/ConceptOfprops';
// import Message from './components/ConceptOfState';
// import Counter from './components/Counter';
// import EventHandling from './components/EventHandling';
// import HelooWorld from './components/HelooWorld';
// import ParentComponent from './components/ParentComponent';
// import Hello from './components/WithJSX';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './react-redux/CounterRedux';
function App() {
  const count = useSelector(state => state.rootReducer.Counter.count)

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  };
  const handleDecrement = () => {
    dispatch(decrement())
  }
  return (
    <div className="App">
      <h1>Welcome to redux store</h1>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment </button>
      <button onClick={handleDecrement}>Decrement </button>
    </div>
  );
}

export default App;
