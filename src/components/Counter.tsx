import React, { useState, useEffect } from 'react';
import useStateRef from "../composable/useStateRef"
import Button from '../components/Button';

const Counter = () => {
  const [count, setCount, countRef] = useStateRef(0)

  useEffect(() => {
    console.log(count)
  }, [count]);

  return (
    <div>
      <Button
        size='lg'
        type='secondary'
        action={() => setCount((count: number) => count + 1)}
      >增加</Button>
      <p>count is {count}</p>
    </div>
  )
}

export default Counter;