import React, { memo, useEffect } from 'react'

function Ex04({obj}) {
    useEffect(()=>{
        console.log('ex04 randering...');
    });
  return (
    <div>su2:{obj.su2}</div>
  )
}

export default memo(Ex04);