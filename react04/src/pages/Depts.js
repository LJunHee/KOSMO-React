import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { styleTitle } from './Frame';

function Depts() {
    const[list,setList]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/dept/')
        .then(e=>e.json())
        .then(json=>{
            const arr = json.map(ele=>{
                return (<tr>
                    <td>{ele.deptno}</td>
                    <td>{ele.dname}</td>
                    <td>{ele.loc}</td>
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
            <tbody>{list}</tbody>
        </table>
        <p><Link to={'/dept/add'}>입력</Link></p>
        </>
    )
}

export default Depts