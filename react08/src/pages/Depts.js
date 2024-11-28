import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LoginContext } from '../App';
import axios from 'axios';

function Depts() {
    const [login,setLogin]=useContext(LoginContext);
    const navigate=useNavigate();
    const [arr,setArr]=useState([]);
    
    useEffect(()=>{
        console.log(login);
        fetch('http://localhost:8080/dept/',{
            method:'GET',referrerPolicy:'origin-when-cross-origin',
            headers:{
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+login
            }
        })
        .then(e=>e.json()).then(json=>setArr(json)).catch(alert)
        // axios.get('http://localhost:8080/dept/',{
        //     withCredentials: true,
        //     //Authorization:'Bearer '+login,
        //         headers: {
        //             // "Cache-Control": "no-cache",
        //             "Content-Type": "application/json",
        //             // "Access-Control-Allow-Origin": "*",
        //           'Authorization': 'Bearer '+login
        //     }
        // }).then(json=>setArr(json.data))
        // .catch(err=>{
        //     console.log(err);
        //     navigate('/login/');
        // })

    },[]);
  return (
    <>
        <nav>
            <Link to={'/'}>home</Link>{'    '}
            <Link to={'/intro'}>intro</Link>{'    '}
            <Link to={'/dept/'}>dept</Link>{'    '}
            <Link to={'/login/'}>login</Link>
        </nav>
        <div className='container'>
            <h2>list page</h2>
            {arr.map(ele=>(
            <Link to={'/dept/'+ele.deptno}>
            <dl>
                <dt>{ele.dname}</dt>
                <dd>{ele.loc}</dd>
            </dl>
            </Link>
        ))}
        </div>
    </>
  )
}

export default Depts