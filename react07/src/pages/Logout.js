import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../App';

function Logout() {
    const [login,setLogin]=useContext(LoginContext);
    useEffect(()=>{
        fetch('http://localhost:8080/login/logout',{
            method:'GET',
            credentials:'include'
        })
        .then(res=>res.ok)
        .catch(alert)
        .finally(()=>{
            setLogin(false);
        });
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
            <h2>logout page</h2>
            <p>이용해주셔서 감사합니다</p>
        </div>
    </>
  )
}

export default Logout