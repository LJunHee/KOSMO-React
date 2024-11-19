import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Dept() {
    const {id}=useParams();
    const [obj,setObj]=useState();
    useEffect(()=>{
        fetch('https://dummyjson.com/products/'+id)
        .then(e=>e.json())
        .then(data=>{
            setObj(data);
        })
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
    <div>Detail page</div>
    <form>
        <div><input name='id' value={obj?obj.id:null} readOnly/></div>
        <div><input name='category' value={obj?obj.category:null} readOnly/></div>
        <div><input name='title' value={obj?obj.title:null} readOnly/></div>
        <div><input name='price' value={obj?obj.price:null} readOnly/></div>
    </form>
    </>
  )
}
export default Dept