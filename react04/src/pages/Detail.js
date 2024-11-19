import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {styleTitle} from './Frame'

function Dept() {
    const navigate = useNavigate();
    const location=useLocation();
    const [bean,setBean] = useState({deptno:'-',dname:'-',loc:'-'});
    useEffect(()=>{
        const deptno=Number(location.search.split('=')[1]);
        fetch('http://localhost:8080/dept/'+deptno)
        .then(e=>e.json())
        .then(e=>{
            setBean({...e});
        });
    },[]);
  return (
    <>
        <h2 style={styleTitle}>Detail page</h2>
        <form>
            <div><input name='deptno' value={bean.deptno}/></div>
            <div><input name='dname' value={bean.dname}/></div>
            <div><input name='loc' value={bean.loc}/></div>
        </form>
    </>
  )
}

export default Dept