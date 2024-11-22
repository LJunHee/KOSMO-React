import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Dept() {
    const navigate=useNavigate();
    const {deptno}=useParams();
    const [bean,setBean]=useState(null);
    const [editable,setEditable]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:8080/dept/'+deptno,{
            method:'GET',
            credentials:'include'
        })
        .then(res=>res.json()).then(json=>setBean(json)).catch(alert);
    },[]);

    const editAction=(e)=>{
        e.preventDefault();
        if(editable)
            setEditable(!editable);
        else
            navigate('/dept/');
    };
  return (
    <>
        <nav>
            <Link to={'/'}>home</Link>{'    '}
            <Link to={'/intro'}>intro</Link>{'    '}
            <Link to={'/dept/'}>dept</Link>{'    '}
            <Link to={'/login/'}>login</Link>
        </nav>
        <div className='container'>
            <h2>{editable?'edit':'detail'} page</h2>
            <form onSubmit={editAction}>
                <div>
                    <input name='deptno' value={bean==null?'':bean.deptno} readOnly={true}/>
                </div>
                <div>
                    <input name='dname' value={bean==null?'':bean.dname} 
                        onChange={e=>setBean({...bean,dname:e.target.value})} readOnly={editable}/>
                </div>
                <div>
                    <input name='loc' value={bean==null?'':bean.loc}
                        onChange={e=>setBean({...bean,loc:e.target.value})} readOnly={editable}/>
                </div>
                <div>
                    <button type='submit'>수정</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Dept