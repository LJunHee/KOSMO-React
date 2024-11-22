import React, { useContext } from 'react'
import FormGroup from './components/FormGroup'
import { useNavigate } from 'react-router-dom';
import LoginContext from './components/LoginContext';

function Login() {
    const navigate=useNavigate();
    const obj=useContext(LoginContext);
    const loginAction=(e)=>{
        e.preventDefault();
        const [id,pw]=([e.target.id.value,e.target.pw.value]);
        const bean={id,pw};
        console.log(bean);
        fetch('http://localhost:3030/login/',{
            method:'POST',
            cache: "no-cache",
            body:`id=${id}&pw=${pw}`,
            // body:JSON.stringify(bean),
            mode:'cors',
            credentials:'include',
            referrerPolicy:'origin-when-cross-origin',
            headers:{
                // 'Content-Type':'application/json'
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(res=>res.json()).then(()=>{
            obj.setUser({...obj,id});
            navigate('/');
        }).catch(alert);
    };
  return (
    <>
        <h2>login page</h2>
        <form onSubmit={loginAction}>
            <FormGroup label={'id'} name={'id'}/>
            <FormGroup label={'pw'} name={'pw'}/>
            <button type='submit'>로그인</button>
        </form>
    </>
  )
}

export default Login