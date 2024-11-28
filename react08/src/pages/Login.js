import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../App';

function Login() {
    const [login,setLogin]=useContext(LoginContext);
    const navigate=useNavigate();
    const refId=useRef();
    const refPw=useRef();
    const loginAction=(e)=>{
        console.log(`id=${refId.current.value}&pw=${refPw.current.value}`);
        e.preventDefault();
        fetch('http://localhost:8080/login/',{
            method:'POST',
            body:`id=${refId.current.value}&pw=${refPw.current.value}`,
            // credentials:'include',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res=>res.text())
        .then(token=>{
            setLogin(token);
            navigate('/');
        })
        .catch(alert);
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
            <h2>login page</h2>
            <form onSubmit={loginAction}>
                <div>
                    <input ref={refId} name='id' placeholder='email'/>
                </div>
                <div>
                    <input ref={refPw} name='pw' placeholder='password'/>
                </div>
                <div>
                    <button>로그인</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login