import React, { useEffect, useState } from 'react'

export default function Ex01() {
    const [su, setSu]=useState(1111);
    const [obj,setObj]=useState({key1:'val1',su2:2222});

    useEffect(()=>{
        console.log('effect..',su);
        setTimeout(()=>setSu(su+1),1000);
    },[]);

  return (
    <>
        <h2>state {Date().to}</h2>
        <div>su:{su}</div>
        <div>{obj.key1}:{obj.su2}</div>

        <button onClick={e=>{
            setSu(su+1);
            setSu(su+2);
            setSu(su+3);
        }}>click1</button>
        <button onClick={e=>{
            const obj2={...obj,su2:obj.su2+1};
            setObj(obj2);
        }}>click2</button>
    </>
  )
}
