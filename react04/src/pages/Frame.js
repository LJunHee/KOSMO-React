import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Frame(props) {
    const styleUl={width:'100%',height:'35px',padding:0,listStyle:'none'};
    const styleLi={float:'left',height:35, width:100};
    const styleLink={backgroundColor:'gray',margin:1,display:'block'};
    const styleContent={};
    const styleFooter={backgroundColor:'gray',color:'white'};
  return (
    <>
        <nav style={{backgroundColor:'darkgray'}}>
            <ul style={styleUl}>
                <li style={styleLi}><Link style={styleLink} to={'/'}>HOME</Link></li>
                <li style={styleLi}><Link style={styleLink} to={'/intro/'}>INTRO</Link></li>
                <li style={styleLi}><Link style={styleLink} to={'/dept/'}>DEPT</Link></li>
                <li style={styleLi}><Link style={styleLink} to={'/login/'}>LOGIN</Link></li>
            </ul>
        </nav>
        <div id='content' style={styleContent}>
            {<Outlet/>}
        </div>
        <div id='footer' style={styleFooter}>
            <p>김해캠퍼스 (50834) 경남 김해시 인제로 197</p>
            <p>Copyright&copy; 2024 INJE University. All rights reserved.</p>
        </div>
    </>
  )
}
export const styleTitle = {borderBottom:'2px solid gray',width:1200,textAlign:'center',margin:'auto'};
export default Frame