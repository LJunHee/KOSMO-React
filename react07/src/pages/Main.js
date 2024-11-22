import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../App';

function Main() {
    const [login,setLogin]=useContext(LoginContext);
  return (
    <>
        <nav>
            <Link to={'/'}>home</Link>{'    '}
            <Link to={'/intro'}>intro</Link>{'    '}
            <Link to={'/dept/'}>dept</Link>{'    '}
            {login?<Link to={'/logout/'}>logout</Link>:<Link to={'/login/'}>login</Link>}
        </nav>
        <div className='container'>
            <h2>index page</h2>
        </div>
    </>
  )
}

export default Main