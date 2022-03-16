import {useState, useEffect} from 'react'


const Counter = (props) => {
  //we render, then useEffect is called; 
  useEffect(()=>{
console.log("USE EFFECT counter func mounted")
  },[])
  console.log('mounted')

  
  //const [state, setState] = useState(initialState)
  //when you call  setState method, it updates the count state 
  // and it triggers a rerender
  
  const [count, setCount] = useState(0)
  const doStuffWithUpdatedCount = (count) => {
    //we need to log updatedCount here (the correct state)
    console.log('count in doStuffWithUpdatedCount:', count)
  }

  const add = () => {
    console.log('about to update count state')
    //this is an async function, so can't assume it will be updated 
    //it will by the time your component renders 
    //dostuffwith updatedcount is a way to get around async
    //make a variable called newCount which has teh right value (count + 1)
    let newCount = count + 1
    setCount(newCount)
    doStuffWithUpdatedCount(newCount)
    console.log('count state updated ')
    //count is not updated, but it is in the UI, why? 
    console.log(`count ${count}`)

  }
  console.log('rendering Counter Function ')
  console.log(`count before render: ${count}`) //part of async, it will become 1 before it renders 
  return(
    <div className="border">
      <h1>Counter</h1>
      <p>count: {count}</p>
      <button onClick={add}>add</button>
    </div>
  )
}

export default Counter