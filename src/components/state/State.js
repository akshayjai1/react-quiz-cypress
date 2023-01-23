import { useState, useEffect } from 'react'
export const State = () => {
  const [data, setData] = useState({})
  const [counter, setCounter] = useState(2)
  useEffect(() => {
    data.x = counter + 1
    // setData(data)
    setData({ ...data })
    console.log('state useEffect')
  }, [])
  return (
    <div>
      Checking infinite logic by mutating state<p>{JSON.stringify(data)}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>
        increment
      </button>
    </div>
  )
}
/*
state1     state2
1               2




*/
