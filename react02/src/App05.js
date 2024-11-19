import React, { useState } from 'react'

function App06(props){
    return <div id='target'>{props.msg}</div>;
}
function App05() {
    let [msg,setMsg]=useState('초기값');

    const btnClick=e=>{
        console.log('클릭',e);
    };
    const formSubmit=e=>{
        e.preventDefault();
        console.log(msg);
    };

  return (
    <>
        <h2>react event</h2>
        <form onSubmit={formSubmit}>
        <input onChange={e=>{setMsg(e.target.value);}} value={msg}/>
        <button type='submit'>전달</button>
        </form>
        <button onClick={btnClick}>click</button>
        <button onClick={(e)=>{btnClick();}}>click</button>
        <App06 msg={msg}/>
    </>
  )
}

export default App05

