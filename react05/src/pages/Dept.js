import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FormInput from './components/FormInput';

function Dept() {
  const {deptno}=useParams();
  const [bean,setBean]=useState(null);
  
  useEffect(()=>{
    console.log(bean);
    fetch('http://localhost:3030/dept/'+deptno)
    .then(e=>e.json())
    .then(data=>{
        console.log(bean);
        setBean({...data});
        
    console.log(bean);
    }).catch(err=>{
        alert(err);
    });
  },[]);
  
  const editVal=e=>{
    if(e.target.name=='deptno')
        setBean({...bean,DEPTNO:e.target.value});
    if(e.target.name=='dname')
        setBean({...bean,DNAME:e.target.value});
    if(e.target.name=='loc')
        setBean({...bean,LOC:e.target.value});
  };

  return (
    <>
    <h2>Dept detail{deptno}</h2>
    <form>
        <FormInput ref={null} name={'deptno'} value={bean?bean.DEPTNO:''} editVal={editVal}/>
        <FormInput ref={null} name={'dname'} value={bean?bean.DNAME:''} editVal={editVal}/>
        <FormInput ref={null} name={'loc'} value={bean?bean.LOC:''} editVal={editVal}/>
    </form>
    </>
  )
}

export default Dept