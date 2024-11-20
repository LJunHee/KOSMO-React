import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Frame() {
    const [menu,setMenu]=useState('Home');

  return (
    <>
    {/* 메뉴 */}
    <nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <Link class="navbar-brand" to="#">
                인제대학교
            </Link>
        </div>
        <ul class="nav navbar-nav">
            <li className={menu=='Home'?'active':''}><NavLink className={
                    ({ isActive, isPending }) =>{if(isActive){setMenu('Home');}}
                } to="/">Home</NavLink></li>
            <li className={menu=='Intro'?'active':''}><NavLink className={
                    ({ isActive, isPending }) =>{if(isActive){setMenu("Intro");}}
                } to="/intro">Intro</NavLink></li>
            <li className={menu=='Dept'?'active':''}><NavLink className={
                    ({ isActive, isPending }) =>{if(isActive){setMenu("Dept");}}
                } to="/dept/">Dept</NavLink></li>
        </ul>
    </div>
    </nav>
    <div className='container'>
        <div className='content'>
            <Outlet/>
        </div>
        <div className='footer'>
            <address>
            김해캠퍼스 (50834) 경남 김해시 인제로 197
            <p>Copyright &copy; 1996-2024 INJE University. All rights reserved.</p>
            </address>
        </div>
    </div>
    </>
  )
}

export default Frame