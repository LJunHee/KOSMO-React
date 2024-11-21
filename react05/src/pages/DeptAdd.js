import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from './components/FormInput';

function DeptAdd() {
  const [inputVals,setInputVals]=useState({deptno:'',dname:'',loc:''});
  const navigate=  useNavigate();
  const refInp1=useRef();
  const refInp2=useRef();
  const refInp3=useRef();
  const deptSend=e=>{
    e.preventDefault();
    fetch('http://localhost:3030/dept/',{
        method:'POST',
        body:JSON.stringify({deptno:e.target.deptno.value,dname:e.target.dname.value,loc:e.target.loc.value}),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(e=>{
        if(e.ok) 
            navigate('/dept/');
    }).catch(err=>{
        alert(err);
    });

  };
  const editVal=e=>{
    if(e.target.name=='deptno')
        setInputVals({...inputVals,deptno:e.target.value});
    if(e.target.name=='dname')
        setInputVals({...inputVals,dname:e.target.value});
    if(e.target.name=='loc')
        setInputVals({...inputVals,loc:e.target.value});
  };
  return (
    <>
        <h2 className='page-header'>입력 페이지</h2>
        <form onSubmit={deptSend}>
            <FormInput ref={refInp1} name='deptno' val={inputVals.deptno} editVal={editVal}/>
            <FormInput ref={refInp2} name='dname' val={inputVals.dname} editVal={editVal}/>
            <FormInput ref={refInp3} name={'loc'} val={inputVals.loc} editVal={editVal}/> 
            
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>입력</button>
                <button type='reset' className='btn btn-default btn-block'>취소</button>
            </div>
        </form>
    </>
  )
}

export default DeptAdd