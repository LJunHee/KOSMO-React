import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Intro() {
    useEffect(()=>{
        console.log('intro');
    },[]);
    const styleLi={float:'left',width:98,marginLeft:1,marginRight:1};
    const styleLink={
        display:'block',height:35,backgroundColor:'gray',
        textAlign:'center',color:'white',textDecoration:'none'
    };
  return (
    
    <>
        <nav style={{clear:'left',height:35,borderBottom:'1px solid gray'}}>
            <ul style={{listStyle:'none',padding:0,width:300,margin:'auto'}}>
                <li style={styleLi}><Link to={'/'} style={styleLink}>home</Link></li>
                <li style={styleLi}><Link to={'/intro'} style={styleLink}>intro</Link></li>
                <li style={styleLi}><Link to={'/dept/'} style={styleLink}>dept</Link></li>
            </ul>
        </nav>
        <div  style={{color:'red',textAlign:'center',clear:'left'}}>Intro page</div>
        <img src='https://www.inje.ac.kr/kor/assets/images/sub/gimhae-campus-1-241008.jpg'/>
    </>
  )
}

export default Intro