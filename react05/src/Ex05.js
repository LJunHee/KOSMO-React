import React, { useCallback, useState } from 'react'
import Ex06 from './Ex06';

function Ex05() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      },[todos]);
  
    return (
      <>
        <Ex06 todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    );
}

export default Ex05