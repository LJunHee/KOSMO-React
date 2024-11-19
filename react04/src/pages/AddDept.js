import React from 'react'
import { json, useNavigate } from 'react-router-dom'
import {styleTitle} from './Frame'

function AddDept() {
    const navigate = useNavigate();

    const submitAction = e=>{
        e.preventDefault();
        console.log(e.target.dname.value,e.target.loc.value);
        const param={'dname':e.target.dname.value, 'loc':e.target.loc.value};

        fetch('http://localhost:8080/dept/', {
            method:'POST',
            body:JSON.stringify(param),
            headers:{'Content-Type':'application/json'}
        })
        .then(e=>{
            return e.ok;
        })
        .then(e=>{
            if(e) navigate('/dept/');
        });
    };
  return (
    <>
        <h2 style={styleTitle}>Add page</h2>
        <form onSubmit={submitAction}>
            <div><input name='dname' placeholder='dname'/></div>
            <div><input name='loc' placeholder='loc'/></div>
            <div>
                <button>입력</button>
                <button type='reset'>취소</button>
                <button type='button' onClick={e=>navigate(-1)}>뒤로</button>
            </div>
        </form>
    </>
  )
}

export default AddDept