import React from 'react'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <>
        <nav>
            <Link to={'/'}>home</Link>{'    '}
            <Link to={'/intro'}>intro</Link>{'    '}
            <Link to={'/dept/'}>dept</Link>{'    '}
            <Link to={'/login/'}>login</Link>
        </nav>
        <div className='container'>
            <h2>intro page</h2>
        </div>
    </>
  )
}

export default Intro