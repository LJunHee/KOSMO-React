import React, { useRef, useState } from 'react'

function Ex02() {
    const [input1,setInput1]=useState('');
    const input2=useRef();
  return (
    <div>
        <input ref={input2} onChange={e=>{setInput1(e.target.value);}} value={input1}/>
        <button onClick={e=>{console.log(input2.current.value);}}>클릭</button>
    </div>
  )
}

export default Ex02