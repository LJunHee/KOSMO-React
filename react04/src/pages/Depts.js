import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styleTitle } from './Frame';
import logo from '../logo.svg';

function Depts() {
    const[list,setList]=useState(null);

    useEffect(()=>{

        fetch('http://localhost:8080/dept/')
        .then(e=>e.json())
        .then(json=>{
            const arr = json.map(ele=>{
                return (<tr key={ele.deptno}>
                    <td><Link to={'/dept/detail?deptno='+ele.deptno}>{ele.deptno}</Link></td>
                    <td><Link to={'/dept/detail?deptno='+ele.deptno}>{ele.dname}</Link></td>
                    <td><Link to={'/dept/detail?deptno='+ele.deptno}>{ele.loc}</Link></td>
                    </tr>);
            });
            setList(arr);
        });
    },[]);

    return (
        <>
        <h2 style={styleTitle}>List page</h2>
        <table>
            <thead>
                <tr>
                    <th>deptno</th>
                    <th>dname</th>
                    <th>loc</th>
                </tr>
            </thead>
            {list?<tbody>{list}</tbody>:<img src={logo}/>}
        </table>
        <p><Link to={'/dept/add'}>입력</Link></p>
        </>
    )
}

export default Depts