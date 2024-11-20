import React, { memo, useEffect } from 'react'

function Ex06({todos,addTodo}) {
  useEffect(()=>{
    console.log('ex06 rendering...');
  });
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
}

export default memo(Ex06);