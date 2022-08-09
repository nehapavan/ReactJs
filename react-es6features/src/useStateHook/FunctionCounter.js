import React, {useState} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }
  const decrementCount = () => {
    setCount(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }
  const reset =()=>{
    setCount({
        count: 0
    })
  }
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount + 1)
    }
}
  return (
    <div>
        <h2>Count : {count}</h2>
      <button onClick={reset}>Increment</button>

      <button onClick={incrementCount}>Decrement</button>
      <button onClick={decrementCount}>Increment</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounter;