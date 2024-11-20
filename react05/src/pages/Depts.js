import React, { Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Row from './components/Row';
// const Row =React.lazy(()=>import('./components/Row'));

function Depts() {
    const [arr ,setArr]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3030/dept/')
        .then(res=>res.json())
        .then(json=>{
            console.log(json.result);
            setArr([...json.result]);
        }).catch(e=>alert(e))
    },[]);

  return (
    <>
        <h2 className='page-header'>List page</h2>
        <div className="list-group">
            <div className="list-group-item active">
                <h4 className="list-group-item-heading">DNAME</h4>
                <p className="list-group-item-text">LOCATION</p>
            </div>
        <Suspense fallback={<Loading/>}>
            {arr.map(ele=><Row dname={ele.DNAME} loc={ele.LOC} deptno={ele.DEPTNO}/>)}
        </Suspense>
            
        </div>
        <Link to={'/dept/add'} className='btn btn-primary btn-block' role='button'>입력</Link>
    </>
  )
}
function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
export default Depts