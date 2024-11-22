import React, { useEffect, useState } from 'react'
import FormGroup from './components/FormGroup'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

function DeptEdit() {
    const location=useLocation();
    const navigate=useNavigate();
    const [deptno,setDept]=useState(0);
    const [bean,setBean]=useState(null);
    useEffect(()=>{
      setDept(location.search.split('=')[1]);
    },[]);
    useEffect(()=>{
      if(deptno!=0)
        fetch(`http://localhost:3030/dept/${deptno}`)
        .then(res=>res.json())
        .then(json=>setBean(json))
        .catch(alert)
    },[deptno]);
    const editVal=(e)=>{
      if(e.target.name=='dname')
        setBean({...bean,DNAME:e.target.value});
      if(e.target.name=='loc')
        setBean({...bean,LOC:e.target.value});
    };
    const editFormAction=(e)=>{
      e.preventDefault();
      console.log('submit');
      fetch('http://localhost:3030/dept/'+deptno,{
        method:'PUT',
        body:JSON.stringify(bean),
        headers:{
          'Content-Type':'application/json'
        }
      }).then(e=>e.ok?navigate('/dept/'):console.log(e.status)).catch(alert);
    };
  return (
    <>
        <h2>edit page</h2>
        <form onSubmit={editFormAction}>
            <FormGroup label={'deptno'} name={'deptno'} val={bean!=null?deptno:''} edit={true}/>
            <FormGroup label={'dname'} name={'dname'} val={bean!=null?bean.DNAME:''} cb={editVal}/>
            <FormGroup label={'loc'} name={'loc'} val={bean!=null?bean.LOC:''} cb={editVal}/>
            <Button type='submit'>수정</Button>
        </form>
    </>
  )
}

export default DeptEdit