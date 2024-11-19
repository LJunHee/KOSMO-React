import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Dept() {
    const[arr,setArr]=useState([]);
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(e=>e.json())
        .then(data=>{
            setArr(data.products);
        });
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
        <div>List page</div>
        <p><Link to = {'/dept/add'}>입력</Link></p>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th style={{borderBottom:'1px solid gray'}}>id</th>
                    <th style={{borderBottom:'1px solid gray'}}>category</th>
                    <th style={{borderBottom:'1px solid gray'}}>title</th>
                    <th style={{borderBottom:'1px solid gray'}}>price</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((ele,idx)=>{
                    return (
                <tr>
                    <td style={{borderTop:'1px solid gray'}}><Link style={{color:'gray',textDecoration:'none'}} to={'/dept/'+ele.id}>{ele.id}</Link></td>
                    <td style={{borderTop:'1px solid gray'}}><Link style={{color:'gray',textDecoration:'none'}} to={'/dept/'+ele.id}>{ele.category}</Link></td>
                    <td style={{borderTop:'1px solid gray'}}><Link style={{color:'gray',textDecoration:'none'}} to={'/dept/'+ele.id}>{ele.title}</Link></td>
                    <td style={{borderTop:'1px solid gray'}}><Link style={{color:'gray',textDecoration:'none'}} to={'/dept/'+ele.id}>{ele.price}</Link></td>
                </tr>
                    );
                })}
            </tbody>
        </table>
    </>
  )
}

export default Dept