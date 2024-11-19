import React, { useEffect } from 'react'
import Ex03 from './Ex03';

function Ex01(props) {
    useEffect(()=>{
        console.log(props);
    });
  return (
    <>
    <div>su:{props.su}</div>
    {props.children}
    <div>name:{props.name}</div>
    </>
  )
}

export default Ex01