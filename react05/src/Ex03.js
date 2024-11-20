import React, { useState } from 'react'
import Ex04 from './Ex04';

function Ex03() {
    const [su1 , setSu1]=useState(1111);
    const [obj, setObj]=useState({su2:2222});
  return (
    <div>
        <div>su1:{su1}</div>
        <Ex04 obj={obj}/>
        <button onClick={e=>{
            setSu1(su1+1);
        }}>click1</button>
        <button onClick={e=>{
            setObj({...obj,su2:obj.su2+1});
        }}>click2</button>
    </div>
  )
}

export default Ex03