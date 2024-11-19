import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddDept() {
    const navigate = useNavigate();

    const formSubmit=e=>{
        e.preventDefault();
        console.log(e.target.category.value,e.target.title.value,e.target.price.value);
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category:e.target.category.value,  
                title: e.target.title.value,
                price: e.target.price.value
            })
          })
        .then(e=>e.json())
        .then(data=>{
            navigate('/dept/');
        });
    };

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
        <h2>입력 페이지</h2>
        <form style={{display:'block'}} onSubmit={formSubmit}>
            <div><input style={{display:'block',width:'80%',marginLeft:'10%'}} name='category' placeholder='category'/></div>
            <div><input style={{display:'block',width:'80%',marginLeft:'10%'}} name='title' placeholder='title'/></div>
            <div><input style={{display:'block',width:'80%',marginLeft:'10%'}} name='price' placeholder='price'/></div>
            <div>
                <button style={{display:'block',width:'80%',marginLeft:'10%'}}>입력</button>
            </div>
        </form>
        </>
  )
}

export default AddDept