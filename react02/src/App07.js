import React, { useState } from 'react'

function App07() {

//   const [input1,setInput1]=  useState('');
//   const [input2,setInput2]=  useState('');
  const [inputs,setInputs]=  useState({input1:'',input2:''});

  const inputFunc=e=>{
    if(e.target.name=='deptno')
        setInputs({...inputs,input1:e.target.value});
    if(e.target.name=='dname')
        setInputs({...inputs,input2:e.target.value});
  };

  return (
    <div>
        <input value={inputs.input1} name='deptno' onChange={inputFunc}/>
        <input value={inputs.input2} name='dname' onChange={inputFunc}/>
    </div>
  );
}
export default App07;