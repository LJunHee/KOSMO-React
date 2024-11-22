import React, { useEffect } from 'react'

function Intro() {
  useEffect(()=>{
    fetch('http://localhost:3030/login/test',{
      method:'GET',
      credentials:'include'
    }).then(res=>res.json()).then(console.log).catch(alert)
  },[]);
  return (
    <>
    <h2>intro page</h2>
    </>
  )
}

export default Intro